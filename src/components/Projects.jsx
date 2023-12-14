import React from 'react';

function Projects() {
    return (
        <div className="mx-auto">
            <h1>Projects</h1>
            <hr className="border-t-2 border-blue-500 my-2" />
            <div id="projects" className="container grid grid-cols-1 md:grid-cols-3 gap-2">
                <Project title="Text to Chichewa Sign Language Translator" desc="This is a Translator which converts text to chichewa sign language" link="http://text-malawisign.000webhostapp.com/view/home.html" />
                <Project title="Takulandilani App" desc="App built with purpose of the helping users find information about Malawian Tourism. The app has a list of places to visit, accomodation and transportation" />
                <Project title="Chikulunga Analytics" desc="App built as part of the data science learning journey. Its mainly showing how malawian football is going in the Super league of Malawi." />
                <Project title="MUBAS Past Papers Repository" desc="A project I worked on for my final year project. The project is a web portal, where students and teachers can access past papers" />
            </div>
        </div>
    );
}

function Project(props) {
    return (
        <div className="bg-sky-300 hover:bg-sky-700 border border-gray-200 w-full p-2">
            <ProjectTitle title={props.title} />
            <ProjectDesc desc={props.desc} link={props.link} />
        </div>
    );
}

function ProjectTitle(props) {
    return (
        <h3 className="font-bold">{props.title}</h3>
    );
}

function ProjectDesc(props) {
    return (
        <>
            <p>{props.desc}</p>
            <p className="rose-500"><a href={props.link} className="text-rose-500 hover:bg-rose-700">Check it out</a></p>
        </>
    );
}

export default Projects;
