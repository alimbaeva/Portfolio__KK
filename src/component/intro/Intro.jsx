import React from 'react';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import './intro.scss';

function Intro() {

    const animateTextRef = useRef();

    useEffect(() => {
        init(animateTextRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['I live in the Zoo'],
        })
    }, [])
    return (
        <section className='intro' id='intro'>
            <div className="intro__left">
                <div className="intro__img-wrapper">
                    <img src="https://images.unsplash.com/photo-1573476492143-70270ca42661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="foto" />
                </div>
            </div>
            <div className="intro__right">
                <div className="intro__right-inner">
                    <h1>Tiger</h1>
                    <h2>Hellow World!!!</h2>
                    <h3><span ref={animateTextRef}>I live in the Zoo</span></h3>
                    <a href="#portfolio">
                        <MdOutlineKeyboardArrowDown className='intro__icon' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Intro
