import { Link } from 'react-router-dom';

function Sobre(){
    return(
        <div>
            <h1>Memes</h1>
            <h2>Engraçados?</h2>
            <h1>Meu pau</h1>
            <span>Miler, Paulo</span>

            <br/>

            <Link to="/home">home</Link><br/>
            <Link to="/contato">Contato</Link>

            <hr/>

            <Link to="/produto/1">Acessar meme</Link><br/>
        </div>
    );
}

export default Sobre;