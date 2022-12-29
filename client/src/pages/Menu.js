import logo from './../img/logo.png';
import './../css/Menu.css';

function Menu() {
    return (
        <div className="menu">
            <a href='/' className='logoButton'>
                <img src={logo} className="imgLogo" alt='Logo'/>
            </a>

            <div className='leftMenu'>
                <button className='menuButton'>
                    <img src="https://cdn-icons-png.flaticon.com/512/3388/3388797.png" className="menuButton" alt='Button menu'/>
                </button>

                <div className="frameList">
                    <ul className="listMenu">
                        <li>
                            <a href="">Rezerwacje</a>
                        </li>
                        <li>
                            <a href="">Pokoje</a>
                        </li>
                        <li>
                            <a href="">Atrakcje</a>
                        </li>
                        <li>
                            <a href="">Kontakt</a>
                        </li>
                        <li>
                            <a href="/login">Logowanie</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
  
  export default Menu;