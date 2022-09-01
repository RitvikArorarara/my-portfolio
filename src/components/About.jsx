import React from 'react'

const About = () => {
  return (
    <div name = "About" className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">About</p>
            </div>
            <p className="text-xl mt-2  ">
                My name is Ritvik Arora. I am a Electronics and Communication graduate from Guru Gobind Singh IndraPrastha University,
                Delhi. I am a web development enthusiast. I have done projects using technology such as HTML, CSS, JavaScript, ReactJs, 
                BootStrap and tailwind. I am keen to learn many technologies and upskill myself. Apart from web development I have learnt Data Structures and algorithms.
                I believe that i can do easy to moderate questions.
            </p>
            <br />
            <div className="pb-8 mt-2">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">Education</p>
            </div>
            <ol className="text-xl mt-2">
                <li>B.Tech : 8.2 CGPA </li>
                <li>12th : 78%</li>
                <div className="pb-8 mt-2">
                    <li className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">Certifications</li>
                </div>
            <ol className="text-xl mt-2">
                <li>Data Structures and Algorithms and Web Development : 2022 </li>
                <li>Introduction to Programming Using Python : 2019</li>
            </ol>
            </ol>
            
        </div>
    </div>
  )
}

export default About