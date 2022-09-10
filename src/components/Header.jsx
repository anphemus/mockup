/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Logo from '../assets/Logo_Impormedical_Horizontal.png'
import Search from '../assets/search.png'
import ShoppingCart from '../assets/shopping-cart.png'
import Disability from '../assets/disability.png'
import Healing from '../assets/healing.png'
import Man from '../assets/man.png'
import Soap from '../assets/soap.png'
import '../styles/header.css'

const Header = ( {contador} ) => {
    return (
        <div className='header-container'>
        <section className='upper-section'>
        <div className='logo-container'>
        <img src={Logo} title="Logo" alt="Logo" width={50}></img>
        <p>Impormedical</p> 
        </div>
        <form>
        <div className='search-container'>
        <input type="search" placeholder="¿QUÉ ESTÁS BUSCANDO? ESCRÍBELO AQUÍ..."></input>
        <a href="./">
        <button type='submit'>
        <img src={Search} alt='Search-icon'></img>
        </button></a>
        </div>
        </form>
        
        <div className='mis-pedidos'>
            <a href="./">MIS PEDIDOS</a>
        </div>
        <div className='login'>
            <p>HOLA ALIAD@</p>
            <a href="./">INGRESA</a>
        </div>
        <div className='shopping-cart-container'>
        <div className='shopping-cart'>
        <span>{contador}</span>
        <img src={ShoppingCart} alt="Shopping Cart" width={30}></img>
        </div>
        <span>CARRITO</span>
        </div>

        </section>
        <section className="bottom-section">
        <div className="menu-container">
        <div className='rayita'></div>
        <div className='rayita'></div>
        <div className='rayita'></div>
        </div>
        <div className="items-container">
            <ul>
                <li><img src={Disability} alt="disability img"></img><a href='./'>MOVILIDAD</a></li>
                <li><img src={Healing} alt="healing img"></img><a href='./'>CUIDADO EN EL HOGAR</a></li>
                <li><img src={Man} alt="man img"></img><a href='./'>PROFESIONALES DE LA SALUD</a></li>
                <li> <img src={Soap} alt="soap img"></img><a href='./'>TAPABOCAS Y DESINFECCIÓN</a></li>

            </ul>
        </div>
        </section>
        </div>
    );
}

export default Header;
