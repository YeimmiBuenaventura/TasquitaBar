import React, { useState } from 'react';
import davi from './Img/davi.png';
import dinero from './Img/dinero.png';
import nequi from './Img/nequi.png';
import tarjetas from './Img/tarjetas.png';
import "./Buy.scss";


export default function Buys({
  productos,
  total,
  totalConSolicitadas
}) {
  const [name, setName] = useState('');
  const [cel, setCel] = useState('');
  const [address, setAddress] = useState('');
  const [com, setCom] = useState('');
  const [medio, setMedio] = useState('');

  const sendWhatsapp = () => {
    const listProducts = productos.map(item => `${item.nameProduct} - ${item.Solicitadas} - valor: $ ${item.valorUnidad} - subtotal: $ ${totalConSolicitadas(item)}`)
    let numero = 573008014429;
    let url = `
      https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${name}, Mi Dirección es:%20${address}, número de contacto:%20${cel}, Medio de pago:%20${medio}, Comentarios adicionales:%20${com}, El pedido que requiero es:%0A
      ${listProducts.join('%0A')}
      %0A
      total: ${total}
    `;
    window.open(url);
  };

  return (
    <section>
      <div className="msg">
        <p>
          Recuerda que puedes realizar el pago de tu pedido por diferentes
          medios de pago
        </p>
      </div>
      <section className="type">
        <figure>
          <img src={dinero} alt="" className="efectivo" />
        </figure>
        <span className="efec">Efectivo</span>
        <figure>
          <img src={nequi} alt="" className="nequi" />
        </figure>
        <span className="neq">Nequi</span>
        <figure>
          <img src={tarjetas} alt="" className="tarjetas" />
        </figure>
        <span className="tarj">Tarjeta</span>
        <figure>
          <img src={davi} alt="" className="daviplata" />
        </figure>
        <span className="davi">Daviplata</span>
      </section>
      <form>
        <label htmlFor="name">Nombre </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="cel">Contacto </label> &nbsp;&nbsp;&nbsp;
        <input
          type="text"
          id="cel"
          value={cel}
          onChange={(e) => setCel(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="address">Dirección </label> &nbsp;&nbsp;
        <input
          type="text"
          id="ad"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">Cual medio de pago usaras? </label>
        <br />
        <br />
        <input
          type="radio"
          id="efectivo"
          value="efectivo"
          name="medio"
          onChange={(e) => setMedio(e.target.value)}
        />
        &nbsp;<label htmlFor="efectivo">Efectivo </label>
        <br />
        <br />
        <input
          type="radio"
          id="tarjeta"
          value="tarjeta"
          name="medio"
          onChange={(e) => setMedio(e.target.value)}
        />
        &nbsp;<label htmlFor="addr">Tarjeta</label>
        <br />
        <br />
        <input
          type="radio"
          id="nequi"
          value="nequi"
          name="medio"
          onChange={(e) => setMedio(e.target.value)}
        />
        &nbsp;
        <label htmlFor="nequi">Nequi</label>
        <br />
        <br />
        <input
          type="radio"
          id="davi"
          value="davi"
          name="medio"
          onChange={(e) => setMedio(e.target.value)}
        />
        &nbsp;
        <label htmlFor="davi">Daviplata</label>
        <br />
        <br />
        <label htmlFor="comment">Comentario adicional </label> &nbsp;&nbsp;
        <br />
        <br />
        <textarea
          type="text"
          id="coment"
          value={com}
          onChange={(e) => setCom(e.target.value)}
        />
      </form>
      <div className="conboton">
        <button className="confirmar" onClick={sendWhatsapp}>Confirmar Compra</button>
      </div>
    </section>
  );
}
