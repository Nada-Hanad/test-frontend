import { Button, CircularProgress } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory, useParams } from 'react-router-dom';
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Post () {
  const url = 'http://localhost:3000/';
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);
  let { id } = useParams();
    const history = useHistory()
    const goBack = () => {
        history.goBack()
      }

      useEffect(() => {
        axios.get(url+'posts/'+id).then(resp=>{
          setPost(resp.data)
        }).catch(err=>{
          setError(true)
        }).finally(()=>{
          setLoading(false)
        })
      }, [id]);
    return (
        <div className='post-page'>
            <div className="goback-button">
            <Button
       onClick={goBack}
      
       style={{ backgroundColor: 'transparent', color: 'black', marginLeft:'2vh' }}
     >
         
    <ArrowBackIosIcon style={{fontSize:28}}></ArrowBackIosIcon>
     </Button>
   <Box sx={{height:'90vh'}}></Box>
            </div>
            {loading? <CircularProgress></CircularProgress> : error? <h1>Sorry, something went wrong.</h1>
           :  <div className='display-post'>
           <h1>{post.name}</h1>
           <h4> Gender : {post.gender}</h4>
           <p > Height:{
             post.height!==""? post.height : ' Not available'
           } </p>
            <p > Birth:{
             post.birth!==""? post.birth : ' Not available'
           } </p>
          
           <p> Race: {post.race}</p>
           <p> Spouse: {
             post.spouse!==""? post.spouse : ' Not available'}</p>
           <p>Death: {
             post.death!==""? post.death : ' Not available'}</p>
           <p>Realm: {
             post.realm!==""? post.realm : ' Not available'}</p>
           <p>Hair: {
             post.hair!==""? post.hair : ' Not available'}</p>
             {
              post.wikiUrl===""? <p>Wiki Url not available</p> :<a style = {{textDecoration:'none'}} href={post.wikiUrl}> <p>Visit Wiki Url </p>
          
              </a>
             }
         
         </div>}
    
        
      </div>
    )
}