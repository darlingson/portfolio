function Tools() {
    return (<>
    <div className="container mx-auto">
      <h1>Tools</h1>
      <hr class="border-t-2 border-blue-500 my-2" />
      <div id="tools" class=" my-2 container grid grid-cols-3 gap-2 justify-center">
        <div class="bg-sky-300 hover:bg-sky-700 border border-gray-200 w-full p-2">
          <h3>I know the following Languages</h3>
            <ul class="list-none">
              <li class="border border-gray-200 p-2">Java</li>
              <li class="border border-gray-200 p-2">Python</li>
              <li class="border border-gray-200 p-2">JavaScript</li>
              <li class="border border-gray-200 p-2">GO</li>
              <li class="border border-gray-200 p-2">Kotlin</li>
              <li class="border border-gray-200 p-2">Dart</li>
            </ul>
        </div>
      <div class="bg-sky-300 hover:bg-sky-700 border border-gray-200 w-full">
        <h3>I know the following Frameworks and Libraries</h3>
        <ul class="list-none">
          <li class="border border-gray-200 p-2">React</li>
          <li class="border border-gray-200 p-2">Laravel</li>
          <li class="border border-gray-200 p-2">Django</li>
          <li class="border border-gray-200 p-2">Flask</li>
          <li class="border border-gray-200 p-2">Flutter</li>
        </ul>
      </div>
      <div class="bg-sky-300 hover:bg-sky-700 border border-gray-200 w-full">
        <h3>I know the following Tools</h3>
        <ul class="list-none">
          <li class="border border-gray-200 p-2">Git/Github</li>
          <li class="border border-gray-200 p-2">MySQL/MariaDB</li>
          <li class="border border-gray-200 p-2">Firebase</li>
        </ul>
      </div>
    </div>
  </div>
    </>);
}
export default Tools;