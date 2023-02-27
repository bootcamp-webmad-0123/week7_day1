import './Navigation.css'
import logo from './../../assets/React-icon.png'

const Navigation = () => {

    return (
        <header className="Navigation">
            <img src={logo} alt="React logo" />
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/nosotros">Nosotros</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation