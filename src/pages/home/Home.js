import Advantages from '../../components/advantages/Advantages';
import Weoffer from '../../components/weoffer/Weoffer';
import Aboutus from './../../components/aboutus/Aboutus';
import Header from './../../components/header/Header';

const Home = () => {
    return ( 
        <div className='home'>
            <Header />
            <Aboutus />
            <Weoffer />
            <Advantages />
            <br/>
        </div>
     );
}
 
export default Home;