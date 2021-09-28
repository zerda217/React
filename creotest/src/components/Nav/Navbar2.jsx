import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  width: 100%;
  height: 40px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  @media (max-width: 768px) {
    font-size: 15px;

  .logo {
    padding: 5px 0;
  }

`

const StyledBurger = styled.div`
width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000000;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    z-index: 1;
    padding-top: 4rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
      padding-left: 3rem;
    }
  }
`;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RightNav: false
   };
   this.onSetRightNavOpen = this.onSetRightNavOpen.bind(this);
  }
  onSetRightNavOpen(open) {
    this.setState((prevState) => ({ RightNavOpen: !prevState.RightNavOpen }));
  }
  
 render() {
  const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <RightNav open={open}/>
      </>
    )
  }

  const RightNav = ({open}) => {
    return (
      <>
      <Ul open={open}>
        <li className="nav_li" onClick={() => this.onSetRightNavOpen(true)}><Link to="/components/Creo">ABOUT CREO</Link></li>
        <li className="nav_li" onClick={() => this.onSetRightNavOpen(true)}><Link to="/components/Works">WORKS</Link></li>
        <li className="nav_li" onClick={() => this.onSetRightNavOpen(true)}><Link to="/components/Team">TEAM</Link></li>
        <li className="nav_li" onClick={() => this.onSetRightNavOpen(true)}><Link to="/components/Careers">CAREERS</Link></li>
        <li className="nav_li" onClick={() => this.onSetRightNavOpen(true)}><Link to="/components/Contact2">CONTACT</Link></li>  
      </Ul>
      </>
    )
  }

  return (
    <Nav>
      <div className="logo">
      <Link to="/">
        <img className="headerlogo" src="https://blog.creokorea.com//uploads/l_f77a7d016b.png" alt="logo"/></Link>
      </div>
      <Burger />
    </Nav>
  )
}
}

export default Navbar;