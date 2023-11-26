import React, { useState }  from 'react';
import './NavBar.css';
import Logo from '../../assets/we-travel-logo.png';
import CancelIcon from '@material-ui/icons/Cancel';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {

    //function for NavBar toggle show - for mobile view
    const [active, setActive] = useState('NavBar');

    const showNav = () => {
        setActive('NavBar activeNavBar')
    }

    //function for NavBar toggle close - for mobile view
    const hideNav = () => {
        setActive('NavBar')
    }

    return (
        <section className='NavBarSection'>
            <header className="header flex">

                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1>
                            <img src={Logo} alt='we-travel-logo' className='icon' />
                            We Travel
                        </h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">

                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Packages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Buy Now</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>

                        <button className='btn'>
                            <a href="#">BOOK NOW</a>
                        </button>

                    </ul>

                    <div onClick={hideNav} className="closeNavBar">
                        <CancelIcon className="icon" />
                    </div>



                </div>
                <div onClick={showNav} className="toggleNavBar">
                    <MenuIcon className="icon" />
                </div>
            </header>
        </section>

    )
}

export default NavBar
