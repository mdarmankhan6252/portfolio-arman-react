
const Client = () => {
    return (
        <div className="mt-16">
            <div className="max-w-6xl mx-auto space-y-5">
            <h1 className="text-4xl text-blue-950 font-semibold playWrite">What my client’s say</h1> 
            <p className="text-xl font-light">That off his nut the bee's knees on your bike mate tinkety tonk old.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border px-4 py-6 bg-blue-50 duration-500 hover:shadow-blue-300 hover:shadow-[0px_0px_4px_0px]">
                <p className="leading-8 text-justify text-[#6c6868] font-light">"Working with <span className="text-blue-500 font-semibold">MD Arman Khan</span> was a fantastic experience. They transformed our vision into a stunning and functional web application with their React.js expertise. Highly recommended!"</p>
                <h4 className="text-blue-950 font-semibold text-xl py-2">Jhon Deck</h4>
                <p>CEO, ForTech IT</p>
            </div>
            <div className="border px-4 py-6 bg-purple-50 duration-500 hover:shadow-pink-300 hover:shadow-[0px_0px_4px_0px]">
                <p className="leading-8 text-justify text-[#6c6868] font-light"><span className="text-blue-500 font-semibold">MD Arman Khan</span> delivered exceptional quality and attention to detail on our project. Their proficiency in React.js ensured a smooth and responsive user experience..</p>
                <h4 className="text-blue-950 font-semibold text-xl py-2">Jane Smith,</h4>
                <p>Web Solutions Inc.</p>
            </div>
            <div className="border px-4 py-6 bg-yellow-50 duration-500 hover:shadow-yellow-300 hover:shadow-[0px_0px_4px_0px]">
                <p className="leading-8 text-justify text-[#6c6868] font-light">We were impressed with <span className="text-blue-500 font-semibold">MD Arman Khan's</span> ability to handle complex requirements and deliver a robust web solution. Their knowledge of React.js and dedication to the project made all the difference.</p>
                <h4 className="text-blue-950 font-semibold text-xl py-2">Michael Brown</h4>
                <p>CTO, Creative Coders</p>
            </div>
            </div>
            
            </div>
            
        </div>
    );
};

export default Client;