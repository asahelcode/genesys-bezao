import React, { Component } from "react";
import Slider from "react-slick";
import Avatar from '../assets/images/avatar.png'
import Quote from '../assets/svgs/quotes.svg'



export default class Testimonials extends Component {

    render() {
        const settings = {
            dots: true,
            // appendDots: () => <ol>{dots}</ol>,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="testimonials__wrapper">
                <h1 className="testimonials__title">What our customers say about us</h1>
                <p className="testimonials__paragraph">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>

                <Slider {...settings} className="testimonials__card">
                    <div className="testimonials__item">
                        <div className="head">
                            <div className="image-pic"> <img src={Avatar} alt="" /></div>
                            <div className="details">
                                <h2>John Samson</h2>
                                <h3>enugu, nigeria</h3>
                            </div>
                            <div className="quotes"><img src={Quote} alt="quote" /></div>
                        </div>
                        <p>White dwarf a still more glorious dawn awaits tingling of the spine emerged
                            into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy
                            hidden in matter concept of the number one permanence.</p>
                    </div>
                    <div className="testimonials__item">
                        <div className="head">
                            <div className="image-pic"> <img src={Avatar} alt="" /></div>
                            <div className="details">
                                <h2>John Samson</h2>
                                <h3>enugu, nigeria</h3>
                            </div>
                            <div className="quotes"><img src={Quote} alt="quote" /></div>
                        </div>
                        <p>White dwarf a still more glorious dawn awaits tingling of the spine emerged
                            into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy
                            hidden in matter concept of the number one permanence. </p>
                    </div>
                    <div className="testimonials__item">
                        <div className="head">
                            <div className="image-pic"> <img src={Avatar} alt="" /></div>
                            <div className="details">
                                <h2>John Samson</h2>
                                <h3>enugu, nigeria</h3>
                            </div>
                            <div className="quotes"><img src={Quote} alt="quote" /></div>
                        </div>
                        <p>White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence. </p>
                    </div>
                    <div className="testimonials__item">
                        <div className="head">
                            <div className="image-pic"> <img src={Avatar} alt="" /></div>
                            <div className="details">
                                <h2>John Samson</h2>
                                <h3>enugu, nigeria</h3>
                            </div>
                            <div className="quotes"><img src={Quote} alt="quote" /></div>
                        </div>
                        <p>White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence. </p>
                    </div>
                    <div className="testimonials__item">
                        <div className="head">
                            <div className="image-pic"> <img src={Avatar} alt="" /></div>
                            <div className="details">
                                <h2>John Samson</h2>
                                <h3>enugu, nigeria</h3>
                            </div>
                            <div className="quotes"><img src={Quote} alt="quote" /></div>
                        </div>
                        <p>White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence. </p>
                    </div>
                </Slider>
            </div>
        );
    }
}