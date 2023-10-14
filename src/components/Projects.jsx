function Projects(){
    return(<>
        <h1>Projects</h1>
        <div className="container grid-container">
            <div className="grid-item">
                <ProjectTitle title="Text to Chichewa Sign Language Translator"/>
                <ProjectDesc desc="This is a Translator which converts text to chichewa sign language"/>
            </div>
            <div className="grid-item">
                <ProjectTitle title="Takulandilani App"/>
                <ProjectDesc desc="App built with purpose of the helping users find information about Malawian Tourism. The app has a list of places to visit, accomodation and transportation"/>
            </div>
            <div className="grid-item">
                <ProjectTitle title="Chikulunga Analytics"/>
                <ProjectDesc desc="App built as part of the data science learning journey. Its mainly showing how malawian football is going in the Super league of Malawi."/>
            </div>
            <div className="grid-item">
                <ProjectTitle title="MUBAS Past Papers Repository"/>
                <ProjectDesc desc="A project I worked on for my final year project. The project is a web portal, where students and teachers can access past papers"/>
            </div>
        </div>
    </>);
}
export default Projects;
function ProjectTitle(props){
    return(<>
        <h3>{props.title}</h3>
    </>);
}
function ProjectDesc(props){
    return(<>
        <p>{props.desc}</p>
    </>);
}