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
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const url = 'http://localhost:3000/';


export default function ReviewCard({post, fetchData, setPosts}) {

    function deletePost(e) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(url + 'posts/' + e._id).then((resp)=>{
            Swal.fire(
              'Deleted!',
              'Your post has been deleted.',
              'success'
            )
              fetchData()
  
          }).catch(err=>{
            Swal.fire(
              'Unable to delete!',
              'Your file has been deleted.',
              'error'
            )
              console.log(err)
          });
       
        }
      })
       
       
      }
    
 function deletePostClick () {
    deletePost(post)
 }
  return (
    <Card sx={{ maxWidth: 345, minHeight:210 }} className='card'>
      <CardHeader
title={post.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Race: {post.race}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="share" >
          <DeleteForeverIcon style = {{fontSize:26}} onClick={deletePostClick}/>
        </IconButton> 
       <Box sx = {{width:"30%"}}></Box>
         
        <Button
   
      variant='contained'
      style={{ backgroundColor: 'antiquewhite', color: 'black' }}
    >
                <Link style = {{textDecoration: 'none', color:'black'}} to={`/posts/${post._id}`}>
                View more
                </Link>
    </Button>  
      </CardActions>  
    </Card>
  );
}
