import React from 'react';
import { ImPhone } from 'react-icons/im';
import { MdAlternateEmail } from 'react-icons/md';
import './topBar.scss';

function TopBar({ menuOpen, setMenuOpen }) {
    return (
        <header className={'topBar ' + (menuOpen && "topBar--active")}>
            <div className="topBar__inner">
                <div className="topBar__left">
                    <a href="#intro" className="topBar__logo">
                        Alimbaeva
                    </a>
                    <div className="topBar__contact-item">
                        <ImPhone className="topBar__icon" />
                        <span>+7 999 999 99 09</span>
                    </div>
                    <div className="topBar__contact-item">
                        <MdAlternateEmail className="topBar__icon" />
                        <span>test@test.com</span>
                    </div>
                </div>
                <div className="topBar__right">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="topBar__nav-toggler"
                    >
                    </button>
                </div>
            </div>
        </header>
    )
}

export default TopBar
