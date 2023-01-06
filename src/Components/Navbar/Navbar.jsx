import React from "react";
import { useState } from "react";
import {Beers} from "../Products/ProductsBeer";
import {Liqueurs} from "../Products/ProductsLiqueur";
import {Varios} from "../Products/ProductsVarius";
import "./Navbar.scss"

function Nav (){
    const [beer, closeBeer] = useState (false);
    const [liqueur, closeLiqueur] = useState (false);
    const [varius, closeVarius] = useState (false);

    const handleBeerClick = () =>{
        closeBeer(true);
        closeLiqueur(false);
        closeVarius(false);
    }

    const handleLiqueurClick = () =>{
        closeLiqueur(true);
        closeBeer(false);
        closeVarius(false);
    }

    const handleVariusClick =() => {
        closeVarius(true);
        closeBeer(false);
        closeLiqueur(false);
    }


    return(
        <section>
            <section className="nav">
                <button onClick={handleBeerClick } className="nav1" >Cervezas</button>
                <button onClick={handleLiqueurClick}className="nav1">Licores</button>
                <button onClick={handleVariusClick} className="nav1">Varios</button>
            </section>
            {beer ? <Beers/> : null}
            {liqueur ? <Liqueurs/> : null}
            {varius ? <Varios/> : null}
        </section>
    )
}
export default Nav;