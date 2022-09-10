import React from 'react';
import '../styles/seeproducts.css'
const SeeProducts = () => {
    return (
        <div className='seeproducts-container'>
        <div className='seeproducts-item'>
            <h1>Empresas en crecimiento</h1>
            <button>VER PRODUCTOS</button>
        </div>
        <div className='seeproducts-item'>
            <h1>Complemento línea de oximetría</h1>
           <a href='./'><button>VER PRODUCTOS</button></a> 
        </div>
        </div>
    );
}

export default SeeProducts;
