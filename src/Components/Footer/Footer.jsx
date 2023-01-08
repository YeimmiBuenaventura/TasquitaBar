import React from "react";
import  "./Footer.scss";
import personal from "./Img/LogoPersonal.png"


function footer () {

    return(
        <section className="footer">
            <span className="adr">Dirección: Calle 59b 82j - 07 </span>
            <span className="cont">Contacto: 300 801 4429</span>
            <span className="prom">By: Y.Buenaventura &nbsp; <img src={personal} className="personal"></img> &nbsp; - 2023</span>
        </section>
    )
}
export default footer;