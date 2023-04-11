import { Sketch } from "@uiw/react-color"
import { useContext } from "react"
import "./Overlay.css"
import { SettingContext } from "./SettingProvider"
const Overlay = () => {
  const {color, fontColor, setColor, setFontColor} = useContext(SettingContext)
  return (
    <div className="overlay_container" style={{color: fontColor}}>
      <h2>Background</h2>
        <Sketch 
          color= {color}
          onChange={(color) => {
            setColor(color.hex)
          }}
        />
      <h2>Color</h2>
        <Sketch 
          color= {fontColor}
          onChange={(color) => {
            setFontColor(color.hex)
          }}
        />
    </div>
  )
}

export default Overlay