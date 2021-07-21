import React, { Component } from "react";
import Slider from "react-slick";
import MediaCard from '../card'
import Image from '../../images/image'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <h3>
                            <MediaCard image={Image.saludo} title={"Hola mundo"} paragraph={"esto es un aprueba"} />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <MediaCard image={Image.saludo} title={"Hola mundo"} paragraph={"esto es un aprueba"} />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <MediaCard image={Image.saludo} title={"Hola mundo"} paragraph={"esto es un aprueba"} />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <MediaCard image={Image.saludo} title={"Hola mundo"} paragraph={"esto es un aprueba"} />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <MediaCard image={Image.saludo} title={"Hola mundo"} paragraph={"esto es un aprueba"} />
                        </h3>
                    </div>

                </Slider>
            </div>
        );
    }
}