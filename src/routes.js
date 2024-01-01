import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './Pages/Home'
import Filmes from './Pages/Filmes'
import Favoritos from './Pages/Favoritos'

import Header from './components/Header'
import Erro from './Pages/Erro'

function RoutesApp() {
    return (

        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />/
                <Route path="/filmes/:id" element={<Filmes />} />
                <Route path="/Favoritos" element={<Favoritos />} />


                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>

    );
}

export default RoutesApp