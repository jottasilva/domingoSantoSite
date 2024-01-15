import React from 'react';
import {Routes, Route} from 'react-router-dom'
import App from './site';  // Certifique-se de importar corretamente o componente App
import PromotersPage from './promoters';
function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/promoters" element={<PromotersPage/>} />
        </Routes>
    );
}
export default Rotas;