import { Link } from "react-router-dom";
import './Erro.css'


function Erro() {
    return (
        <div className="sda">
            <section className="conteiners">
                <h1>404</h1>
                <h2>Não tem essa pagina:</h2>
                <p>Voltar pra pagina: <Link to="/" className="Erro"> Home</Link></p>
            </section>
        </div >
    );

}

export default Erro