import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import Erro from "./pages/Erro";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Produto from "./pages/Produto";

import Header from "./components/Header";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/"element={<Home/>}/>
                    <Route path="*"element={<Erro/>}/>
                    <Route path="contato"element={<Contato/>}/>
                    <Route path="/Sobre"element={<Sobre/>}/>
                    <Route path="/produto/:id"element={<Produto/>}/>
                </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;