import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tools = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-white">Tools</h1>
            <hr className="border-t-2 border-gray-700 my-2" />
            <div id="tools" className="my-2 container grid grid-cols-1 md:grid-cols-3 gap-2 justify-center">
                <div data-aos="fade-right" className="bg-black hover:bg-gray-800 border border-gray-600 w-full p-2">
                    <h3 className="text-white">I know the following Languages</h3>
                    <ul className="list-none">
                        <li className="border border-gray-600 p-2 text-white">Java</li>
                        <li className="border border-gray-600 p-2 text-white">Python</li>
                        <li className="border border-gray-600 p-2 text-white">JavaScript</li>
                        <li className="border border-gray-600 p-2 text-white">GO</li>
                        <li className="border border-gray-600 p-2 text-white">Kotlin</li>
                        <li className="border border-gray-600 p-2 text-white">Dart</li>
                    </ul>
                </div>
                <div data-aos="fade-right" className="bg-black hover:bg-gray-800 border border-gray-600 w-full p-2">
                    <h3 className="text-white">I know the following Frameworks and Libraries</h3>
                    <ul className="list-none">
                        <li className="border border-gray-600 p-2 text-white">React</li>
                        <li className="border border-gray-600 p-2 text-white">Laravel</li>
                        <li className="border border-gray-600 p-2 text-white">Django</li>
                        <li className="border border-gray-600 p-2 text-white">Flask</li>
                        <li className="border border-gray-600 p-2 text-white">Flutter</li>
                    </ul>
                </div>
                <div data-aos="fade-right" className="bg-black hover:bg-gray-800 border border-gray-600 w-full p-2">
                    <h3 className="text-white">I know the following Tools</h3>
                    <ul className="list-none">
                        <li className="border border-gray-600 p-2 text-white">Git/Github</li>
                        <li className="border border-gray-600 p-2 text-white">MySQL/MariaDB</li>
                        <li className="border border-gray-600 p-2 text-white">Firebase</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tools;
