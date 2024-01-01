import React from 'react';
import Typewriter from 'typewriter-effect';

const Intro = () => {
    return (
        <div id="intro" className="container mx-auto flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 pt-5">
                <img className="h-auto max-w-full" src="/12511668-kg.jpg" alt="Darlingson Makuwila"/>
            </div>
            <div className="w-full md:w-1/2 flex items-center">
                <Typewriter
                    options={{
                        strings: ["Hello there! I’m Darlingson Makuwila. In the tech world, you’ll find me wearing three hats - one of a System Developer, another of a FullStack Web Developer, and the third of an App Developer. I love diving into systems, untangling complexities, and creating solutions that make a difference."],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </div>
    );
};

export default Intro;
