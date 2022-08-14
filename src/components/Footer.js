import React from 'react'
import { Link } from 'react-router-dom'
//Image imports
import Logo from '../assets/svgs/mealLogo.svg';
import Facebook from '../assets/svgs/facebook.svg';
import Instagram from '../assets/svgs/instagram.svg';
import Twitter from '../assets/svgs/twitter.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer__wrapper">
                <Link to={'/'}>
                    <img src={Logo} alt="" width={"270px"} />
                </Link>
                <div className="services">
                    <div className="company">
                        <h1>Company</h1>
                        <p>Blog</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                    </div>

                    <div className="company">
                        <h1>Services</h1>
                        <p>FAQs</p>
                        <p>Our Menu</p>
                    </div>
                </div>
            </div>



            <div className="socials">
                <span><img src={Facebook} alt="" /></span>
                <span><img src={Instagram} alt="" /></span>
                <span><img src={Twitter} alt="" /></span>
            </div>
            <hr />
            <p>&copy;2020Meals. All Rights Reserved</p>
        </footer>
    )
}

export default Footer