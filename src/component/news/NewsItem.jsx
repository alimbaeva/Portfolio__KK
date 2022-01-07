import React from 'react';

function NewsItem({ title, description, url, urlToImage }) {
    return (
        <div className='newsItem'>
            <img src={urlToImage} alt="bl" />
            <h3>
                <a href={url}>{title}</a>
            </h3>
            <p>{description}</p>
        </div>
    )
}

export default NewsItem
