import { Physics } from "@react-three/cannon";
import React, { useEffect, useRef, useState } from "react";
import { extend, useThree } from "react-three-fiber";
import { Plane } from "../prefabs/Plane";
import { Player } from "../prefabs/Player";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { Skybox } from "../prefabs/Skybox";
import { Cube } from "../prefabs/Cube";
import Model from "../components/Model";


extend({ PointerLockControls });

export const DefaultScene = () => {
  const { camera, gl } = useThree();
  const controls = useRef();

      const cubeX1 = -5
      const cubeX2 = 5
      const cubeX3 = 10
      const cubeZ1 = -145
      const cubeZ2 = -155
      const cubeZ3 = -150

  useEffect(() => {
    camera.layers.enable(0);
    camera.layers.enable(1);
  }, [camera]);

  useEffect(() => {
    const handleFocus = () => {
      controls.current.lock();
    };
    document.addEventListener("click", handleFocus);

    return () => {
      document.removeEventListener("click", handleFocus);
    };
  }, [gl]);


  return (
    <>
      <Skybox />
      <pointerLockControls ref={controls} args={[camera, gl.domElement]} />
      <directionalLight position={[3, 0, 3]} intensity={0.5} castShadow />
      <pointLight position={[0, 0, -3]} intensity={0.6} castShadow />
      <pointLight position={[0, 0, 4]} intensity={0.6} castShadow />

      <ambientLight intensity={0.6} />
      <Physics
        gravity={[0, -18, 0]}
        tolerance={0}
        iterations={50}
        broadphase={"SAP"}
      >
        <Player />
        <Plane />

            <Model modelUrl={"miniworld.glb"} position={[10,0,-150]} rotation={[0,-1.45,0]} />
            <Model modelUrl={"MiniWorld_mountainLab.glb"} position={[5,0,-100]}  rotation={[0,-1.45,0]}/>
            <Model modelUrl={"MiniWorld_westernTreatmentPlan.glb"} position={[0,0,-50]}  />
            <Model modelUrl={"MiniWorld_waterPad.glb"} position={[0,0,-15]}  rotation={[0,-1.45,0]}/>

            <Cube position={[cubeX1, 0, cubeZ1]} layers={1} />
            <Cube position={[cubeX1-0.6, 0, cubeZ1]} />
            <Cube position={[cubeX1+0.6, 0, cubeZ1]} />
            <Cube position={[cubeX1-0.3, 0.5, cubeZ1]} />
            <Cube position={[cubeX1+0.3, 0.5, cubeZ1]} />
            <Cube position={[cubeX1, 1, cubeZ1]} />

            <Cube position={[cubeX2, 0, cubeZ2]} layers={1} />
            <Cube position={[cubeX2-0.6, 0, cubeZ2]} />
            <Cube position={[cubeX2+0.6, 0, cubeZ2]} />
            <Cube position={[cubeX2-0.3, 0.5, cubeZ2]} />
            <Cube position={[cubeX2+0.3, 0.5, cubeZ2]} />
            <Cube position={[cubeX2, 1, cubeZ2]} />

            <Cube position={[cubeX3, 0, cubeZ3]} layers={1} />
            <Cube position={[cubeX3-0.6, 0, cubeZ3]} />
            <Cube position={[cubeX3+0.6, 0, cubeZ3]} />
            <Cube position={[cubeX3-0.3, 0.5, cubeZ3]} />
            <Cube position={[cubeX3+0.3, 0.5, cubeZ3]} />
            <Cube position={[cubeX3, 1, cubeZ3]} />


            <Cube position={[-5, 0, cubeZ3]} />
            <Cube position={[-5, 0.5, cubeZ3]} />
            <Cube position={[-5, 1, cubeZ3]} />
            <Cube position={[-5, 1.5, cubeZ3]} />

      </Physics>
    </>
  );
};
