import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>O home ta de pé</h1>
            <h2>Quem?</h2>
            <h1>Meu pau</h1>
            <span>Miler, Paulo</span>

            <br/>

            <Link to="/sobre">Sobre</Link><br/>
            <Link to="/contato">Contato</Link>

            <hr/>

            <Link to="/produto/1">Acessar meme</Link><br/>
        </div>
    );
}

export default Home;