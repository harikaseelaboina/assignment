import React from 'react'

const Shape = () => {
  return (
    
    <mesh rotation={[80,0,20]}>
        <boxBufferGeometry attach="geometry" args={[1,1,1]}/>
        <meshLambertMaterial attach="material" color="purple"/>
    </mesh>
    
  )
}

export default Shape
