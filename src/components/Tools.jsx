import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tools = () => {
        useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="container mx-auto">
            <h1>Tools</h1>
            <hr className="border-t-2 border-blue-500 my-2" />
            <div id="tools" className="my-2 container grid grid-cols-1 md:grid-cols-3 gap-2 justify-center">
                <div data-aos="fade-right" className="bg-sky-300 hover:bg-sky-700 border border-gray-200 w-full p-2">
                    <h3>I know the following Languages</h3>
                    <ul className="list-none">
                        <li className="border border-gray-200 p-2">Java</li>
                        <li className="border border-gray-200 p-2">Python</li>
                        <li className="border border-gray-200 p-2">JavaScript</li>
                        <li className="border border-gray-200 p-2">GO</li>
                        <li className="border border-gray-200 p-2">Kotlin</li>
                        <li className="border border-gray-200 p-2">Dart</li>
                    </ul>
                </div>
                <div data-aos="fade-right" className="bg-sky-300 hover:bg-sky-700 border border-gray-200 w-full p-2">
                    <h3>I know the following Frameworks and Libraries</h3>
                    <ul className="list-none">
                        <li className="border border-gray-200 p-2">React</li>
                        <li className="border border-gray-200 p-2">Laravel</li>
                        <li className="border border-gray-200 p-2">Django</li>
                        <li className="border border-gray-200 p-2">Flask</li>
                        <li className="border border-gray-200 p-2">Flutter</li>
                    </ul>
                </div>
                <div data-aos="fade-right" className="bg-sky-300 hover:bg-sky-700 border border-gray-200 w-full p-2">
                    <h3>I know the following Tools</h3>
                    <ul className="list-none">
                        <li className="border border-gray-200 p-2">Git/Github</li>
                        <li className="border border-gray-200 p-2">MySQL/MariaDB</li>
                        <li className="border border-gray-200 p-2">Firebase</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tools;
