import React from 'react';
import Banner from './Banner/Banner';
import Faq2 from './Banner/Faq2';
import Faq from './Banner/Faq';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Faq2></Faq2>
            <div className='mt-4'>

                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;