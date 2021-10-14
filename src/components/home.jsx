import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BasicModal from './modal';
import ReviewCard from './cardDisplayer'

export default function Home({setCurrentPost}){
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
              setCurrentPost={setCurrentPost}
            ></ReviewCard>
          );
        })}
      </div>
    )}

    
  </div>)
}