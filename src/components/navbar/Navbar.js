import "./style.css";
import logo from "./img/logo-selim-trade.png"
import toggleLogo from "./img/logo-selim-trade-toggle.png"
import phone from "./img/phone-icon.svg"
import { useState } from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <nav className="nav">
            <div className="nav_container">
                
                <a href="/" className="nav_logo"><img src={logo} alt="logo"></img></a>

            <ul className={`nav_list ${isOpen && "open"}`}>
                    <li className="nav_list-item">
                        <a href="/" className="nav_list-link toggle_logo"><img src={toggleLogo} alt="toggle-logo"></img></a>
                    </li>
                    <li className="nav_list-item">
                        <a href="/" className="nav_list-link nav_list-link--active">Главная</a>
                    </li>
                    <li className="nav_list-item">
                        <a href="/" className="nav_list-link">Услуги</a>
                    </li>
                    <li className="nav_list-item">
                        <a href="/" className="nav_list-link">Новости</a>
                    </li>
                    <li className="nav_list-item">
                        <a href="/" className="nav_list-link">Наши работы</a>
                    </li>
                    <li className="nav_list-item">
                        <a href="/" className="nav_list-link phone_icon">г. Бишкек<br/><span><img src={phone} alt="phone-icon"></img>+996 (552) 57 07 55</span></a>
                    </li>
                </ul>

                <a href="/" className="nav_contacts">г. Бишкек<br/>+996 (552) 57 07 55</a>

                <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <div className="bar"></div>
                </div>

            </div>
        </nav>
     );
}
 
export default Navbar;