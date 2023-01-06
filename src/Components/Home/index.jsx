import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <br />
      <br />
      <br />
      <div className="com">
        <Link to="TuPedido" className="compra">
          Comprar
        </Link>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
