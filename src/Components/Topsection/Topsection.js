import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter,faInstagram,faDiscord} from "@fortawesome/free-brands-svg-icons"
import "./index.css"
import {motion} from "framer-motion"
import Man from '../Man'


const Topsection = () => {
  return (
    <>
   
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
      <div className='maincontainer'>
      <header className='topcontainer container '>
        <div className='sec1'>
            <img src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1678529953/Metasky_6_bam40h.jpg" className='img1' alt="logo"/>
            <h3 className='heading1 mt-4'>metasky</h3>
        </div>
        <div className='sec2'>
        <FontAwesomeIcon icon={faDiscord} className="m-1 icons">hello</FontAwesomeIcon>
        <FontAwesomeIcon icon={faTwitter} className="m-1 icons"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInstagram} className="m-1 icons"></FontAwesomeIcon>
        </div>
        </header>
        <div className='maincon9 container'>
        <section className='container container2'>
        
            <div className='headcon'><h1 className='head2'>THE WEB3  <br></br>
                                    PLATFORM BUILT  <br></br>
                                        FOR YOU</h1>  </div>

              <div className='cicles'>                 
            <div className='circle1'>
            <div className='circle2'></div> </div> </div>  
            
            <div className='stars'></div>
            
             
        </section>

        <div className='sidenav nav1'>
            <a href="" className='element'>Skyclub</a>
            <a href="" className='element'>Sky Wallet</a>
            <a href="" className='element'>Contact Now</a>
        </div>
        </div>

        <div className='container mb-5'>
        <button className='btn btn1'>|</button>
        <p className='para1'>Drag</p>
        </div>
        
        <div className='container'>
          <motion.img  animate={{x:950,y:-300,scale:0.5,rotate:15}} src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1678529953/Metasky_6_bam40h.jpg" alt=""/>
          {/* <motion.img  animate={{x:400,y:-250,scale:1,rotate:15}} src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1678621572/tail1vi_prev_ui_emzwll.png" alt=""/> */}
          
          {/* <motion.Man animate ={{x:500,y:-400,scal:1.5}} className="man"/> */}
        </div>

        </div>
        </div> 
        </div>
        </div>
        
    </>
  )
}

export default Topsection
