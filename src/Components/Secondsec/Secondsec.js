import React from 'react'
import "./Secondsec.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faWallet,faMapPin, faFileShield , faPercent, faTicket, faEllipsis, faBriefcase, faCalculator, faGamepad} from '@fortawesome/free-solid-svg-icons';



const Secondsec = () => {
  return (
    <div className='container'>
        <div className='row'>

            <div className='col-6 leftcontainer'>
              <div className='d-flex mt-5' style={{"marginLeft":"20px"}}>
              <FontAwesomeIcon icon={faWallet} style={{ color: 'rgb(63, 62, 58)',"padding":"10px" }}/>
              <p style={{"padding":"4px","fontWeight":"bold"}}>skywallet</p>
              </div>
              <h1 style={{"marginLeft":"20px"}}>Your EveryDay <br></br>Crypto Wallet</h1>

                <div className='parentbox mt-5' style={{"marginLeft":"20px"}}>
                    <div className='box' style={{"visibility":"hidden"}}></div>
                    <div className='box'>
                        <p className='symbols1'>$€</p>
                        <p style={{"marginLeft":"10px"}}>Use across any app and currency</p>

                    </div>
                    <div className='box'>
                    <FontAwesomeIcon  className='symbols' icon={faMapPin}/>
                        <p style={{"marginLeft":"10px"}}>One place for all your web3 possesions</p>
                    </div>
                    <div className='box'>
                    <FontAwesomeIcon icon={faFileShield}  className='symbols'/>
                        <p style={{"marginLeft":"10px"}}>Simple and secure</p>
                    </div>
                    <div className='box'>
                    <FontAwesomeIcon icon={faBriefcase}  className='symbols'/>
                        <p style={{"marginLeft":"10px"}}>Works everywhere </p>
                    </div>
                    <div className='box' style={{"visibility":"hidden"}}></div>
                </div>

            </div>

            <div className='col-6 rightcontainer'>
            <div className='d-flex mt-5' style={{"marginLeft":"20px"}}>
              <FontAwesomeIcon icon={faCalculator} style={{ color: 'white',"padding":"10px" }}/>
              <p style={{"padding":"4px","fontWeight":"bold","color": 'white'}}>skyclub</p>
              </div>
              <h1 style={{"marginLeft":"20px","color": 'white'}}>Exclusive, For you And <br></br>Your comunnity</h1>

                <div className='parentbox mt-5' style={{"marginLeft":"20px"}}>
                    
                    <div className='box1'>
                    <FontAwesomeIcon  className='symbols' icon={faGamepad}/>
                        <p style={{"marginLeft":"10px"}}>Chat,play games and host events</p>

                    </div>
                    <div className='box1'>
                    <FontAwesomeIcon  className='symbols' icon={faEllipsis}/>
                        <p style={{"marginLeft":"10px"}}>Create your own DAO and Tokens with One click</p>
                    </div>
                    <div className='box1' style={{"visibility":"hidden"}}></div>
                    <div className='box1' style={{"visibility":"hidden"}}></div>
                    <div className='box1'>
                    <FontAwesomeIcon icon={faTicket}  className='symbols'/>
                        <p style={{"marginLeft":"10px"}}>Create Ecofriendly NFT art work and tickets</p>
                    </div>
                    <div className='box1'>
                    <FontAwesomeIcon icon={faPercent}  className='symbols'/>
                        <p style={{"marginLeft":"10px"}}>Offer exclusive content and NFT membership </p>
                    </div>
                    
                </div>


            </div>

        </div>
      
    </div>
  )
}

export default Secondsec
