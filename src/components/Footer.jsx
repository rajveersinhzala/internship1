import React from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'; // Import components from Material-U
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import '../components/footer.css'
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Footer = () => {
  return (
    <div className='my-footer' >
        <div>
        <div style={{display: 'flex', marginBottom:'10px'}}>
      <div  style={{float:'left' }}>
      <TextField style={{ width :'310px', backgroundColor:'white',fontFamily: 'Poppins, sans-serif',color:'#949494'}}
            label="Type your message"
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ transform: 'rotate(35deg)' }}> {/* Tilt the icon */}
                  <IconButton>
                    <AttachFileIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          </div>
      <div className='send-button'>
        <button> <KeyboardArrowRightIcon style={{fontSize:'45px',}}/> </button>
      </div>
      </div>
      <p style={{justifyContent :'center', textAlign: 'center',color:'#7A7F8C',fontFamily: 'Poppins, sans-serif'}}>Powered by Krunk.ai</p>
      </div>
      </div>
  )
}

export default Footer
