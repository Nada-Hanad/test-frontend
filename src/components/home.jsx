import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BasicModal from './modal';
import ReviewCard from './cardDisplayer'

export default function Home(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const url = 'http://localhost:3000/';
    function fetchData() {
      setLoading(true);
      axios
        .get(url + 'posts')
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    useEffect(() => {
      fetchData();
    }, []);
  
    return (  <div className='main'>
      <h1 style ={{fontFamily:'Italianno', color:'black',fontSize:120, margin:0}}>Lord of the rings</h1>
      <p style = {{width:600, textAlign:'center', color:'black', fontSize:18, fontWeight:'bold'}}>One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them, In the Land of Mordor where the Shadows lie.</p>
        <BasicModal fetchData={fetchData}></BasicModal>
    {loading ? (
      <CircularProgress></CircularProgress>
    ) : error ? (
      <h1>Sorry something went wrong</h1>
    ) : (
      <div className='posts'>
        {posts.map((e) => {
          return (
            <ReviewCard
              post={e}
              fetchData={fetchData}
              setPosts={setPosts}
             
            ></ReviewCard>
          );
        })}
      </div>
    )}
      </div>

    
  )
}