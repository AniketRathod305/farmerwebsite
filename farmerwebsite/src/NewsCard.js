import React from 'react'
import './NewsCard.css'

function NewsCard({newsItem}) {

    console.log(newsItem)

    return (
        <div className='newscard'>
            <div className="image_news">
             <a href={newsItem.url} className="image_link" target='_blank' rel="noreferrer">
            <img src={newsItem.urlToImage} className='newsimage' alt='' ></img>
            </a>
            </div>
            <div className='newstext'>
                <div>
                    <div className='title'>{newsItem.title}</div>
                    <div className='author'>{newsItem.author}</div>
                </div>
                <div>
                    <div className='description'>{newsItem.description}</div>
                    <span className='readmore'>Read more at
                    <a className="news_link" href={newsItem.url} target='_blank' rel="noreferrer">
                    <b>{newsItem.source.name}</b>
                    </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
