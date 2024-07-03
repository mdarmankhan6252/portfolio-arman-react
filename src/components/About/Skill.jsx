import { Link } from "react-router-dom";

const Skill = () => {
    return (
        <div className="max-w-6xl mx-auto ">
            <h1 className="text-4xl playWrite text-center pb-2">My Skills</h1>
            <h5 className="text-center text-xl font-light pt-2 pb-10">A React JS Front-end Web Developer</h5>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="space-y-4 basis-[48%]">
                    <h2 className="font-semibold text-lg">Professional Summary</h2>
                    <div className="text-[#816f6f]">
                    <p>Hi, I'm <Link target="_blank" to='https://www.facebook.com/profile.php?id=100021868964533'  className="text-blue-500 font-semibold">MD Arman Khan</Link>, a passionate React.js developer with 2 years of experience building dynamic and responsive web applications. I have a strong foundation in JavaScript</p>
                    <p className="pt-2">I specialize in creating interactive user interfaces and have a keen eye for detail. Over the past 2 years, I've worked on various projects that have honed my skills in modern web development technologies and frameworks.</p>
                    </div>

                </div>
                <div className="basis h-1/2 basis-[48%] space-y-4">
                    <div>
                        <span className="font-semibold text-gray-600">HTML</span>
                        <progress className="progress progress-info w-full" value="98" max="100"></progress>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-600">CSS</span>
                        <progress className="progress progress-info w-full" value="92" max="100"></progress>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-600">JavaScript</span>
                        <progress className="progress progress-info w-full" value="75" max="100"></progress>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-600">React JS</span>
                        <progress className="progress progress-info w-full" value="85" max="100"></progress>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-600">Tailwind CSS</span>
                        <progress className="progress progress-info w-full" value="95" max="100"></progress>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-600">Bootstrap</span>
                        <progress className="progress progress-info w-full" value="75" max="100"></progress>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-600">Git & GitHub</span>
                        <progress className="progress progress-info w-full" value="88" max="100"></progress>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-600">Firebase</span>
                        <progress className="progress progress-info w-full" value="90" max="100"></progress>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-600">Node JS</span>
                        <progress className="progress progress-info w-full" value="40" max="100"></progress>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-600">Express JS</span>
                        <progress className="progress progress-info w-full" value="40" max="100"></progress>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-600">MongoDB</span>
                        <progress className="progress progress-info w-full" value="60" max="100"></progress>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Skill;