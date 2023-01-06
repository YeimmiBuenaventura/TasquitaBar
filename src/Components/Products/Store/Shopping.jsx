import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import eliminar from './add/eliminar.png';
import { add } from './carSlice'

//Shopping Cart
function Shopping() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart.products);

  const deleteItem = product => () => {
    const productList = products.filter(item => item.id !== product.id);

    dispatch(add(productList));
  }

  return (
    <div>
      {products.map((item, index) => (
        <div  className="sho" key={`itemProduct-${index.toString()}`}>
          <button className="del" onClick={deleteItem(item)}>
            <figure>
              <img src={eliminar} className="eli" />
            </figure>
          </button>
          <span>{item.Solicitadas} Und. Solicitadas</span>
          <span>{item.nameProduct}</span>
          <span>({item.cantidad})</span>
          <span>
            Sub-Total $ {item.Solicitadas * item.valorUnidad}
          </span>
        </div>
      ))}
    </div>
  );
}
export { Shopping };
