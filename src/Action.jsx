import "./Action.css";
import {
  BsFillCalendarFill,
  BsClockFill,
  BsFillClipboardCheckFill,
  BsTrashFill,
  BsFillCloudRainFill,
  BsWind,
  BsBookFill,
  BsFillCloudSnowFill,
  BsPauseFill,
} from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import useSound from "use-sound";
import { useContext } from "react";
import { SettingContext } from "./SettingProvider";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Task = ({ idx, content, setTaskList }) => {
  const ref = useRef(null);
  const handleDelete = () => {
    setTaskList((taskList) => taskList.filter((task) => task != content));
  };
  const handleFinish = () => {
    ref.current.style.textDecoration = "line-through";
    setTimeout(handleDelete, 5000);
  };
  return (
    <div className="task" ref={ref} onClick={handleFinish}>
      <span>{idx}</span>.<span>{content}</span>
      <BsTrashFill size="1em" onClick={handleDelete} />
    </div>
  );
};

const SoundButton = ({ Icon, effect, fontColor }) => {
  return (
    <div
      onClick={effect}
      style={{ border: `2px solid ${fontColor}`, borderRadius: "0.8em" }}
    >
      <Icon className="sound_button" color={fontColor} />
    </div>
  );
};

const Action = () => {
  const { fontColor } = useContext(SettingContext);
  const [focusTime, setFocusTime] = useState({ minutes: -1, seconds: -1 });
  const [isRunning, setIsRunning] = useState(false);
  const [rainSound, { stop: stopRain }] = useSound("./rain.mp3");
  const [windSound, { stop: stopWind }] = useSound("./wind.mp3");
  const [snowSound, { stop: stopSnow }] = useSound("./snow.mp3");
  const [finishSound] = useSound("./finish.mp3");
  const [date, setDate] = useState(new Date());
  const [isCheck, setIsCheck] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  useEffect(() => {
    console.log(isRunning);
    if (!isCheck) {
      setInterval(() => {
        setDate(new Date());
      }, 60000);
      setIsCheck(true);
    }

    if (isRunning) {
      setInterval(() => {
        if (focusTime.seconds === 0) {
          setFocusTime((focusTime) => ({
            minutes: focusTime.minutes - 1,
            seconds: 59,
          }));
        } else {
          setFocusTime((focusTime) => ({
            ...focusTime,
            seconds: focusTime.seconds - 1,
          }));
        }
      }, 1000);
    }
  }, [isRunning]);

  useEffect(() => {
    if (focusTime.minutes === 0 && focusTime.seconds === 0) {
      finishSound();
      setFocusTime({ minutes: -1, seconds: -1 });
    }
  }, [focusTime]);

  const stopSound = () => {
    stopRain();
    stopWind();
    stopSnow();
  };
  return (
    <div className="action_container" style={{ color: fontColor }}>
      <div className="action_info">
        <BsFillCalendarFill size={"1.5em"} />
        {days[date.getDay()].substring(0, 3)},{" "}
        {date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </div>
      <div className="action_info">
        <BsClockFill size={"1.5em"} />
        {date.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </div>
      <div className="action_info">
        <BsFillClipboardCheckFill size="1.5em" />
        Current tasks
      </div>
      <div className="action_info">
        <BsBookFill size="1.5em" />
        {focusTime.minutes >= 0 ? (
          `${focusTime.minutes}:${focusTime.seconds} left`
        ) : (
          <>
            <select
              onChange={(e) => {
                console.log(e.target.value);
                setFocusTime({
                  minutes: +e.target.value - 1,
                  seconds: 59,
                });
                setIsRunning(true);
              }}
            >
              <option>Pick your time</option>
              <option>1</option>
              <option>15</option>
              <option>20</option>
              <option>25</option>
              <option>30</option>
              <option>35</option>
              <option>40</option>
              <option>45</option>
              <option>50</option>
              <option>55</option>
              <option>60</option>
            </select>
            minutes
          </>
        )}
      </div>
      <div className="task_list">
        <form
          className="task_input"
          onSubmit={(e) => {
            e.preventDefault();
            if (task) {
              setTaskList([...taskList, task]);
            }
            setTask("");
          }}
        >
          <input
            placeholder="What you want to do ?"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button>Add a task</button>
        </form>
        <div className="tasks_container">
          {taskList.map((task, idx) => (
            <Task
              key={task}
              idx={idx + 1}
              content={task}
              setTaskList={setTaskList}
            />
          ))}
        </div>
      </div>
      <div className="sound_container">
        <SoundButton
          Icon={BsFillCloudRainFill}
          effect={rainSound}
          fontColor={fontColor}
        />
        <SoundButton Icon={BsWind} effect={windSound} fontColor={fontColor} />
        <SoundButton
          Icon={BsFillCloudSnowFill}
          effect={snowSound}
          fontColor={fontColor}
        />
        <SoundButton
          Icon={BsPauseFill}
          effect={stopSound}
          fontColor={fontColor}
        />
      </div>
    </div>
  );
};

export default Action;
