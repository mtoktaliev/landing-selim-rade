import './Header.css';
import order from "./../../assets/icons/order-icon.svg";

const Header = () => {
    return ( 
        <div className="header">
            <div className='container'>
                <h1 className='header_title'>Современная и надёжная защита</h1>
                <div className='header_subtitle'>Найдите идеальный вариант сами или предоставьте это нам</div>
                <button className='btn'><img src={order} alt="order-icon"></img>Заказать ворота</button>
            </div>
        </div>
     );
}
 
export default Header;