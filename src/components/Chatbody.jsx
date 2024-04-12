import React from 'react'
import { Chip, IconButton, InputAdornment, TextField } from '@mui/material'; // Import components from Material-UI
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ClearIcon from '@mui/icons-material/Clear';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TuneIcon from '@mui/icons-material/Tune';
import bagImage from '../Assets/img-2.webp'
import "./chatbody.css"



function Chatbody() {
  return (
    <>
      <div className='chat-bot'>
        <p style={{fontFamily: 'Poppins, sans-serif'}}>Hi Sam! I am your personal
             shopping assistant, how can i
              help you today?</p>
              
      </div>
      <div className='s-time1'style={{fontFamily: 'Poppins, sans-serif'}}>
                     4:45 PM
                </div>
      <div className='user-message'style={{fontFamily: 'Poppins, sans-serif'}}>
        <p>
            I am looking for a hand bag, with long strap. 
        </p>
        <div className='u-time'style={{fontFamily: 'Poppins, sans-serif'}}>
                     4:46 PM
        </div>
      </div>
      
      <div className='tags'style={{fontFamily: 'Poppins, sans-serif'}}>
        <p>
            Popular tags for handbag
        </p>
        <div className="scroll-container">
      <div className="chips-container">
        <Chip label="Clutch" sx={{ borderRadius: '8px', marginRight: '10px', backgroundColor: '#F2F7FF', color: '#4C82EF', border: '1px solid #4C82EF',fontFamily: 'Poppins, sans-serif'  }} />
        <Chip label="Fabric lining" sx={{ borderRadius: '8px', marginRight: '10px', backgroundColor: '#F2F7FF', color: '#4C82EF', border: '1px solid #4C82EF',fontFamily: 'Poppins, sans-serif' }} />
        <Chip label="Fabric" sx={{ borderRadius: '8px', marginRight: '10px', backgroundColor: '#F2F7FF', color: '#4C82EF', border: '1px solid #4C82EF',fontFamily: 'Poppins, sans-serif' }} />
        
        <Chip label="Multi" sx={{ borderRadius: '8px', marginRight: '10px', backgroundColor: '#F2F7FF', color: '#4C82EF', border: '1px solid #4C82EF',fontFamily: 'Poppins, sans-serif' }} />
        {/* Add more chips as needed */}
      </div>
      <IconButton className="slider-icon" sx={{ fontSize: 80 }}> {/* Increase the icon size */}
        <KeyboardArrowRightIcon />
      </IconButton>
    </div>
    <div className='item'>
        <div className='bags' style={{display: 'flex', backgroundColor: 'white', padding: '15px', borderRadius: '12px'}}>
            
          <img src={bagImage} alt="Bag" style={{ width: '70px', height: '50px', borderRadius: '8px' }} />
          <div style={{display: 'flex', flexDirection: 'column', marginLeft: '15px'}}>
          <p style={{fontFamily: 'Poppins, sans-serif'}}>  Bags on Timpu<CheckCircleOutlineIcon style={{color:'#F2CF18',backgroundColor:'#FFED8C',marginLeft:'10px',marginBottom:'-5px'}}/></p>
          <div style={{marginTop: '10px', display: 'flex'}}>
          <p style={{color:'#949494',fontFamily: 'Poppins, sans-serif'}}> 1123 products</p>
          <KeyboardArrowRightIcon style={{ marginLeft: '15px',color:'#949494'}} />
          </div>
         
          </div>
        </div>
        <div className='white-box'>
          <p style={{fontFamily: 'Poppins, sans-serif'}}>Or set filter and help us choose the best bag for you.</p>
        </div>
        <div className='s-time' style={{fontFamily: 'Poppins, sans-serif'}}>
          4:48 PM
        </div>
      </div>
      <div>
      <div className='filter' > 
        <p style={{fontFamily: 'Poppins, sans-serif'}}>
            Select filters </p> <TuneIcon style={{marginLeft:'230px',color:'#666666'}}/> <p style={{color:'#666666',fontSize:'13px',marginTop:'3px'}}>Filter</p>
            </div>
            <Chip
        label="Strap - Long"
        sx={{
            fontFamily: 'Poppins, sans-serif',
          borderRadius: '8px',
          marginRight: '10px',
          backgroundColor: '#F2F7FF',
          color: '#4C82EF',
          border: '1px solid #4C82EF',
          '& .MuiChip-icon': {
            order: 2,
          }
        }}
        icon={<ClearIcon  style={{Color:'#4C82EF',marginRight:'5px'}}/>} 
      />
      <Chip
      label="Color"
      avatar={<ClearIcon style={{marginRight: '10px'}} />}
      sx={{
        width: '100px',
        borderRadius: '8px',
        marginRight: '10px',
        backgroundColor: '#F4F4F4',
        color: '#737373',
        fontFamily: 'Poppins, sans-serif',
        '& .MuiChip-avatar': {
          order: 2, // Place the icon after the text
        },
      }}
    />
       <Chip label="Size" sx={{ borderRadius: '8px', marginRight: '10px', backgroundColor: '#F4F4F4', color: '#737373',fontFamily: 'Poppins, sans-serif','& .MuiChip-icon': {
            order: 2,
          } }} icon={<ClearIcon/>} />
       <Chip label="Brand" sx={{fontFamily: 'Poppins, sans-serif', borderRadius: '8px', marginRight: '10px', backgroundColor: '#F4F4F4', color: '#737373', marginTop:'10px','& .MuiChip-icon': {
            order: 2,
          } }} icon={<ClearIcon/>} />
       <Chip label="Material" sx={{fontFamily: 'Poppins, sans-serif', borderRadius: '8px', marginRight: '10px', backgroundColor: '#F4F4F4', color: '#737373',marginTop:'10px','& .MuiChip-icon': {
            order: 2,
          } }} icon={<ClearIcon/>} />

      </div>
      
    </div>
    </>
  )
}

export default Chatbody
