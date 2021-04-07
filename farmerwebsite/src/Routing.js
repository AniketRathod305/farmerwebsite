import React,{useState,useEffect} from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Navbar from './Navbar'
import Register from './Register'
import Login from './Login'
import FarmStore from './FarmStore'
import News from './News'
import Video from './Video'
import axios from 'axios'

function Routing() {

const[newsArray,setNewsArray]=useState([])
const[newsResults,setNewsResults]=useState()

const newsapi=async()=>{
    try
    {
        const news=await axios.get(`https://newsapi.org/v2/everything?q=farmer AND india&apiKey=99262b5390b74a86a2f2218d34da2f89`)
        console.log(news)
        setNewsArray(news.data.articles)
        setNewsResults(news.data.totalResults)
    }
    catch(error)
    {
        console.log(error)
    }
    }

    useEffect(() => {
    newsapi()  
    }, [])




    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <div>Home</div>
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                   <Login />
                </Route>
                <Route path='/news'>
                 <News newsArray={newsArray} newsResults={newsResults}/>
                </Route>
                <Route path='/videos'>
                <h1>Informative videos</h1>
                    <Video link='https://youtu.be/ZFsz-cFXzM8' />
                    <Video link='https://youtu.be/QT4TWbPLrN8' />
                    <Video link='https://youtu.be/LBIvBgmP-8g' />
                    <Video link='https://youtu.be/nv4zp3p3D_I' />
                    <Video link='https://youtu.be/60YD5jsSlmo' />
                </Route>
                <Route path='/shop'>
                    <FarmStore />
                </Route>
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routing
