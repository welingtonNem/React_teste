import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from './../../services/api'
import './filmes.css'
import { toast } from 'react-toastify'

function Filmes() {

    const { id } = useParams();
    const navigts = useNavigate()
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
                    navigts("/", { replace: true })
                })


        }


        loadFilmes()

    }, [navigts, id])


    function salvarFilme() {
        const minhaLista = localStorage.getItem("@primeFlix");

        let filmesSalvos = JSON.parse(minhaLista) || [];
        const hesFilmes = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filmes.id)

        if (hesFilmes) {
            //alert("Esse filme ja esta na lista")
            toast.warn("Filme ja ta lista")
            return;
        }

        filmesSalvos.push(filmes);
        localStorage.setItem("@primeFlix", JSON.stringify(filmesSalvos))
        //alert("Filmes salvou com sucsso")
        toast.promise("Salvul com sucesso")

    }


    if (loadin) {
        return (
            <div className="alerts" class="alert alert-success alert-dismissible">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <strong>Carregando</strong> Carragando do Bank end
            </div>
        );
    }

    return (
        <div className="filme-info">
            <strong>{filmes.title}</strong>
            <img src={`https://image.tmdb.org/t/p/original/${filmes.backdrop_path}`} alt={filmes.title} />
            <h2>Sinops</h2>
            <p>{filmes.overview}</p>
            <h3>Avaliaçao</h3>
            <p>{filmes.vote_average} / 10</p>

            <div className="area-botton">
                <button onClick={salvarFilme}>Salvar</button>
                <button> <a href={`https://www.youtube.com/results?search_query=sujeito+programador${filmes.title} Treler`} target="blank">Treler</a></button>

            </div>
        </div>
    );
}

export default Filmes