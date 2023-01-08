import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import PopUps from  "../Pop/PopUps"

export default function Home() {
  return (
    <div className="home">
      <PopUps/>
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
