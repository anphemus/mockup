import React from 'react';
import { Sillas } from '../components'
import '../styles/details.css'
const Details = () => {
    return (
        <div className='details-container'>
        <div className='options-container'>
            <div className='options'>
                <span>SILLAS DE RUEDAS</span>
            </div>
            <div className='options'>
                <span>TERAPIA EN EL HOGAR</span>
            </div>
            <div className='options'>
                <span>MOVILIDAD</span>
            </div>
        </div>
        <div className='image'></div>
        <div className='details'>
        <div>
        <Sillas title={"SILLAS DE RUEDAS"}/>
        </div>
        </div>
        </div>
    );
}

export default Details;
