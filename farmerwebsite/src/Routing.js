import React,{useState,useEffect} from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Navbar from './Navbar'
import Register from './Register'
import Login from './Login'
import FarmStore from './FarmStore'
import News from './News'
import Video from './Video'
import axios from 'axios'
import './Routing.css'

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
        <div className="navigation_bar">
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
                
                    <Video  />
                   
                </Route>
                <Route path='/shop'>
                    <FarmStore />
                </Route>
                
            </Switch>
        </BrowserRouter>
        </div>
    )
}

export default Routing
