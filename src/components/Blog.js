import React from 'react'
import Shrimp from '../assets/images/shrimp.png'
import Fries from '../assets/images/fries.png'
import Salad from '../assets/images/salad.png'

const Blog = () => {
    return (
        <section className='blog__wrapper'>
            <div className="blog__head">
                <h1 className="blog__title">
                    Blog Our Latest News
                </h1>
                <p className="blog__paragraph">
                    Have you ever browsed food blogs like mine and wondered how to start a food blog of your very own?
                </p>
            </div>
            <div className="card__wrapper">
                <div className="blog__card">
                    <img src={Fries} alt="" />
                    <h2> <span style={{ color: "#da3743" }}>Design</span> <span style={{ color: "rgba(85, 100, 128, 1)" }}>01 October 2019</span></h2>
                    <h1>Better Than Takeout Kung Pao Chicken</h1>
                    <p>This spicy, tangy, and sweet better than takeout no peanut kung pao chicken stir fry recipe </p>
                    <p style={{ color: "#da3743", fontWeight: "700", textTransform: "uppercase" }}>Read More</p>
                </div>
                <div className="blog__card">
                    <img src={Fries} alt="" />
                    <h2> <span style={{ color: "#da3743" }}>Design</span> <span style={{ color: "rgba(85, 100, 128, 1)" }}>01 October 2019</span></h2>
                    <h1>The Best Sesame Soy Broccoli Salad</h1>
                    <p>Hello broccoli salad!Broccoli salad with a sweet and tangy dressing is my new go to for summer parties. </p>
                    <p style={{ color: "#da3743", fontWeight: "700", textTransform: "uppercase" }}>Read More</p>
                </div>
                <div className="blog__card">
                    <img src={Fries} alt="" />
                    <h2> <span style={{ color: "#da3743" }}>Design</span> <span style={{ color: "rgba(85, 100, 128, 1)" }}>01 October 2019</span></h2>
                    <h1>Better Than Takeout Kung Pao Chicken</h1>
                    <p>This super easy version of dan dan noodles is fast, flavorful, and vegetarian to boot.It’s definitely </p>
                    <p style={{ color: "#da3743", fontWeight: "700", textTransform: "uppercase" }}>Read More</p>
                </div>
            </div>

        </section>
    )
}

export default Blog