import { Link } from "react-router-dom";
import Tabla from "./componentes/Tabla";

function Historial() {

    return (
        <>
            <h1>Historial de cotizaciones 📋</h1>
            <div className="historial-container">

            <Tabla />
            <Link to={"/"}>
                <button className="btn btn-primary">
                    Volver al inicio
                </button>
            </Link>
            </div>
        </>
    )
}

export default Historial