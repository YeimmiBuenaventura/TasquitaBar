import React from "react";
import Pop from "./Pop.scss"


const PopUp = ({children, estado, changeEstado}) =>{

    return(
        <>
        { estado &&
        <section className="popup">
            <section className="pop">
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
