import React from 'react'
import "./Fifthsec.css"
const Fifthsec = () => {
  return (
    <div className='container main'>
        <div className='row head1'>
            <div className='col-12'>
                <h1>Organization Structure</h1>
            </div>
        </div>
        <div className='row fifcon' >
            <div className='col-4 new1' >
            <p  >You-You-You-You</p>
               <div className='divcon divcon1'>
                  <img src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1678607314/Screenshot_45__prev_ui_eapdvz.png" className='img1'/>
                  <h3 className='percentagehe'>60%</h3>

               </div>
              <p style={{"fontWeight":"bolder"}} >Community</p>  
            </div>
            
            <div className='col-4 new1' >
            <p style={{"fontWeight":"bolder"}}>Investors</p>
               <div className='divcon divcon2' id="curve">
               <img src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1678607314/Screenshot_45__prev_ui_eapdvz.png" className='img1'/>
                  <h3 className='percentagehe'>20%</h3>
               </div>
              <p href="#curve">Woodstock+Future private sales</p>  
            </div>
            <div className='col-4 new1'>
            <p >Team contributors</p>
               <div className='divcon divcon3'>
               <img src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1678607314/Screenshot_45__prev_ui_eapdvz.png" className='img1'/>
                  <h3 className='percentagehe'>20%</h3>
               </div>
              <p style={{"fontWeight":"bolder"}}>CoreTeam</p>  
            </div>
        </div>
      
    </div>
  )
}

export default Fifthsec
