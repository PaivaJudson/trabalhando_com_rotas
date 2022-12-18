import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contacto from './pages/Contacto/Contacto';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Header from './components/Header';
import Erro from './pages/Erro';


function RoutesApp(){

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre/>} />
                <Route path='/contacto' element={<Contacto />} />

                <Route path='*' element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );

}


export default RoutesApp;