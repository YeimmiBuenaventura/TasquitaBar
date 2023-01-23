import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import addCar from './Store/add/add.png';
import { info } from './Store/data';
import { add } from './Store/carSlice';
import './Styles.scss';

export const Varios = () => {
  //Filter to get products
  const varius = info.filter(item => item.type === 'varius');
  const Dispatch = useDispatch();
  //Allows you to extract data from the store
  const products = useSelector((state) => state.cart.products);

  const [productsLicors, setProductsLicors] = useState(varius);
  //Function to change the quantity the product to input and update the list
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
      {/*Implemented card to products*/}
      {productsLicors.map((item) => (
        <article key={item.id} className="cartProduct">
          <img
            src={`../imgs/varius/${item.img}`}
            alt={item.nameProduct}
            className="photo"
          />
          <div className="qn">
            <input id="l1" type="number" onChange={cambiarSolicitadas(item)} />
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
              <br />$ {item.valorUnidad}.00 Und.
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};
