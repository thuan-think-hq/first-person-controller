import React, { useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { degToRad, setCastShadow, setReceiveShadow } from '../../../../Utilities/Functions/3d';

export default function Marker(props) {
      const gltf = useLoader(GLTFLoader, '3d/marker.glb'),
          [geometry, setGeometry] = useState();

      // init
      if (!geometry) {
            // Scene settings
            const scene = gltf.scene.clone(true); // so we can instantiate multiple copies of this geometry
            setCastShadow(scene.children, true);
            setReceiveShadow(scene.children, true);
            setGeometry(scene);
      }

      const primitiveProps = {
            object: geometry,
            position: props.position,
            rotation: degToRad(props.rotation),
            scale: props.scale,
      };
      return <primitive {...primitiveProps} />;
}
