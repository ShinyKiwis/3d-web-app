import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Room(props) {
  const { nodes, materials } = useGLTF("/models/room.gltf");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.38, 0, -0.61]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1.5, 1.7, 1.5]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cat_climbing_tower_1.geometry}
          material={materials.Fluffy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cat_climbing_tower_2.geometry}
          material={materials.Particleboard}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cat_climbing_tower_3.geometry}
          material={materials.Ropes}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room.geometry}
        material={materials.Room}
        position={[2.92, 2.72, -2.88]}
        scale={[3, 2.8, 2.92]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pic.geometry}
        material={nodes.Pic.material}
        position={[0.05, 3.06, -2.5]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.5, 0.05, 0.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pic001.geometry}
        material={nodes.Pic001.material}
        position={[0.05, 3.14, -3.06]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.2, 0.05, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pic002.geometry}
        material={nodes.Pic002.material}
        position={[0.05, 2.62, -3.34]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.27, 0.05, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pic003.geometry}
        material={nodes.Pic003.material}
        position={[0.05, 3.24, -3.63]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.3, 0.05, 0.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Aquarium.geometry}
        material={materials["Material.001"]}
        position={[0.5, 1.3, -4.65]}
        scale={[0.44, 0.4, 0.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[0.96, 0.65, -5.6]}
        rotation={[-Math.PI / 2, 1.57, 0]}
        scale={[0.15, 0.03, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["13021_Aquarium_Log_v1_L3"].geometry}
        material={materials["Aquarium_Log.001"]}
        position={[0.28, 0.9, -4.15]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={nodes.Cube027.material}
        position={[0.12, 1.68, -4.66]}
        scale={[0.04, 0.02, 0.77]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Aquarium_Pot_Shrimp_Cave.geometry}
        material={nodes.Aquarium_Pot_Shrimp_Cave.material}
        position={[0.28, 0.91, -5.1]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={nodes.Cube028.material}
        position={[0.88, 1.68, -4.66]}
        scale={[0.04, 0.02, 0.77]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[3.61, 3.43, -0.04]}
        scale={[0.07, 0.69, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={nodes.Cube018.material}
        position={[3.22, 3.3, -0.03]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.07, 1.05, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shelf.geometry}
        material={nodes.Shelf.material}
        position={[0.5, 0.05, -4]}
        scale={[0.5, 0.05, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shelf2.geometry}
        material={nodes.Shelf2.material}
        position={[0.5, 0.25, -5.6]}
        rotation={[-Math.PI / 2, 1.57, 0]}
        scale={[0.25, 0.03, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shelf3.geometry}
        material={nodes.Shelf3.material}
        position={[0.5, 0.85, -4]}
        scale={[0.5, 0.05, 1.63]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shelf4.geometry}
        material={nodes.Shelf4.material}
        position={[0.08, 0.45, -4]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.45, 0.05, 1.63]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shelf5.geometry}
        material={nodes.Shelf5.material}
        position={[0.5, 0.25, -2.4]}
        rotation={[-Math.PI / 2, 1.57, 0]}
        scale={[0.25, 0.03, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stand.geometry}
        material={nodes.Stand.material}
        position={[0.96, 0.65, -2.4]}
        rotation={[-Math.PI / 2, 1.57, 0]}
        scale={[0.15, 0.03, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Carpet.geometry}
        material={nodes.Carpet.material}
        position={[3, 0.1, -4.5]}
        scale={[1.5, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Carpet001.geometry}
        material={nodes.Carpet001.material}
        position={[3, 0.11, -4.5]}
        scale={[1.21, 0.81, 0.81]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[0.5, 0.35, -2.64]}
        rotation={[-Math.PI / 2, 1.57, 0]}
        scale={[0.25, 0.03, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[0.5, 0.35, -2.7]}
        rotation={[-Math.PI / 2, 1.57, 0]}
        scale={[0.25, 0.03, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[0.5, 0.35, -2.58]}
        rotation={[-Math.PI / 2, 1.57, 0]}
        scale={[0.25, 0.03, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={nodes.Cube015.material}
        position={[0.5, 0.43, -2.53]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.33, 0.03, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={nodes.Cube012.material}
        position={[0.5, 0.43, -2.46]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.33, 0.03, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={nodes.Cube016.material}
        position={[0.5, 0.35, -2.83]}
        rotation={[-1.31, 1.57, 0]}
        scale={[0.25, 0.03, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={nodes.Cube017.material}
        position={[0.5, 0.3, -3.02]}
        rotation={[-0.87, Math.PI / 2, 0]}
        scale={[0.25, 0.03, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cup.geometry}
        material={nodes.Cup.material}
        position={[0.42, 0.97, -2.86]}
        scale={[0.05, 0.29, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cup001.geometry}
        material={nodes.Cup001.material}
        position={[0.58, 0.97, -2.86]}
        scale={[0.05, 0.29, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cup002.geometry}
        material={nodes.Cup002.material}
        position={[0.42, 0.97, -2.99]}
        scale={[0.05, 0.29, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cup003.geometry}
        material={nodes.Cup003.material}
        position={[2.4, 1.5, -0.49]}
        scale={[0.05, 0.29, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cup004.geometry}
        material={nodes.Cup004.material}
        position={[0.56, 0.97, -2.99]}
        scale={[0.05, 0.29, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.006"]}
        position={[3.51, 1.4, -0.8]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.7, 0.02, 1.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.Keman}
        position={[3.48, 1.59, -0.24]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.16, 0.01, 0.77]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[4.17, 1.5, -0.24]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={[-0.16, -0.08, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[2.8, 1.5, -0.24]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={[-0.16, -0.08, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[2.21, 0.71, -0.13]}
        scale={[0.02, 0.67, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        position={[2.21, 0.71, -1.45]}
        scale={[0.02, 0.67, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={nodes.Cube009.material}
        position={[4.8, 0.71, -1.45]}
        scale={[0.02, 0.67, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={nodes.Cube010.material}
        position={[4.8, 0.71, -0.14]}
        scale={[0.02, 0.67, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[4.8, 0.08, -0.79]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.02, 0.62, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={nodes.Cube019.material}
        position={[2.21, 0.08, -0.79]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.02, 0.62, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={nodes.Cube020.material}
        position={[3.51, 0.57, -0.13]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.07, 1.28, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials["Material.002"]}
        position={[3.48, 1.61, -0.24]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.15, 0.01, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials["Material.002"]}
        position={[3.48, 1.68, -0.18]}
        rotation={[0.69, Math.PI / 2, 0]}
        scale={[0.11, 0.01, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials["Material.002"]}
        position={[3.48, 1.94, -0.26]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.3, 0.01, 0.68]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={nodes.Cube024.material}
        position={[4.31, 1.63, -0.38]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={[-0.03, -0.2, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={nodes.Cube025.material}
        position={[2.68, 1.63, -0.38]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={[-0.03, -0.2, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group34220672.geometry}
        material={materials.mat21}
        position={[3.65, 1.46, -0.88]}
        rotation={[Math.PI / 2, 0, 3.12]}
        scale={0.5}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1030983910.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1075691498.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1149852049.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1152190519.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1180881246.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1238060299.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1238428394.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1272091893.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1316349499.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1323238240.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group145618305.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1486350934.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group150579309.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1529968652.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1571332333.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1581414308.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1589752359.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1629393722.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1629609685.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1675960081.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1740918352.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1753917514.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1754683637.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1764140354.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1870575723.geometry}
          material={materials.mat16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1899843208.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1956214489.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group196400395.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1976194690.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group205302596.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2074153597.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2085389804.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2091112366.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2106755496.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group2146178072.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group252681800.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group268332703.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group287159489.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group295085766.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group311988427.geometry}
          material={materials.mat22}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group384612072.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group418912012.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group42243725.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group425587018.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group449779970.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group45382983.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group475225180.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group573547017.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group588539140.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group601803475.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group616518658.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group687259746.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group706802639.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group729811280.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group77921105.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group790925258.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group801095923.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group806343109.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group826580911.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group873458270.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group873558583.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group877249531.geometry}
          material={materials.mat9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group954813675.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group96314515.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group96968687.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group993315105.geometry}
          material={materials.mat21}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["10106_Computer_Mouse_v1_L3"].geometry}
        material={materials._10106_Computer_Mouse_v1_L310106_Computer_Mouse_v1}
        position={[2.81, 1.42, -0.86]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube051.geometry}
        material={materials.Black_Metal_Paint}
        position={[4.02, 0.63, -1.89]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.5, 0.5, 0.45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Material.003"]}
        position={[3.53, 0.82, -1.72]}
        rotation={[0.43, 0, 0]}
        scale={[0.2, 0.21, 0.08]}
      />
    </group>
  );
}

useGLTF.preload("/models/room.gltf");