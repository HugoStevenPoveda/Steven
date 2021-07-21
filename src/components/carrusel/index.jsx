import React, { Component } from "react";
import Slider from "react-slick";
import MediaCard from '../card'
import Image from '../../images/image'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class Carrusel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
        <h2>Últimos posts</h2>
        <Slider {...settings}>
          <div>
            <h3>
            <MediaCard  image={Image.saludo} title={"Hola mundo"} paragraph={"esto es un aprueba"}/>
            </h3>
          </div>
          <div>
            <h3>
            <MediaCard  image={Image.saludo} title={"Hola mundo"} paragraph={"esto es un aprueba"}/>
            </h3>
          </div>
          <div>
            <h3>
            <MediaCard  image={Image.saludo} title={"Hola mundo"} paragraph={"esto es un aprueba"}/>
            </h3>
          </div>
          
          <div>
            <h3>
            <MediaCard  image={Image.saludo} title={"Hola mundo"} paragraph={"esto es un aprueba"}/>
            </h3>
          </div>
          <div>
            <h3>
            <MediaCard  image={Image.saludo} title={"Hola mundo"} paragraph={"esto es un aprueba"}/>
            </h3>
          </div>
         
          
        </Slider>
      </div>
    );
  }
}