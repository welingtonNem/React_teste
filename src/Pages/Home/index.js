import { useEffect, useState } from "react";
import api from './../../services/api'
import { Link } from "react-router-dom";
import './home.css'


function Home() {

    const [filmes, setFilmes] = useState([]);
    const [loadin, setLoadin] = useState(true)


    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "b9eca62d1834bf7d43422282102d7fd9",
                    language: "pt-BR",
                    page: 1,
                }
            })

            //  console.log(response.data.results.slice(0, 10))
            setFilmes(response.data.results.slice(0, 10));
            setLoadin(false)
        }

        loadFilmes();

    }, [])



    if (loadin) {
        return (
            <h1 className="loadin">Carregando a pagina...</h1>
        );
    }

    return (
        <div className="conteiner">

            <div className="lista-filmes">
                {filmes.map((filmes) => {
                    return (
                        <article key={filmes.id}>
                            <strong>{filmes.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filmes.poster_path}`} alt={filmes.title} />
                            <Link to={`/filmes/${filmes.id}`}>Acessar</Link>
                        </article>
                    );
                })}

            </div>
        </div>
    );
}


export default Home