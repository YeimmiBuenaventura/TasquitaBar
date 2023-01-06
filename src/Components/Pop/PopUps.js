import Pop from "./Pop";
import { useState } from "react";

const PopUps = () =>{
    const [estado1, changeEstado1] = useState(true);
    return (
        <Pop estado = {estado1} changeEstado = {changeEstado1}>
            <div className="msj">
                    <p>Para nosotros es un gusto compartir contigo nuestra nueva app para domicilios, podremos llevar la fiesta a tu hogar. <br/><br/>Tu pones el lugar, La Tasquita Bar la fiesta! </p>
                </div>
                <button onClick={() => changeEstado1(!estado1)} id="ok">Vale</button>
        </Pop>
    )
}
export default PopUps;