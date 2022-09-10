/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Imagen from '../assets/Wheelchair-Banner2.jpg'
import '../styles/sliderItem.css'
import SliderImage from '../assets/silla-de-ruedas.png';
const ItemSlider = () => {
    return (
        <div className="slider-container">
        <div className="slider-item">
            <img src={Imagen} alt="Imagen de adolescente con cubrebocas"></img>
            <div className="slider-hover">
                <img src={SliderImage} alt="Slider Image" ></img>
            </div>
        </div>
        <p>Silla de ruedas</p>
    </div>
    );
}

export default ItemSlider;
