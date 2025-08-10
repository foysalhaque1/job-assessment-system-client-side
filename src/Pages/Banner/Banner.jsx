import React from 'react';

import { motion } from "motion/react"
import img1 from '../../assets/Cyan And Blue Colorful Illustrative Coding YouTube Thumbnail .png'
import img2 from '../../assets/Blue Modern Futuristic Top Programming Language Youtube Thumbnail.png'
import FeatureSection from './FeatureSection';
import Faq from './Faq';
import Faq2 from './Faq2';


const Banner = () => {
    return (
        <div>
            <div className="hero bg-[#dedcff] min-h-screen mt-30 max-w-full mx-auto ">
                <div className="hero-content  grid grid-cols-1 lg:grid-cols-2 ">

                    <div className='flex-1'>
                        {/* <motion.h1
                       animate={{rotate:180,
                        transition:{duration:4}
                       }}
                       className="text-5xl font-bold flex-1">Latest <motion.span
                       animate={{color:['#1cbb28','#ee3611'],transition:{duration:2,repeat:Infinity}}}
                       
                       >jobs</motion.span>  for you</motion.h1> */}
                        <motion.h1
                            initial={{ scale: 0 }}
                            animate={{ scale: 1, transition: { duration: 4 } }}
                            className="text-5xl font-bold">A website  <motion.span
                                animate={{ color: ['#1cbb28', '#ee3611', '#1139ee'], transition: { duration: 2, repeat: Infinity } }}

                            >that works</motion.span>, a team that collaborates</motion.h1>
                        <p className="py-6">
                            A web development group assignment typically involves students collaborating to create a website or web application.
                        </p>
                       
                    </div>
                    <div className='flex-1 '>

                        <motion.img

                            src={img1}
                            animate={{ y: [-50, 0, -50] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="md:max-w-xl max-w-2xs rounded-t-4xl border-s-8 shadow-2xl flex-1"
                        />
                        <motion.img

                            src={img2}
                            animate={{ x: [30, 50, -0],y: [-150]  } }
                            transition={{ duration: 10, repeat: Infinity }}
                            className="md:max-w-xl max-w-2xs rounded-t-4xl border-s-8 shadow-2xl flex-1"
                        />
                    </div>
                    
                </div>
            </div>
            <FeatureSection></FeatureSection>

            
            
            
        </div>
    );
};

export default Banner;