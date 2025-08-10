import React from 'react';
import reactimg from '../../assets/react.png'
import javascriptimg from '../../assets/javascript.png';
import mongodb from '../../assets/mongodb.png';
import expressimg from '../../assets/expressjs.png';
import htmlimg from '../../assets/html5.png';
import tailwind from '../../assets/tailwind css.png';
import node from '../../assets/nodejs.png';
import daisyui from '../../assets/daisyui.jpeg';
import firebaseimg from '../../assets/firebase.png';
import { Link } from 'react-router';






const TechnologyUsed = () => {


    return (
        <div className='mt-30 text-center mb-16 bg-[#dedcff] p-8 ' >

            <h2 className='text-5xl font-bold text-black' >   Technology Used In This Platform</h2>
            
            <div className='grid grid-cols-1'>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-14'  >
                    <div className='border-2 p-3 flex flex-col rounded-xl '>

                        <h2 className='text-2xl text-blue-700 font-bold'>JavaScript</h2>
                        <img className='py-1.5' src={javascriptimg} alt="" />
                        <p className='font-bold text-black'>JavaScript is a text-based scripting language or programming language used on both the server-side and client-side to create engaging website elements, fully featured web applications, CLI applications and even web servers. In short, JavaScript is extremely versatile. </p>
                        <Link className='btn btn-secondary py-1 mt-auto' to={'https://en.wikipedia.org/wiki/JavaScript'} >See More</Link>
                    </div>
                    <div className='border-2 p-3 flex flex-col rounded-xl '>

                        <h2 className='text-2xl text-blue-700 font-bold'>Reactjs</h2>
                        <img className='py-1.5' src={reactimg} alt="" />
                        <p className='font-bold text-black'>React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript..</p>
                        <Link className='btn btn-secondary py-1 mt-auto' to={'https://react.dev/'} >See More</Link>
                    </div>
                    <div className='border-2 p-3 flex flex-col rounded-xl'>

                        <h2 className='text-2xl text-blue-700 font-bold'>Tailwind CSS</h2>
                        <img className='py-1.5 ' src={tailwind} alt="" />
                        <p className='font-bold text-black  '>Tailwind CSS is an open-source framework used to style your website in HTML without external CSS..</p>
                        <Link className='btn btn-secondary py-1 mt-auto' to={'https://tailwindcss.com/'} >See More</Link>
                    </div>
                    <div className='border-2 p-3 flex flex-col rounded-xl'>

                        <h2 className='text-2xl text-blue-700 font-bold'>DaisyUI</h2>
                        <img className='py-1.5' src={daisyui} alt="" />
                        <p className='font-bold text-black'>  daisyUIis a component library for Tailwind CSS. While Tailwind CSS provides utility classes for each CSS rule, daisyUI provides additional component class names to Tailwind CSS to make it faster and easier to build web pages</p>
                        <Link className='btn btn-secondary py-1 mt-auto' to={'https://daisyui.com/'}  >See More</Link>
                    </div>
                    <div className='border-2 p-3 flex flex-col rounded-xl'>

                        <h2 className='text-2xl text-blue-700 font-bold'>Firebase</h2>
                        <img className='py-1.5' src={firebaseimg} alt="" />
                        <p className='font-bold text-black'>Firebase for Apps — Leverage Firebase's GenAI capabilities to accelerate your app and business development. Firebase helps you make your app the best it can be with tools for the entire journey.</p>
                        <Link className='btn btn-secondary py-1 mt-auto' to={'https://firebase.google.com/'}  >See More</Link>
                    </div>
                   
                    <div className='border-2 p-3 flex flex-col rounded-xl'>

                        <h2 className='text-2xl text-blue-700 font-bold'>MongoDB</h2>
                        <img className='py-1.5 mt-auto mb-auto' src={mongodb} alt="" />
                        <p className='font-bold text-black mt-auto mb-auto'> MongoDB is a popular NoSQL database used for storing structured, semistructured, and unstructured data.</p>
                        <Link className='btn btn-secondary py-1 mt-auto' to={'https://www.mongodb.com/'} >See More</Link>
                    </div>
                    <div className='border-2 p-3 flex flex-col rounded-xl'>

                        <h2 className='text-2xl text-blue-700 font-bold'>NodeJS</h2>
                        <img className='py-1.5 mt-auto mb-auto' src={node} alt="" />
                        <p className='font-bold text-black mt-auto mb-auto'> Node.js lets developers use JavaScript to write command line tools and for server-side scripting. </p>
                        <Link className='btn btn-secondary py-1 mt-auto' to={'https://nodejs.org/en'} >See More</Link>
                    </div>
                    <div className='border-2 p-3 flex flex-col rounded-xl'>

                        <h2 className='text-2xl text-blue-700 font-bold'>HTML5</h2>
                        <img className='py-1.5 mt-auto mb-auto' src={htmlimg} alt="" />
                        <p className='font-bold text-black mt-auto mb-auto'>  HTML5 (Hypertext Markup Language 5) is a markup language used for structuring and presenting hypertext documents on the World Wide Web.</p>
                        <Link className='btn btn-secondary py-1 mt-auto' to={'https://en.wikipedia.org/wiki/HTML5'} >See More</Link>
                    </div>
                    <div className='border-2 p-3 flex flex-col rounded-xl'>

                        <h2 className='text-2xl text-blue-700 font-bold'>Express JS</h2>
                        <img className='py-1.5 mt-auto mb-auto' src={expressimg} alt="" />
                        <p className='font-bold text-black mt-auto mb-auto'>  Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
                        <Link className='btn btn-secondary py-1 mt-auto' to={'https://expressjs.com/'} >See More</Link>
                    </div>
                    
                    
                </div>
            </div>
        </div>

    );
};

export default TechnologyUsed;