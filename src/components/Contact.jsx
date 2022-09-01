import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className="w-full h-screen bg-gradient-to-b
    from-black to-gray-800 p-4 text-white " >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 p-2 border-gray-500 ">Contact</p>
                <p className="py-6">Please submit the form to get in touch.</p>
            </div>

            <div className="flex justify-center items-center" >
                <form action="https://getform.io/f/9bfb011f-38d2-4227-99f3-cc31ed44df32"
                className="flex flex-col w-full md:w-1/2" method="POST"
                >
                    <input type="text" name="name" placeholder="Name"
                    className="p-2 bg-transparent border-2 rounded-md text-white
                     focus:outline-none"
                    />
                    <input type="text" name="email" placeholder="E-mail"
                    className="my-4 p-2 bg-transparent border-2 rounded-md text-white
                     focus:outline-none"
                    />
                    <textarea name="message" rows="10" 
                    className="p-2 bg-transparent border-2 rounded-md 
                    text-white focus:outline-none" placeholder="Type here"
                    ></textarea>
                    <button className="text-white bg-gradient-to-b from-cyan-500
                    to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md
                    hover:scale-110 duration-300" >Let's talk</button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Contact