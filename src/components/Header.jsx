import React from 'react'
import  "./Header.css"
import image from '../Assets/img-1.webp'
import Chatbody from './Chatbody'
import Footer from './Footer'



function Header() {
  return (
    <>
       <div className="app-container">
      <div className="content">
        <div className='my-class'>
        
        <img src={image} style={{backgroundColor:'white'}}/>
        <div>
            <div className='dot'>

            </div>
        </div>
        <div className='name'>
        <h1 style={{fontFamily: 'Poppins, sans-serif',fontSize:'22px'}}>Timpu  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac491d9d790c7ec0f9d6e69b36f10d30bf94c55e3b4d72c39d3ebe7c2c0ac7f1" /> </h1>
        <h2 style={{fontFamily: 'Poppins, sans-serif',fontSize:'22px',marginTop:'10px'}}>chat assistant</h2>
        </div>
        <div className='status' >
  <h2 className='Active' style={{fontFamily: 'Poppins, sans-serif',fontSize:'22px'}}>
    <span className='online'></span>
    Online
  </h2>
</div>
    </div>
    <Chatbody />
    <div style={{marginTop: 'auto'}}>
    <Footer   />
    </div>
    </div>
    </div>
    </>
  )
}

export default Header
