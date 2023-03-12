import React from 'react'
import {Canvas} from "@react-three/fiber"


import Shape from './Shape'
import "./Fourthsec.css"
import Shape2 from './Shape2'


const Background = () => {
  return (
    <div>
      <Canvas className='canvas'>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2,5,2]} intensity={1} />
        
        <Shape2 />
        <Shape className="shape "/>
        
      </Canvas>
      
      
    </div>
  )
}

export default Background
