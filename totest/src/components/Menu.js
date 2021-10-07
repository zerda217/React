import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Menu = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
        
    };

    return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>home</NavLink></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>home</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;
