import React from 'react'
import './Footerp.css'

const Footerp = () => {
  return (
    <div><div className="term">
    <div className="container">
        <div className="row">
            <div className="col-5">
                <h4 className="textof">Copyright @2024 - Created by SVRJS</h4>
            </div>
    
            <div className="col">
                <h4 className="textof" href="mailto:valerojasu98@hotmail.com">Contácteme</h4>                        
            </div>  
            <div className='col'>
                <div className='iconosf'>
                    <a href='https://www.google.com/'>
                    <i className="bi bi-github" ></i>
                    </a>
                </div>
                </div>
                <div className='col'>
                <div className=' iconosf'>
                    <a href='https://www.linkedin.com/in/sharon-valeria-rojas-ugalde-347409180/'>
                    <i className="bi bi-linkedin"></i>
                    </a>
                </div>
                </div>
                <div className='col'>
                <div className='iconosf'>
                    <a href="https://api.whatsapp.com/send?phone=50683105640&text= Hola!%20Quiero%20contratar%20sus%20servicios!">
                    <i className="bi bi-whatsapp" ></i>                
                    </a>
                </div>
            </div> 
        </div>
    </div>
    </div></div>
  )
}

export default Footerp