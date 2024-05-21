import { Link } from 'react-router-dom';

function Contato(){
    return(
        <div>
            <h1>Paulo: (42)988003270</h1>
            <h2>Number?</h2>
            <h1>Paulo: (42)988003270</h1>
            <span>Miler, Paulo</span>

            <br/>

            <Link to="/home">home</Link><br/>
            <Link to="/sobre">Contato</Link>

            <hr/>

            <Link to="/produto/1">Acessar meme</Link><br/>
        </div>
    );
}

export default Contato;