import React from 'react'
import "./Bottomsec.css"
import {motion} from "framer-motion"

const Bottomsec = () => {
  return (
    <div className='container maincon6'>
        <div className='row parts'>
            <div className='col-12 d-flex justify-content-center' style={{"height":"280px"}} >
            <h1 className='heading1'> 
            <svg viewBox="0 0 100 100">

                    <path id="MyPath" fill="none" stroke="" 
                    d="m10,45c53,-33 96,3 96,3" />

                    <text><textPath href="#MyPath">WEB3 FOR EVERYONE</textPath></text>

                    </svg>
            </h1>
            {/* <motion.img animate={{x:950,y:-300,scale:0.5,rotate:15}} src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1678622636/Metasky_6_prev_ui_dg3sz6.png" alt="images" /> */}
 
            </div>
                       <div className='col-12 d-flex flex-row justify-content-center'>
          <button className='btn btnjoin'>JOIN THE TEAM</button>
          <button className='btn btneq'>BUSINESS ENQUIRIES</button>
            </div>

            <div className='col-12 d-flex flex-row justify-content-center inpart'>
               <div className='indiv'>
                <div className='indiv2'>
                    <div className='imgg1'>
                        <img  className="imgg" src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1678616507/man_prev_ui_zufkzr.png" alt="avatar"/>
                    </div>
                </div>
                </div> 
            </div>

            <div className='col-12 d-flex flex-row justify-content-center part1'>
                <p  className='scrolls'>{"  Coming Soon  ".repeat(9)}</p>
            </div>
        </div>
        
      
    </div>
  )
}

export default Bottomsec
