import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

//Image imports
import Logo from '../assets/svgs/mealLogo.svg';
import Search from '../assets/svgs/searchIcon.svg';
import Cart from '../assets/svgs/myTrayIcon.svg';
import Home from '../assets/svgs/homeIcon.svg';
import List from '../assets/svgs/mealListIcon.svg';
import Shop from '../assets/svgs/shopIcon.svg';
import CloseIcon from '../assets/svgs/close.svg';
import MenuIcon from '../assets/svgs/menu.svg';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const showNav = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='navigation__wrapper'>
            <section className='navigation__container'>
                <div className="navigation__left">
                    <Link to="/" id='logo' className={isOpen ? "invisible" : ""}>
                        <img src={Logo} alt="logo" width={"166px"} />
                    </Link>

                    <div className="page__links">
                        <NavLink to="/" activeClassname="active">
                            Home
                        </NavLink>

                        <NavLink to="/menu" activeClassname="active">
                            Menu
                        </NavLink>
                        {/* points to blog section for now */}
                        <NavLink to="/blog" activeClassname="active">
                            Meal Plans
                        </NavLink>
                    </div>
                </div>

                <div className="navigation__right">
                    <div className="icons">
                        <Link to="/">
                            <img src={Search} alt="search" />
                        </Link>
                        <Link to="/">
                            <img src={Cart} alt="cart" />
                        </Link>
                    </div>
                    <div className="cta">
                        <Link to="/" id='signin'>
                            Sign In
                        </Link>
                        <Link to="/" id='signup'>
                            <span> Create Account</span>
                        </Link>
                    </div>
                </div>


                {/* MOBILE NAVIGATION */}
                <div className="navigation__right--mobile">
                    <div className="icons">
                        <Link to="/" className={isOpen ? "invisible" : ""}>
                            <img src={Cart} alt="cart" />
                        </Link>
                        <Link to="" onClick={showNav} >
                            <img src={isOpen ? CloseIcon : MenuIcon} alt="menu" width={"25px"} />
                        </Link>
                    </div>
                </div>
            </section>
            {isOpen &&
                <div className="page__links--mobile">
                    <div className="cta">
                        <Link to="/" id='signup'>
                            <span> Create Account</span>
                        </Link>
                        <Link to="/" id='signin' style={{ border: "2px solid #da3743", color: "#121212" }}>
                            Sign In
                        </Link>
                    </div>
                    <div className="links--mobile">
                        <Link to="/" onClick={showNav}>
                            <img src={Home} alt="home" /><span>Home</span>
                        </Link>

                        <Link to="/menu" onClick={showNav}>
                            <img src={Shop} alt="menu" /><span>Menu</span>
                        </Link>
                        {/* points to blog section for now */}
                        <Link to="/blog" onClick={showNav}>
                            <img src={Cart} alt="tray" /><span>My Tray</span>
                        </Link>
                        <Link to="/">
                            <img src={List} alt="tray" /><span style={{ color: "#CCCCCC" }}>Meal Plans</span>
                        </Link>
                    </div>

                </div>
            }

        </div>
    )
}

export default Navigation;