/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import ItemSlider from './ItemSlider';
import '../styles/slider.css';
const Slider = () => {
    return (
        <div className="slider">
        <ItemSlider/>
        <ItemSlider/>
        <ItemSlider/>
        <ItemSlider/>
        <ItemSlider/>
        <ItemSlider/>   
        </div>
    );
}

export default Slider;
