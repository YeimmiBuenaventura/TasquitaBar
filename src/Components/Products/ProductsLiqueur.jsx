import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addCar from './Store/add/add.png';
import { info } from './Store/data';
import { add } from './Store/carSlice';
import './Styles.scss';

export const Liqueurs = () => {
  const liqueur = info.filter(item => item.type === 'liqueur');
  const Dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const [productsLicors, setProductsLicors] = useState(liqueur);

  const cambiarSolicitadas = (product) => (e) => {
    const newProductsLicors = productsLicors.map((item) => {
      if (product.id === item.id) {
        item.Solicitadas = parseInt(e.target.value);
      }
      return item;
    });
    setProductsLicors(newProductsLicors);
  };

  return (
    <section className="products">
      {productsLicors.map((item) => (
          <article key={item.id} className="cartProduct">
            <img
              src={`../imgs/liqueur/${item.img}`}
              alt={item.nameProduct}
              className="photo"
            />
            <div className="qn">
              <input
                id="l1"
                type="number"
                onChange={cambiarSolicitadas(item)}
              />
            </div>
            <button
              onClick={() => {
                Dispatch(add([...products, item]));
              }}
              className="btn1"
            >
              <img alt="agregar" src={addCar} className="agre" />
            </button>
            <div className="info">
              <p>
                {item.nameProduct}
                <br />
                {item.cantidad}
                <br />$ {item.valorUnidad} Und.
              </p>
            </div>
          </article>
      ))}
      ;
    </section>
  );
};
