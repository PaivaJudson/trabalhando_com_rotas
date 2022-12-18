import {Link} from 'react-router-dom';

function Home() {
    return (
      <div>
        <h1>Bem-vindo a Pagina Home</h1>
        <span>Judson Paiva</span> <br />

        <Link to='/'>Home</Link>
        <Link to='/sobre'>Sobre</Link>
        <Link to='/contacto'>Conatcto</Link>
        
      </div>
    );
  }
  
  export default Home;