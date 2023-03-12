import './Header.css';
import order from "./../../assets/icons/order-icon.svg";
import Btn from '../btn/Btn';

const Header = () => {
    const img = <img src={order} alt="order-icon"></img>;
    return ( 
        <div className="header">
            <div className='header_container'>
                <h1 className='header_title'>Современная и надёжная защита</h1>
                <div className='header_subtitle'>Найдите идеальный вариант сами или предоставьте это нам</div>
                <Btn icon={img} name="Заказать ворота"/>
            </div>
        </div>
     );
}
 
export default Header;