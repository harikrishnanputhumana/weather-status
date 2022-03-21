import React from 'react'
import Details from './Details';

import './Home.css';

import Nav from './Nav';
function Home() {


    return (
        <div className='home'>
            <Nav />
            <Details/>
        </div>
    )
}

export default Home