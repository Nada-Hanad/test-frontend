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
const url = 'http://localhost:3000/';


export default function ReviewCard({post, fetchData, setPosts}) {
    function deletePost(e) {
        axios.delete(url + 'posts/' + e._id).then((resp)=>{
            fetchData()
        }).catch(err=>{
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
       <Box sx = {{width:"90%"}}></Box>
        <IconButton aria-label="share" >
          <DeleteForeverIcon style = {{fontSize:26}} onClick={deletePostClick}/>
        </IconButton>
      
      </CardActions>
      
    </Card>
  );
}
