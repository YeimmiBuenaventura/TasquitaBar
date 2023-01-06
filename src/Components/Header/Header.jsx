import './Header.scss'; 
import React from "react";
import Verificar from "./Img/Verificar.png";
import { Link } from 'react-router-dom';

function Header() {

    return (
    <article>    
        <section className='header'>
            <div className='text'>
                <p>Agrega tantos productos como desees, introduce la cantidad requerida en la casilla; recuerda dar clic sobre el carrito de compras para agregar tu pedido correctamente.</p>
            </div>
            <Link to="TuPedido" className='car1'><img src={Verificar} alt= "Carrito" className='car'/> </Link>
            
        </section>
    </article>
    );
}

export default Header;