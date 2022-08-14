import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SingleMenu from './SingleMenu';

const Menu = () => {
    const [menuList] = useState([
        {
            title: "Jollof Rice",
            desc: "Fried potato/yam chips with egg sauce or any ...",
            price: "₦ 1,500",
        },
        {
            title: "Jollof Rice",
            desc: "Fried potato/yam chips with egg sauce or any ...",
            price: "₦ 1,500",
        },
        {
            title: "Jollof Rice",
            desc: "Fried potato/yam chips with egg sauce or any ...",
            price: "₦ 1,500",
        },
        {
            title: "Jollof Rice",
            desc: "Fried potato/yam chips with egg sauce or any ...",
            price: "₦ 1,500",
        },
        {
            title: "Jollof Rice",
            desc: "Fried potato/yam chips with egg sauce or any ...",
            price: "₦ 1,500",
        },
        {
            title: "Jollof Rice",
            desc: "Fried potato/yam chips with egg sauce or any ...",
            price: "₦ 1,500",
        }
    ])

    return (
        <section className='menu__wrapper'>
            <div className="menu__container">
                <div className="menu__titles">
                    <h2>Menu</h2>
                    <h1>Current Menu</h1>
                </div>
                <div className="selection">
                    <Link to="" className='all'>All</Link>
                    <Link to="">Rice</Link>
                    <Link to="">Beans</Link>
                    <Link to="">Fries</Link>
                    <Link to="">Swallow</Link>
                    <Link to="">Others</Link>
                </div>
            </div>

            <div className="menu__list">
                {menuList.map((menu, index) => (
                    <SingleMenu key={index} menu={menu} />
                ))}
            </div>

            <div className="full__menu"> <button>Full Menu</button> </div>
        </section>
    )
}

export default Menu