import React from 'react';
import Particle from '../../Component/Particle';
import About from './About';
import Portfolio from './Portfolio';
import Portfolios from './Portfolios';
import Skills from './Skills';

const Home = () => {
    return (
        <>
            <Particle />
            <About></About>
            <Portfolios></Portfolios>
            <Skills></Skills>
        </>
    );
};

export default Home;