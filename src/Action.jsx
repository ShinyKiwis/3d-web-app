import "./Action.css"
import {BsFillCalendarFill, BsClockFill, BsFillClipboardCheckFill, BsTrashFill} from "react-icons/bs"
import { useState } from "react"
import { useEffect } from "react";
import { useRef } from "react";
import useSound from "use-sound";
import { useContext } from "react";
import { SettingContext } from "./SettingProvider";

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const Task = ({idx, content, setTaskList}) => {
  const ref = useRef(null)
  const handleDelete = () => {
    setTaskList(taskList => taskList.filter(task => task!=content))
  }
  const handleFinish = () => {
    ref.current.style.textDecoration = 'line-through'
    setTimeout(handleDelete, 5000)
  }
  return (
    <div className="task" ref={ref} onClick={handleFinish}>
      <span>{idx}</span>.
      <span>{content}</span>
      <BsTrashFill size="1em" onClick={handleDelete}/>      
    </div>
  )
}

const Action = () => {
  const {fontColor} = useContext(SettingContext)
  const [rainSound] = useSound('./rain.mp3')
  const [date, setDate] = useState(new Date())
  const [taskList, setTaskList] = useState([])
  const [task, setTask] = useState("")
  useEffect(()=>{
    setInterval(()=>{
      setDate(new Date())
    }, 60000)
  }, [])
  return (
    <div className="action_container" style={{color: fontColor}}>
      <div className="action_info">
        <BsFillCalendarFill size={"1.5em"}/>
        {
          days[date.getDay()].substring(0,3)
        },{' '}
        {
          date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })
        }
      </div> 
      <div className="action_info">
        <BsClockFill size={"1.5em"}/>
        {date.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
        })}
      </div>
      <div className="action_info">
        <BsFillClipboardCheckFill size="1.5em" />
        Current tasks
      </div>
      <div className="task_list">
        <form className="task_input" onSubmit={e => {
          e.preventDefault()
          if(task){
            setTaskList([...taskList, task])
          }
          setTask("")
        }}>
          <input placeholder="What you want to do ?" value={task} onChange={(e) => {
            setTask(e.target.value)
          }}/>
          <button>Add a task</button>
        </form>
          {
            taskList.map((task,idx) => (
              <Task key={task} idx={idx+1} content={task} setTaskList={setTaskList}/>
            ))
          }
      </div>
      <button onClick={rainSound} className="rain_button">Make it rain</button>
    </div>
  )
}

export default Action