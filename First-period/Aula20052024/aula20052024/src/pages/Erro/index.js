import { Link } from 'react-router-dom';

function Erro(){
    return(
        <div>
            <h2>Vai toma no cullll, seu idiota, isso aqui não existe, entre em contato com os merda que fizeram eese site. Vai com Deus amigo</h2>
            <span>Encontramos essas páginas aqui: </span>

            <Link to="/"Home></Link><br/>
            <Link to="/sobre"Sobre></Link><br/>
            <Link to="/contato"Contato></Link><br/>
        </div>
    );
}
export default Erro;