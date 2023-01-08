import React from "react";
import "./Pop.scss";
import logo from "./Img/LogoTas.png";

//Implemented funcionality
const PopUp = ({children, estado, changeEstado}) =>{

    return(
        <>
        { estado &&
        <section className="popup">
            <section className="pop">
                <img src={logo} className="logo"/>
                <div className="msj"/>
                <button id="ok">Vale</button>
                {children}
            </section>
        </section>
        }
        </>
    
    )
}
export default PopUp;
