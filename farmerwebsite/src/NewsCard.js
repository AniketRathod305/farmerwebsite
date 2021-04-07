import React from 'react'
import './NewsCard.css'

function NewsCard({newsItem}) {

    console.log(newsItem)

    return (
        <div className='newscard'>
            <img src={newsItem.urlToImage} className='newsimage' alt='error' ></img>
            <div className='newstext'>
                <div>
                    <div className='title'>{newsItem.title}</div>
                    <div className='author'>{newsItem.author}</div>
                </div>
                <div>
                    <div className='description'>{newsItem.description}</div>
                    <span className='readmore'>Read more at
                    <a href={newsItem.url} target='_blank'>
                    <b>{newsItem.source.name}</b>
                    </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
