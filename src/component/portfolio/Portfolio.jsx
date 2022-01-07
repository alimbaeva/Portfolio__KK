import React from 'react';
import { PortfolioCats } from '../index';
import { wepApps, reactApps, featured } from '../../db';
import { useState, useEffect } from 'react';
import './portfolio.scss'

function Portfolio() {

    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (selected === 'featured') {
            setData(featured);
        } else if (selected === 'react app') {
            setData(reactApps);
        } else if (selected === 'wep app') {
            setData(wepApps);
        } else {
            setData(featured);
        }
    }, [selected]);

    const portfolioCatItems = [
        {
            id: 1,
            category: 'featured',
            title: 'Featured',
        },
        {
            id: 2,
            category: 'wep app',
            title: 'Web App',
        },
        {
            id: 3,
            category: 'react app',
            title: 'React app',
        }
    ]

    return (
        <section className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul className="portfolio__cat">
                {portfolioCatItems.map((item) => (
                    <PortfolioCats item={item.title}
                        key={`${item.title}_${item.id}`}
                        category={item.category}
                        active={selected === item.category}
                        setSelected={setSelected} />
                ))
                }
            </ul>

            <div className="portfolio__list">
                {data.map((dataItem) => (
                    <div className="portfolio__item">
                        <img src={dataItem.img} alt="foto" />
                        <h3>{dataItem.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio
