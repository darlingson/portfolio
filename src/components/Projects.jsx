import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
    useEffect(() => {
        AOS.init({
            delay: 50,
            mirror: true,
            easing: 'ease'
        });
    }, []);

    return (
        <div className="mx-auto">
            <h1 className="text-white">Projects</h1>
            <hr className="border-t-2 border-gray-700 my-2" />
            <div id="projects" className="container grid grid-cols-1 md:grid-cols-3 gap-2">
                <Project data-aos="fade-left" title="Text to Chichewa Sign Language Translator" desc="This is a Translator which converts text to Chichewa sign language" link="http://text-malawisign.000webhostapp.com/view/home.html" />
                <Project data-aos="fade-left" title="Takulandilani App" desc="App built with the purpose of helping users find information about Malawian Tourism. The app has a list of places to visit, accommodation, and transportation" />
                <Project data-aos="fade-left" title="Chikulunga Analytics" desc="App built as part of the data science learning journey. It mainly shows how Malawian football is going in the Super League of Malawi." />
                <Project data-aos="fade-left" title="MUBAS Past Papers Repository" desc="A project I worked on for my final year project. The project is a web portal where students and teachers can access past papers" />
            </div>
        </div>
    );
}

function Project(props) {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        AOS.init();
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            data-aos="fade-right"
            className="relative bg-black hover:bg-gray-800 border border-gray-600 w-full p-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <ProjectTitle title={props.title} />
            <ProjectDesc desc={props.desc} link={props.link} />
            {isHovered && (
                <div className="absolute top-0 left-0 w-full">
                    {/* Separate container for the image with its own height */}
                    <img src="/chikulungaanalytics.jpg" alt="Project Image" className="w-full object-cover" style={{ height: '200px' }} />
                </div>
            )}
        </div>
    );
}

function ProjectTitle(props) {
    return <h3 className="font-bold text-white">{props.title}</h3>;
}

function ProjectDesc(props) {
    return (
        <>
            <p className="text-white">{props.desc}</p>
            <p className="rose-500">
                <a href={props.link} className="text-rose-500 hover:bg-rose-700">
                    Check it out
                </a>
            </p>
        </>
    );
}

export default Projects;
