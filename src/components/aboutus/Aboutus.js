import H2 from '../h2/H2';
import './Aboutus.css';


const Aboutus = () => {
    return ( 
        <div className="aboutus">
            <div className="aboutus_container">
                <H2 data="Кто такие Selim trade?" />
                <div className="aboutus_text">
                    <p>МЫ являемся официальным представителем DOORHAN.</p>
                    <p>Производственно — монтажная компания Selim trade основана в 2003 году.</p>
                    <p>Основа нашей деятельности — это продажа и монтаж: ворот, рольставней, шлагбаумов, рол штор, жалюзи и многое другое.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Aboutus;

