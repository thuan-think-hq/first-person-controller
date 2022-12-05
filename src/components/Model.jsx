import * as THREE from "three";
import {useLoader,useFrame} from "react-three-fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import React, {useEffect} from "react";

const Model = ({modelUrl,scale,animate,...props}) => {
      const gltf = useLoader(GLTFLoader, "./models/" + modelUrl);

      const model = gltf.scene
      scale && model.scale.set(scale,scale,scale)

      //
      // let mixer
      // if (gltf.animations.length) {
      //       mixer = new THREE.AnimationMixer(gltf.scene);
      //       gltf.animations.forEach(clip => {
      //             const action = mixer.clipAction(clip)
      //             action.play();
      //       });
      // }
      //
      // useFrame((state, delta) => {
      //       mixer?.update(delta)
      // })

      return (
          <group {...props} >
            <primitive object={gltf.scene} />
          </group>
      );
};

export default Model
