import { Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ReviewCard from './components/cardDisplayer';

function App() {
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

  return (
    <div className='main'>
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
      <Button
        variant='contained'
        style={{ backgroundColor: 'white', color: 'black' }}
      >
        Add a post
      </Button>
    </div>
  );
}

export default App;
