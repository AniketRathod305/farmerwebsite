import React from 'react'
import NewsCard from './NewsCard'
import './News.css'
function News({newsArray,newsResults}) {

 return (
     <div>
         <div className="title">
            <h1>News Portal</h1>
            </div>
        <div className="overall">
            
            
            <div className="news">
            {newsArray.map((newsItem)=>(
                    <NewsCard  newsItem={newsItem}  key={newsResults}/>
            ))}
            </div>
        </div>
        </div>
    )
}

export default News
