import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Buy from '../Buy/Buy';
import Footer from '../Footer/Footer';
import { Shopping } from '../Products/Store/Shopping';
import './List.scss';
import dev from './Img/hacia-atras.png';

export const List = () => {

  //Implemented state to list
  const productos = useSelector((state) => state.cart.products);
  //Subtotal
  const totalConSolicitadas = (product) => product.valorUnidad * product.Solicitadas;
  //Total
  const total = productos.reduce((acumulador, product) => acumulador + totalConSolicitadas(product), 0)

  return (
    <section>
      <section className="ini">
        <div className='atras'>
          <Link to="/"className='bef'><img src={dev} alt='atras' className='fle'/></Link>
          <h1>TU PEDIDO</h1>
        </div>
        {/*Implemented component*/}
        <Shopping />
        <section className="all">
          <label>
            <b>Total a Pagar </b> &nbsp; ${' '}
          </label>
          <div>
            {total}
          </div>
        </section>
        {/*Implemented component*/}
        <Buy productos={productos} total={total} totalConSolicitadas={totalConSolicitadas} />
      </section>
      <Footer />
    </section>
  );
};
