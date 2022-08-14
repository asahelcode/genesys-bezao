import React from 'react'
import Rice from '../assets/images/Rectangle 82.png';
import Cart from '../assets/svgs/myTrayIcon.svg';

const SingleMenu = ({ menu }) => {
    return (
        <section className='menu__card'>
            <img src={Rice} alt="" />
            <h1>{menu.title}</h1>
            <p>{menu.desc}</p>
            <span className="buy"> <strong>{menu.price}</strong><img src={Cart} alt="" width={"15px"} height={"15px"} /></span>
        </section>
    )
}

export default SingleMenu