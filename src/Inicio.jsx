import { Link } from "react-router-dom";
import Formulario from "./componentes/Formulario";

function Inicio () {
    
    return (
        <>
            <h1>Cotizador de seguros de hogar 🏡</h1>
            <div className="inicio-container">
            <Formulario/>
            <Link to={"historial"}>
                <button className="btn btn-primary">
                    Ver historial 📋
                </button>
            </Link>
            </div>
        </>
    )
}

export default Inicio