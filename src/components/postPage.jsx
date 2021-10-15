import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory } from 'react-router-dom';

export default function Post ({post}) {
    const history = useHistory()
    const goBack = () => {
        history.goBack()
      }
    return (
        <div className='post-page'>
            <div className="goback-button">
            <Button
       onClick={goBack}
      
       style={{ backgroundColor: 'transparent', color: 'black' }}
     >
         
    <ArrowBackIosIcon style={{fontSize:28}}></ArrowBackIosIcon>
     </Button>
            </div>
    
        <div className='display-post'>
          <h1>{post.title}</h1>
          <h4 style = {{color:'grey'}}>{post.caption}</h4>
          <p>{post.details}</p>
        </div>
      </div>
    )
}