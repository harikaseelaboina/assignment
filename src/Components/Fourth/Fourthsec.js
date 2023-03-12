import React from 'react'
import Background from './Background'
import "./Fourthsec.css"



const Fourthsec = () => {
  return (
    <div className='container maincon'>
      
      <div className='row'>
        <div className='col-6 text1 '>
            <h1 className='head1'>Communities are the <br></br> lifeblood of the society</h1>
            <p  style={{"paddingLeft":"100px"}}> Decentralized comunities are going <br></br>
                to be the lifeblood of the metaverse.</p>
                <p style={{"paddingLeft":"100px"}}> Metasky aims to empower influencers, <br></br>
                creators and brands to build happy. <br></br>
                motivated Web3 communities with a <br></br>
                strong sense of belongingness.</p>
            </div>
            <div className='col-6 item1'>
            <Background/>
            </div>
            
            
            <div className='col-12 web'>
            <p>WEB3</p>
        </div>
      </div>
      
     
    </div>
  )
}

export default Fourthsec
