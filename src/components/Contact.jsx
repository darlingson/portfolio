import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="py-2 px-4 mx-auto max-w-screen-md bg-black text-white"> 
                <h2 className="mb-4 text-4xl font-extrabold text-center"> 
                    Contact Me 
                </h2> 
                <p className="mb-4 font-light text-left text-gray-500 sm:text-xl"> 
                    Wanna have a chat? Send me an email.
                </p> 
                <form action="#"> 
                    <div className="flex flex-row"> 
                        <div className="w-1/2 pr-2"> 
                            <label htmlFor="firstName" className="block my-2 text-left text-sm font-medium"> 
                                First Name 
                            </label> 
                            <input 
                                type="text" 
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                                placeholder="First Name"
                                required
                            /> 
                        </div> 
                        <div className="w-1/2 pl-2"> 
                            <label htmlFor="lastName" className="block my-2 text-left text-sm font-medium"> 
                                Last Name 
                            </label> 
                            <input 
                                type="text" 
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Last Name"
                            /> 
                        </div> 
                    </div> 
                    <div> 
                        <label htmlFor="email" className="block my-2 text-left text-sm font-medium"> 
                            Your email 
                        </label> 
                        <input 
                            type="email" 
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                            placeholder="Email" 
                            required 
                        /> 
                    </div> 
                    <div> 
                        <label htmlFor="subject" className="block my-2 text-left text-sm font-medium"> 
                            Subject 
                        </label> 
                        <input 
                            type="text" 
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                            placeholder="Subject..." 
                            required 
                        /> 
                    </div> 
                    <div> 
                        <label htmlFor="message" className="block my-2 text-left text-sm font-medium"> 
                            Your message 
                        </label> 
                        <textarea 
                            rows="6" 
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300" 
                            placeholder="Message..."
                        /> 
                    </div>
                    <button 
                        type="submit" 
                        className="mt-2 p-2 text-white rounded-lg border-green-600 bg-green-600 hover:scale-105"> 
                        Send message 
                    </button> 
                </form> 
            </div> 
        </>
    );
}

export default Contact;
