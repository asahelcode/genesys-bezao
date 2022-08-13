import React from 'react'
import HeroImage from '../assets/images/hero.png'
import HeroEllipse from '../assets/images/heroEllipse.png'
import MessageIcon from '../assets/svgs/Subtract.svg'
import Search from '../assets/svgs/searchIcon.svg';

const Hero = () => {
    return (
        <section className='hero__wrapper'>
            <div className="hero__container">
                <div className="hero__left">
                    <h1 className="hero__title">
                        Delicious meals at
                        your convenience
                    </h1>
                    <p className="hero__paragraph">
                        Order your meals from us and we will have it delivered at your doorstep.
                    </p>

                    <div className="instant__order">
                        <h3>Instant Order</h3>
                        <form className="form">
                            <img src={Search} alt="search" />
                            <input type="text" placeholder='Search for meal' />
                        </form>
                    </div>

                    <button>Get Started</button>
                </div>
                <div className="hero__right">
                    <div className="ellipse">
                        <img src={HeroEllipse} alt="" />
                    </div>
                    <img src={HeroImage} alt="hero" />
                </div>
            </div>
            <div className="message">
                <img src={MessageIcon} alt="message" />
            </div>
        </section>
    )
}

export default Hero