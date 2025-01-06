import React from 'react'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import css from '../assets/css.png'
import bootstrap from '../assets/bootstrap.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import dsa from '../assets/dsa.png'
import sql from '../assets/sql.png'
import MUI from '../assets/MUI.jpg'
import MSSQL from '../assets/MSSQL.png'
import TS from '../assets/TS.png'

const Skills = () => {

    const technologies = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: reactImage,
            title: 'ReactJs',
            style: 'shadow-blue-400',
        },
        {
            id: 5,
            src: java,
            title: 'JAVA',
            style: 'shadow-orange-900',
        },
        {
            id: 6,
            src: dsa,
            title: 'DSA',
            style: 'shadow-gray-500',
        },
        {
            id: 7,
            src: python,
            title: 'Python',
            style: 'shadow-white',
        },
        {
            id: 8,
            src: sql,
            title: 'MYSQL',
            style: 'shadow-cyan-800',
        },
        {
            id: 9,
            src: bootstrap,
            title: 'BootStrap',
            style: 'shadow-violet-700',
        },
        {
            id: 10,
            src: TS,
            title: 'TypeScript',
            style: 'shadow-white',
        },
        {
            id: 11,
            src: MSSQL,
            title: 'MSSQL',
            style: 'shadow-cyan-800',
        },
        {
            id: 12,
            src: MUI,
            title: 'MUI',
            style: 'shadow-violet-700',
        },
    ]

    return (
        <div name="Skills"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black" >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col 
        justify-center w-full h-full text-white" >
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills</p>
                    <p className="py-6">These are the technologies I know about.</p>
                </div>
                <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 
            text-center py-8 px-12 sm:px-0 " >
                {
                    technologies.map(( { id,src,title,style } )=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
                        <img src={src} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">{title}</p>
                    </div>
                    ) )
                }
                </div>
            </div>
        </div>
    )
}

export default Skills