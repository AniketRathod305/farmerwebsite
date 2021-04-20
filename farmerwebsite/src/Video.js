import React,{useState,useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import './Video.css'
import youtube from './youtube'
import {Button} from '@material-ui/core'
import VideoCard from './VideoCard'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function Video() {
    const classes = useStyles();
    const [videos,setVideos]=useState([]);

    const videoreq=async(searchTerm)=>{
        try{
            const resp= await youtube.get('/search', {
                params: {
                    q : searchTerm,
                }
            })
            setVideos(resp.data.items)
            console.log(resp.data)
        }
        catch(error){
            console.log(error)
        }

    }
    useEffect(() => {
        videoreq('latest Agriculture news in India')
    },[])
    

    return (
        <div className="video_format">
            <h1>Informative videos</h1>
            <div className={classes.root}>
                <Button className="choice_button" color="primary" variant="contained" onClick={()=>videoreq('Best farming technique in India')} >Farming</Button>
                <Button className="choice_button" color="primary" variant="contained" onClick={()=>videoreq('Best Crops in India')} >Crops</Button>
                <Button className="choice_button" color="primary" variant="contained" onClick={()=>videoreq('Frequent Crop Disease in India')}>Disease</Button>
                <Button className="choice_button" color="primary" variant="contained" onClick={()=>videoreq('Crop Protection from disease in india')}>Crop Protection</Button>
                <Button className="choice_button" color="primary" variant="contained" onClick={()=>videoreq('New Tools fro Farming in India')}>Advancement</Button>
                <Button className="choice_button" color="primary" variant="contained" onClick={()=>videoreq('Fertilizer techniques in Inida')}>Fertilizer</Button>
                <Button className="choice_button" color="primary" variant="contained" onClick={()=>videoreq('Organic farming in India')}>Orgnic Farming</Button>




                
            </div>
            <div className="video_container">
            {videos.map(videoitem=>(<VideoCard videoitem={videoitem}/>))}
            </div>
        </div>
    )
}

export default Video
