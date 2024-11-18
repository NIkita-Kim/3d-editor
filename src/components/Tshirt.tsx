/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/tshirt.gltf -t --transform 
Files: public/tshirt.gltf [64.55KB] > C:\Projects\3d-editor\tshirt-transformed.glb [2.8MB] (-4231%)
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type ActionName = 'actionNameOne' | 'actionNameTwo';

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Pattern2D_2949190: THREE.Mesh
    StitchMatShape_127574: THREE.Mesh
  }
  materials: {
    ['Knit_Fleece_Terry_FRONT_109192.018']: THREE.MeshStandardMaterial
    ['Material109415.007']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Tshirt(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/tshirt-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Pattern2D_2949190.geometry} material={materials['Knit_Fleece_Terry_FRONT_109192.018']} position={[0, -4.5, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.038, 0.01, 0.038]} />
      <mesh geometry={nodes.StitchMatShape_127574.geometry} material={materials['Material109415.007']} position={[0, -4.5, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.038, 0.01, 0.038]} />
    </group>
  )
}

useGLTF.preload('/tshirt-transformed.glb')