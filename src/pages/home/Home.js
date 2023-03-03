

import Weoffer from '../../components/weoffer/Weoffer';
import Aboutus from './../../components/aboutus/Aboutus';
import Header from './../../components/header/Header';

const Home = () => {
    return ( 
        <div className='home'>
        <Header />
        <Aboutus />
        <Weoffer />
        </div>
     );
}
 
export default Home;