import { Link } from "react-router-dom";
import arman from '../../assets/arman.png'
import { MdMarkChatRead, MdOutlineDownload } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import BgAni from "./BgAni";

const Header = () => {

    return (
        <header className="flex items-center justify-between flex-col sm:flex-row *:mt-10 *:sm:mt-0 border px-2">

            <div className="basis-[50%] space-y-6">
                <h1 className="text-5xl font-semibold  leading-[58px] playFair">hey, I'm<br /><span className="text-blue-500 ">React JS Developer</span></h1>
                <h2 className="text-xl font-light playWrite">A Creative Web Developer From Bangladesh</h2>
                <p className="text-[#7e7d85]">Hi,I am a passionate React.js developer with 2 years of experience building dynamic and responsive web applications. I have a strong foundation in JavaScript</p>
                <div className="flex items-center gap-3 ">
                    <a href="./resume.pdf" download='resume.pdf' className="text-xl font-medium py-2.5 px-4 border-2 border-white bg-blue-500 text-white rounded-lg hover:border-blue-500 hover:text-blue-500 hover:bg-transparent duration-500 hover:shadow-[0px_0px_4px_0.5px] hover:shadow-blue-500 flex items-center space-x-2" >
                        <span>Download CV</span>
                        <MdOutlineDownload className="text-2xl -mb-2" />
                    </a>
                    <Link to='https://web.facebook.com/profile.php?id=100021868964533' className="text-xl font-medium py-2.5 px-4 border-2 border-white bg-blue-500 text-white rounded-lg hover:border-blue-500 hover:text-blue-500 hover:bg-transparent duration-500 hover:shadow-[0px_0px_4px_0.5px] hover:shadow-blue-500 flex items-center space-x-2 ">
                        <span>Let's Chat</span>
                        <MdMarkChatRead />
                    </Link>
                </div>
                <div className="flex items-center space-x-4 pl-2 *:text-3xl text-blue-500">
                    <Link className="bg-green-500 text-white rounded-full" to='https://www.fiverr.com/mdarmankhan6252' target="_blank"><TbBrandFiverr className="p-1" /></Link>
                    <Link className="hover:text-green-500" to='https://www.facebook.com/profile.php?id=100021868964533' target="_blank"><FaFacebook /></Link>
                    <Link className="hover:text-green-500 text-[#0077B5]" to='https://www.linkedin.com/in/mdarmankhan6252/' target="_blank"><FaLinkedin /></Link>

                    <Link className="hover:text-green-500 text-[#171515]" to='https://www.github.com/mdarmankhan6252' target="_blank"><FaGithub /></Link>
                </div>
            </div>
            <div className="basis-[46%] flex justify-end">
                <img src={arman} alt="" className="max-w-sm z-10" />
            </div>
            <BgAni/>
        </header>
    );
};

export default Header;