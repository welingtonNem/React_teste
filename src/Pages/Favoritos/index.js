import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import './favoritos.css'
import { toast } from 'react-toastify'

function Favoritos() {

    const [filmes, setFilmes] = useState([])


    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeFlix")
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])


    function exluirFilmes(id) {

        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes)
        localStorage.setItem("@primeFlix", JSON.stringify(filtroFilmes))
        toast.success("Com sucesso")
    }


    return (
        <div className="meus-filmes">
            <h1>Minha Lista</h1>

            {filmes.length === 0 && <span>Nãoe tem nada lista :(</span>}
            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <spa>{item.title}</spa>

                            <div>
                                <Link to={`/filmes/${item.id}`}>Ver datalhes</Link>
                                <button onClick={() => exluirFilmes(item.id)}>Excluir</button>
                            </div>

                        </li>
                    )

                })}
            </ul>
        </div>
    )
}

export default Favoritos