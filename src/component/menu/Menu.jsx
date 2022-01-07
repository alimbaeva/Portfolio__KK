import React from 'react';
import './menu.scss';

function Menu({ items, menuOpen, setMenuOpen }) {
    return (
        <nav className={'menu ' + (menuOpen && 'menu--active')}>
            <ul className='menu__list'>
                {items &&
                    items.map((item, index) => (
                        <li key={`${item.name}_${index}`} onClick={() => setMenuOpen(false)}>
                            <a href={`#${item.link}`}>{item.name}</a>
                        </li>
                    ))}
            </ul>
        </nav>
    );
}

export default Menu
