import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box } from '@mui/system';
import axios from 'axios';
import CustomizedSnackbars from './failSbar';
import SuccessSnackbars from './successSbar';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const url = 'http://localhost:3000/';


export default function ReviewCard({post, fetchData, setPosts, setCurrentPost}) {

  const [open, setOpen] = React.useState(false);
  const [openS, setOpenS] = React.useState(false);
  function redirict () {
    setCurrentPost(post)
  
  }
    function deletePost(e) {
        axios.delete(url + 'posts/' + e._id).then((resp)=>{
          setOpenS(true)
            fetchData()

        }).catch(err=>{
         setOpen(true)
            console.log(err)
        });
       
      }
    
 function deletePostClick () {
    deletePost(post)
 }
  return (
    <Card sx={{ maxWidth: 345, height:260 }}>
      <CardHeader
title={post.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button
      onClick={redirict}
      variant='contained'
      style={{ backgroundColor: 'antiquewhite', color: 'black' }}
    >
                <Link style = {{textDecoration: 'none', color:'black'}} to={`/posts/${post._id}`}>
                View more
                </Link>
    </Button>
       <Box sx = {{width:"30%"}}></Box>
        <IconButton aria-label="share" >
          <DeleteForeverIcon style = {{fontSize:26}} onClick={deletePostClick}/>
        </IconButton>
      
      </CardActions>
  
      <SuccessSnackbars open={openS} setOpen={setOpenS}></SuccessSnackbars>
      <CustomizedSnackbars open={open} setOpen={setOpen} ></CustomizedSnackbars>
   
    </Card>
  );
}
