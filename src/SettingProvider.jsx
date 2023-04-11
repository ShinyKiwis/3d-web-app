import { createContext, useState } from "react";

export const SettingContext = createContext(null)

export const SettingProvider = ({children}) => {
  const [color, setColor] = useState("#48203D")
  const [fontColor, setFontColor] = useState("#FFF")
  return (
    <SettingContext.Provider value={{color, setColor, fontColor, setFontColor}}>
      {children}
    </SettingContext.Provider>
  )
}