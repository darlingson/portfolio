function Projects(){
    return(<>
    <div className="mx-auto">
<h1 class="">Projects</h1>
<hr class="border-t-2 border-blue-500 my-2" />
<div id="projects" class="container mx-auto grid grid-cols-3 gap-2">
  <div class="bg-sky-300 hover:bg-sky-700 border border-gray-200 p-2">
    <h3 class="font-bold">Text to Chichewa Sign Language Translator</h3>
    <p><a href="http://text-malawisign.000webhostapp.com/view/home.html" class="text-blue-500 hover:underline">Project Link</a></p>
    <p>This is a Translator which converts text to chichewa sign language</p>
  </div>
  <div class="bg-sky-300 hover:bg-sky-700 border border-gray-200 p-2">
    <h3 class="font-bold">Takulandilani App</h3>
    <p>App built with purpose of the helping users find information about Malawian Tourism. The app has a list of places to visit, accomodation and transportation</p>
  </div>
  <div class="bg-sky-300 hover:bg-sky-700 border border-gray-200 p-2">
    <h3 class="font-bold">Chikulunga Analytics</h3>
    <p>App built as part of the data science learning journey. Its mainly showing how malawian football is going in the Super league of Malawi.</p>
  </div>
  <div class="bg-sky-300 hover:bg-sky-700 border border-gray-200 p-2">
    <h3 class="font-bold">MUBAS Past Papers Repository</h3>
    <p>A project I worked on for my final year project. The project is a web portal, where students and teachers can access past papers</p>
  </div>
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
        <p className="rose-500"><a href={props.link} className="text-rose-500 hover:bg-rose-700">Check it out</a></p>
    </>);
}