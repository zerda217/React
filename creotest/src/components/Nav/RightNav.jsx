import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    z-index: 1;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
        <li className="nav_li" onClick={() => this.onSetRightNavOpen(true)}><Link to="/components/About">ABOUT</Link></li>
        <li className="nav_li" onClick={() => this.onSetRightNavOpen(true)}><Link to="/components/Creo">CREO</Link></li>
        <li className="nav_li" onClick={() => this.onSetRightNavOpen(true)}><Link to="/components/Works">WORKS</Link></li>
        <li className="nav_li" onClick={() => this.onSetRightNavOpen(true)}><Link to="/components/Careers">CAREERS</Link></li>
        <li className="nav_li" onClick={() => this.onSetRightNavOpen(true)}><Link to="/components/Contact2">CONTACT</Link></li>  
    </Ul>
  )
}

export default RightNav