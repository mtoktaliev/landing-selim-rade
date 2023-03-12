import Slider from "react-slick";
import LightBtn from '../lightBtn/LightBtn';
import './Weoffer.css'


const Weoffer = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className="weoffer">
            <div className="container">
                <h2 className="h2 weoffer_title">Мы предлагаем</h2>
                    <div className="weoffer_inner">
                        <div className="weoffer_item-one">
                            <div className="weoffer_item-name">Секционные</div>
                        </div>
                        <div className="weoffer_item-two">
                            <div className="weoffer_item-name">Автоматика</div>
                        </div>
                        <div className="weoffer_item-three">
                            <div className="weoffer_item-name">Роль ворота</div>
                        </div>
                        <div className="weoffer_item-four">
                            <div className="weoffer_item-name">Распашные</div>
                        </div>
                        <div className="weoffer_item-five">
                            <div className="weoffer_item-name">Складные</div>
                        </div>
                    </div>
            </div>

            <Slider {...settings} className="slider">
                <div className="weoffer_item-one">
                    <div className="weoffer_item-name">Секционные</div>
                </div>
                <div className="weoffer_item-two">
                    <div className="weoffer_item-name">Автоматика</div>
                </div>
                <div className="weoffer_item-three">
                    <div className="weoffer_item-name">Роль ворота</div>
                </div>
                <div className="weoffer_item-four">
                    <div className="weoffer_item-name">Распашные</div>
                </div>
                <div className="weoffer_item-five">
                    <div className="weoffer_item-name">Складные</div>
                </div>
        </Slider>

        <LightBtn name="смотреть все" />
        </div>
    );
}

export default Weoffer;