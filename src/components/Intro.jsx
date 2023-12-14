import React from 'react';
import './Intro.css'; // make sure to import the CSS file

const Intro = (params) => {
    return (
        <div id="intro" className="container mx-auto flex">
            <div className="w-1/2">
                <img className="h-auto max-w-full" src="/12511668-kg.jpg" alt="Darlingson Makuwila"/>
            </div>
            <div className="w-1/2 flex items-center">
                <div className="typewriter">
                    <p>Hello there! I’m Darlingson Makuwila. In the tech world, you’ll find me wearing three hats - one of a System Developer, another of a FullStack Web Developer, and the third of an App Developer. I love diving into systems, untangling complexities, and creating solutions that make a difference.</p>
                </div>
            </div>
        </div>
    );
};

export default Intro;
