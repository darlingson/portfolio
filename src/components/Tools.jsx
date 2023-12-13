function Tools() {
    return (<>
        <h1>Tools</h1>
        <hr class="hr hr-blurry bg-blue-500 p-1" />
        <div id="tools" className="container grid-cols-3 gap-2 flex justify-center">
            <div className=" bg-sky-300 hover:bg-sky-700 ">
                <h3>I know the following Languages</h3>
                <ul className ="list-group">
                    <li className ="list-group-item">Java</li>
                    <li className ="list-group-item">Python</li>
                    <li className ="list-group-item">JavaScript</li>
                    <li className ="list-group-item">GO</li>
                    <li className ="list-group-item">Kotling</li>
                    <li className ="list-group-item">Dart</li>
                </ul>
            </div>
            <div className=" bg-sky-300 hover:bg-sky-700 ">
                <h3>I know the following Frameworks and Libraries</h3>
                <ul className ="list-group">
                    <li className ="list-group-item hover:bg-sky-100 ">React</li>
                    <li className ="list-group-item">Laravel</li>
                    <li className ="list-group-item">Django</li>
                    <li className ="list-group-item">Flask</li>
                    <li className ="list-group-item">Flutter</li>
                </ul>
            </div>
            <div className=" bg-sky-300 hover:bg-sky-700 ">
                <h3>I know the following Tools</h3>
                <ul className ="list-group">
                    <li className ="list-group-item">Git/Github</li>
                    <li className ="list-group-item">MySQL/MariaDB</li>
                    <li className ="list-group-item">Firebase</li>
                </ul>
            </div>
        </div>
    </>);
}
export default Tools;