import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { NewsItem } from '..';
import './news.scss';

function News() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const res = await axios.get('https://newsapi.org/v2/top-headlines?country=it&category=sports&pageSize=3&apiKey=caecbae4043c424581e742645f3bbaba');
            setNews(res.data.articles);
            console.log(res)
        };
        getNews();
    }, []);

    return (
        <section className='news' id='news'>
            <h1>News</h1>
            <div className="news__list">
                {news.map((item, ind) => (
                    <NewsItem
                        title={item.title}
                        description={item.description}
                        url={item.url}
                        urlToImage={item.urlToImage}
                        key={ind} />
                ))}
            </div>
        </section>
    )
}

export default News
