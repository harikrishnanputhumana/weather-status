import React from 'react'
import Footer from '../footer/Footer';
import Details from './Details';

import './Home.css';


function Home() {


    return (
        <div className='home'>
            <Details/>
            <Footer/>
        </div>
    )
}

export default Home