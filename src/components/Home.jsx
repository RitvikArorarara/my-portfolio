import React from 'react'
import HeroImage from '../assets/Image.jpg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name="Home" className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">

    <div className= "max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white ">Ritvik Arora</h2>
            <p className=" text-gray-500 py-4 max-w-md ">
              Here you can find about the work I have done throughout my undergraduate degree and the projects I have worked on.
            </p>
            <div>
                <Link to="Projects" className="group text-white w-fit px-6 py-3 my-2 
                flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Projects
                    <span className="group-hover:rotate-90 duration-300">    
                        <MdOutlineKeyboardArrowRight size={25} className= "m1-1"/>
                    </span>
                </Link>
            </div>
        </div>
            <div>
                 <img src={HeroImage} alt="my profile" className="rounded-3xl mx-auto w-2/3 md:w-75% " />
            </div>
        </div>
    </div>
    
  );
};

export default Home