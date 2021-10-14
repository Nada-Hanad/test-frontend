import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';

const Swal = require('sweetalert2')
const url = 'http://localhost:3000/';

export default function BasicModal({fetchData}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = React.useState('')
  const [caption, setCaption] = React.useState('')
  const [details, setDetails] = React.useState('')
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeCaption = (event) => {
    setCaption(event.target.value);
  };
  const handleChangeDetails = (event) => {
    setDetails(event.target.value);
  };
  function addPost () {
    handleClose()
    if(title!=='' && caption!=='' && details!==''){
      axios.post(url+'posts', {
        title,
        caption,
        details
      }).then(()=>{
        fetchData()
        Swal.fire({
          title: 'Done!',
          text: 'Post added successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }).catch((err)=>{
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong',
          icon: 'error',
          confirmButtonText: 'Okey'
        })
      })
      
    }else{
      Swal.fire({
        title: 'Error!',
        text: 'You have to fill all the fields!',
        icon: 'error',
        confirmButtonText: 'Okey'
      })
    }
  }
  return (
    <div>
        <Button
        onClick={handleOpen}
        variant='contained'
        style={{ backgroundColor: 'white', color: 'black' }}
      >
        Add a post
      </Button>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal">
         
      <div>
      <TextField
          id="outlined-multiline-flexible"
          label="Title"
          multiline
          maxRows={4}
          value={title}
          onChange={handleChangeTitle}
        />
        <Box sx={{width:40, height:20}}></Box>
        <TextField
          id="outlined-textarea"
          label="caption"
          placeholder="Placeholder"
          multiline
          value={caption}
          onChange={handleChangeCaption}
        />
      </div>
     
        <TextField
          id="outlined-multiline-static"
          label="details"
          multiline
          rows={4}
       value={details}
       onChange={handleChangeDetails}
        />
        <Button
      onClick={addPost}
        variant='contained'
        style={{ backgroundColor: 'antiquewhite', color: 'black' }}
      >
        Complete
      </Button>
        </div>
      </Modal>
    </div>
  );
}
