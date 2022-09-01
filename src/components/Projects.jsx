import React from "react";
import LogoReels from '../assets/portfolio/Reels.jpg'
import LogoExcel from '../assets/portfolio/Excel.png'
import LogoToDo from '../assets/portfolio/jira.png'
import LogoCam from '../assets/portfolio/Camera.jpg'
import Logoev from '../assets/portfolio/Logoev.jpg'

const Project = () => {
  const projects = [
    {
      id:1,
      src: Logoev,
      demo: 'https://major-project-neon.vercel.app/majorproject/index.html' ,
      git: 'https://github.com/RitvikArorarara/House-Pricing-Model',
    },
    {
      id:2,
      src: LogoReels,
      demo: 'https://ritvik-reels.netlify.app/login',
      git: 'https://github.com/RitvikArorarara/Reels-App',
    },
    {
      id:3,
      src: LogoCam,
      demo: 'https://ritvik-cameraapp.netlify.app/',
      git: 'https://github.com/RitvikArorarara/Camera-App',
    },
    {
      id:4,
      src: LogoExcel,
      demo: 'https://ritvik-excelclone.netlify.app/',
      git: 'https://github.com/RitvikArorarara/Excel-Clone',
    },
    {
      id:5,
      src: LogoToDo,
      demo: 'https://ritvik-jiraclone.netlify.app/',
      git: 'https://github.com/RitvikArorarara/Jira-App',
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold mb-6 inline border-b-4 p-2 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src,demo,git }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                  <button 
                  
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                   Demo
                  </button>
                
                  <button
                   
                   className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project