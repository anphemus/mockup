/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import '../styles/footer.css'
const Footer = () => {
    return (
        <div className="footer-container">
        <div className="footer-item">
        <h3>SOBRE NOSOTROS</h3>
            <ul>
                <li><a href='./'>¿Quienes somos?</a></li>
                <li><a href='./'>Nuestra historia</a></li>
                <li><a href='./'>Nuestra información</a></li>
            </ul>
        </div>
        <div className="footer-item">
        <h3>CATEGORIAS DESTACADAS</h3>
            <ul>
                <li><a href='./'>Profesionalismo de la salud</a></li>
                <li><a href='./'>Protección e higiene</a></li>
                <li><a href='./'>Control y prevención</a></li>
                <li><a href='./'>Movilidad</a></li>
                <li><a href='./'>Independencia y cuidado en el hogar</a></li>
                <li><a href='./'>Terapia respiratoria</a></li>
                <li><a href='./'>Confort</a></li>
            </ul>
        </div>
        <div className="footer-item">
        <h3>SERVICIO AL CLIENTE</h3>
            <ul>
                <li><a href='./'>Politica de entrega</a></li>
                <li><a href='./'>Politica de devoluciones</a></li>
                <li><a href='./'>Garantias</a></li>
                <li><a href='./'>Cancelación</a></li>
                <li><a href='./'>WhatsApp 123 123 1234</a></li>
                <li><a href='./'>e-Mail: info@impormedical.com</a></li>
            </ul>
        </div>       
        </div>
    );
}

export default Footer;
