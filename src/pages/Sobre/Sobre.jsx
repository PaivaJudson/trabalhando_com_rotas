import {Link} from 'react-router-dom';

function Sobre() {
    return (
      <div>
        <h1>Pagina Sobre</h1> <br />
        <Link to='/'>Home</Link>
        <Link to='/sobre'>Sobre</Link>
        <Link to='/contacto'>Contacto</Link>
        
      </div>
    );
  }
  
  export default Sobre;