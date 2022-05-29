import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import BonusSection from '../../components/BonusSection/BonusSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Cards></Cards>
            <BonusSection></BonusSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;