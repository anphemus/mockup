/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import data from '../modules/data'
import '../styles/sillas.css'
const Sillas = ({setCarritoContador, CarritoContador,title}) => {
    return (
        <div>
            <h2 className='sillas-title'>{title}</h2>
            <div className='sillas-container'>
            {data.map( (data,index) => 
               <div className='silla' key={index}> 
               {/**key? */}
                <img src={data.image} width={250} height={300}></img>
                <div>                <p>{data.name  }</p>
                <p>${data.price}</p></div>
                <button onClick={()=>{
                    setCarritoContador(CarritoContador+1)
                }}>AÑADIR AL CARRITO</button>
               </div> 
            )}
            </div>
        </div>
    );
}

export default Sillas;
