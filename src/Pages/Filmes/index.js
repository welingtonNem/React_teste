import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from './../../services/api'
import './filmes.css'

function Filmes() {

    const { id } = useParams();
    const [filmes, setFilmes] = useState([])
    const [loadin, setLoadin] = useState(true)


    useEffect(() => {

        async function loadFilmes() {

            await api.get(`movie/${id}`, {
                params: {
                    api_key: "b9eca62d1834bf7d43422282102d7fd9",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    //  console.log(response.data)
                    setFilmes(response.data)
                    setLoadin(false)

                })
                .catch(() => {
                    console.log("Filme não econtrando")
                })


        }


        loadFilmes()

    }, [])


    if (loadin) {
        return (
            <div className="alerts" class="alert alert-success alert-dismissible">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <strong>Carregando</strong> Carragando do Bank end
            </div>
        );
    }

    return (
        <div>
            <strong>{filmes.title}</strong>
            <img src={`https://image.tmdb.org/t/p/original/${filmes.backdrop_path}`} alt={filmes.title} />
            <h2>Sinops</h2>
            <p>{filmes.overview}</p>
            <h3>Avaliaçao</h3>
            <p>{filmes.vote_average} / 10</p>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Filmes