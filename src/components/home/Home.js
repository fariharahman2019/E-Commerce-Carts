import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Banner from '../Dashboard/Banner';
import About from '../Dashboard/About';
import Portfolio from '../Dashboard/Portfolio';
import Clients from '../Dashboard/Clients';

const Home=()=>{
    return(

        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Portfolio></Portfolio>
            <Clients></Clients>
            <Footer></Footer>
        </div>
    );
}


export default Home;