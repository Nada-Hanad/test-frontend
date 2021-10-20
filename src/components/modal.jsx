import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Fab, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import validator from 'validator'
import {useState} from 'react'
const Swal = require('sweetalert2')
const url = 'http://localhost:3000/';

export default function BasicModal({fetchData}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {setOpen(true)
    setValidUrl(true)};
  const handleClose = () => setOpen(false);
  const [name, setName] = useState('')
  const [height, setHeight] = useState('')
  const [race, setRace] = useState('')
  const [gender, setGender] = useState('')
  const [birth, setBirth] = useState('')
  const [spouse, setSpouse] = useState('')
  const [death, setDeath] = useState('')
  const [realm, setRealm] = useState('')
  const [hair, setHair] = useState('')
  const [validUrl, setValidUrl] = useState(true)
  const [wikiUrl, setWikiUrl] = useState('')
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleChangeRace = (event) => {
    setRace(event.target.value);
  };
  const handleChangeHeight = (event) => {
    setHeight(event.target.value);
  };
  const handleChangeHair = (event) => {
    setHair(event.target.value);
  };
  const handleChangeBirth = (event) => {
    setBirth(event.target.value);
  };
  const handleChangeSpouse = (event) => {
    setSpouse(event.target.value);
  };
  const handleChangeDeath = (event) => {
    setDeath(event.target.value);
  };
  const handleChangeRealm = (event) => {
    setRealm(event.target.value);
  };
  const handleChangeWiki = (event) => {
    setValidUrl(true)
    setWikiUrl(event.target.value);
    if (validator.isURL(event.target.value) && (wikiUrl!=='')) {
      setValidUrl(true)
    } else {
      setValidUrl(false)
    }
  };
 

  function addPost () {
    handleClose()
    if(name!=='' && race!=='' && gender!=='' && validUrl){
      axios.post(url+'posts', {
        height,
        race,
        gender,
        birth,
        spouse,
        death,
        realm,
        hair,
        name,
        wikiUrl
      }).then(()=>{
        fetchData()
        Swal.fire({
          title: 'Done!',
          text: 'Post added successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
          confirmButtonColor:'#757575',  
        })
      }).catch((err)=>{
        Swal.fire({
          title: 'Error!',
          text: 'Posts cannot have the same data.',
          icon: 'error',
          confirmButtonText: 'Okey',
          confirmButtonColor:'#757575',

        })
      })
      
    }else if (!validUrl){
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a valid URL!',
        icon: 'error',
        confirmButtonText: 'Okey',
        confirmButtonColor:'#757575',
      
      })
    }else{
      Swal.fire({
        title: 'Error!',
        text: 'You have to fill all the required fields!',
        icon: 'error',
        confirmButtonText: 'Okey',
        confirmButtonColor:'#757575',
      
      })
    }
  }
  return (
    <div>
      <div>
    
      <Fab onClick={handleOpen} color="primary" aria-label="add" style={{ backgroundColor: 'white', color: 'black', borderRadius:'50%', height:'60px', width:'60px', marginBottom:'50px', marginTop:'50px' }}>
        <AddIcon />
      </Fab>
      
      </div>
   
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal">
         
      <div className='modal-form'>
      <TextField
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
          value={name}
          required={true}
          onChange={handleChangeName}
        />
      
        <TextField
          id="outlined-textarea"
          label="Height"
          placeholder="Placeholder"
          multiline
          value={height}
          onChange={handleChangeHeight}
        />
         <TextField
          id="outlined-textarea"
          label="Birth"
          placeholder="Placeholder"
          multiline
          value={birth}
          onChange={handleChangeBirth}
        />
         <TextField
          id="outlined-textarea"
          label="Spouse"
          placeholder="Placeholder"
          multiline
          value={spouse}
          onChange={handleChangeSpouse}
        />
         <TextField
          id="outlined-textarea"
          label="Death"
          placeholder="Placeholder"
          multiline
          value={death}
          onChange={handleChangeDeath}
        />
         <TextField
          id="outlined-textarea"
          label="Realm"
          placeholder="Placeholder"
          multiline
          value={realm}
          onChange={handleChangeRealm}
        />
         <TextField
          id="outlined-textarea"
          label="Hair"
          placeholder="Placeholder"
          multiline
          value={hair}
          onChange={handleChangeHair}
        />
         <TextField
          id="outlined-textarea"
          label="Wiki Url"
          required={true}
          errorText='Please enter a valid URL.'
          placeholder="Placeholder"
          multiline
          value={wikiUrl}
          onChange={handleChangeWiki}
        />
      
      <FormControl required={true} fullWidth>
  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
   value={gender}
    label="Gender"
onChange={handleChangeGender}
  >
    <MenuItem value={'Male'}>Male</MenuItem>
    <MenuItem value={'Female'}>Female</MenuItem>
   
  </Select>
</FormControl>
<FormControl required={true} fullWidth>
  <InputLabel id="demo-simple-select-label">Race</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
   value={race}
    label="Race"
onChange={handleChangeRace}
  >
    <MenuItem value={'Human'}>Human</MenuItem>
    <MenuItem value={'Elf'}>Elf</MenuItem>
   
  </Select>
</FormControl>
<Button
      onClick={addPost}
        variant='contained'
        style={{ backgroundColor: 'antiquewhite', color: 'black' }}
      >
        Complete
      </Button>
      </div>
     
       
     
        </div>
      </Modal>
    </div>
  );
}
