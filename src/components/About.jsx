import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            About
          </p>
        </div>
        <p className="text-xl mt-2  ">
          My name is Ritvik Arora. I am a Electronics and Communication graduate
          from Guru Gobind Singh IndraPrastha University, Delhi. I am a web
          development enthusiast. I have done projects using technology such as
          HTML, CSS, JavaScript, ReactJs, BootStrap and tailwind. I am keen to
          learn many technologies and upskill myself. Apart from web development
          I have learnt Data Structures and algorithms. I believe that i can do
          easy to moderate questions.
        </p>
        <br />
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            Experience
          </p>
        </div>
        <div className="pb-8">
          <p className="text-4xl ml-6 font-bold inline border-b-4 border-gray-500 p-2">
            HCLTECH
          </p>
        </div>
        <div className="text-xl mt-2 ">
          <ul className="text-xl mt-2 ml-10">
            <li>
              Database Administration for large and complex databases in SQL
              Server 2022, 2019, 2016, SQL Server 2014.
            </li>
            <li>
              Day-to-day activity backup & restoring of databases, job activity
              monitoring, View backup history and manage log files.
            </li>
            <li>
              Managed the implementation of critical SQL patches and SSMS
              updates, resulting in a 99% reduction in system downtime and
              increasing database performance by 15%.
            </li>
            <li>Utilized expertise in Always On, Mirroring, and replication to configure database backup and restore from Cohesity third-party application.</li>
            <li>Extensively migrated and upgraded the databases.</li>
            <li>Managed database backups and restores for SQL Server high availability, ensuring a 99.9% success rate in data recovery.</li>
          </ul>
        </div>
        <br />
        <div className="pb-8 mt-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            Education
          </p>
        </div>
        <ol className="text-xl mt-2">
          <li>B.Tech : 8.2 CGPA </li>
          <li>12th : 78%</li>
          <div className="pb-8 mt-6">
            <li className="text-3xl font-bold inline border-b-4 border-gray-500 p-2">
              Certifications
            </li>
          </div>
          <ol className="mt-2">
            <li>Data Structures and Algorithms and Web Development : 2022 </li>
            <li>Introduction to Programming Using Python : 2019</li>
          </ol>
        </ol>
      </div>
    </div>
  );
};

export default About;
