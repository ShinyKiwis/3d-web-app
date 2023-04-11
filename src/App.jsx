import "./App.css"
import {Canvas} from "@react-three/fiber"
import { Room } from "./Room"
import { Suspense } from "react"
import { Bounds, OrbitControls } from "@react-three/drei"
import { useContext } from "react"
import { SettingContext } from "./SettingProvider"

function App() {
  const {color} = useContext(SettingContext)
  return (
    <div className="container">
      <Canvas camera={{position: [18, 12, -18], fov: 25, rotation: [0,0,0]}}>
        <directionalLight color="white" position={[8,5, -20]} />
        <color attach="background" args={[color]}/>
        <Suspense fallback={null}>
          <Bounds observe>
            <Room />
          </Bounds>
        </Suspense>
        <OrbitControls makeDefault/>
      </Canvas>
    </div>
  )
}

export default App
