import {useParams} from 'react-router-dom';

function Produto(){
    
    const {id} = useParams();
    
    return(

        <div>
            <h1>Memes</h1>
            <span>My product is {id}</span>

            <br/>
            
        </div>
    );
}

export default Produto;