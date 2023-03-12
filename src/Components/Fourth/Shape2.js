import React, { Fragment } from 'react'

const Shape2 = () => {
  return (
    
    <mesh rotation={[90,0,20]} >
        <boxBufferGeometry attach="geometry" args={[4,4,4]}/>
        <meshLambertMaterial attach="material" color="rgb(224, 158, 219)" />
    </mesh>
   
  )
}

export default Shape2
