import React from 'react'
import NewsCard from './NewsCard'
function News({newsArray,newsResults}) {

 return (
        <div>
            <h1>news portal</h1>
            {newsArray.map((newsItem)=>(
                    <NewsCard  newsItem={newsItem}  key={newsResults}/>
            ))}
        </div>
    )
}

export default News
