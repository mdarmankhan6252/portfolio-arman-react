import { Link } from "react-router-dom";
import arman from '../../assets/arman.png'
import { MdMarkChatRead, MdOutlineDownload } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import {motion} from "framer-motion"
import { TbBrandFiverr } from "react-icons/tb";

const Header = () => {

    return (
        <header className="flex items-center justify-between flex-col sm:flex-row *:mt-10 *:sm:mt-0 px-2">

            <div className="basis-[50%] space-y-6">
                <motion.h1 
                initial={{x:-100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{delay:0.2, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold  leading-[58px] playFair">hey, I'm a<br /><span className="text-blue-500 ">Front-end Developer</span></motion.h1>
                <motion.h2
                initial={{x:100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{delay:0.2, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
                 className="md:text-xl font-light playWrite">A Creative Web Developer From Bangladesh</motion.h2>
                <motion.p
                initial={{x:-100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{delay:0.2, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
                 className="text-[#7e7d85] text-[14px] sm:text-[16px]">Hey, I am MD Arman khan a front-end web developer with over a year of experience building dynamic and responsive web applications. I have a strong foundation in JavaScript, react.js, MongoDB, express.js & Node.js</motion.p>
                <motion.div
                initial={{x:100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{delay:0.2, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
                 className="flex items-center gap-3 ">
                    <Link target="_blank" to='https://drive.google.com/file/d/1CgyUfOgHKh5-LVqf6pBVUSFeCTVbKyHg/view?usp=sharing' href="./resume.pdf" download='resume.pdf' className="text-xl font-medium py-2.5 px-4 border-2 border-white bg-blue-500 text-white rounded-lg hover:border-blue-500 hover:text-blue-500 hover:bg-transparent duration-500 hover:shadow-[0px_0px_4px_0.5px] hover:shadow-blue-500 flex items-center space-x-2" >
                        <span>Download CV</span>
                        <MdOutlineDownload className="text-2xl -mb-2" />
                    </Link>
                    <Link to='/contact' className="text-xl font-medium py-2.5 px-4 border-2 border-white bg-blue-500 text-white rounded-lg hover:border-blue-500 hover:text-blue-500 hover:bg-transparent duration-500 hover:shadow-[0px_0px_4px_0.5px] hover:shadow-blue-500 flex items-center space-x-2 ">
                        <span>Let's Chat</span>
                        <MdMarkChatRead />
                    </Link>
                </motion.div>
                <motion.div
                initial={{x:-100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{delay:0.2, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
                 className="flex items-center space-x-4 pl-2 *:text-3xl text-blue-500">
                    <Link className="hover:text-green-500" to='https://www.facebook.com/profile.php?id=100021868964533' target="_blank"><FaFacebook /></Link>
                    <Link className="hover:text-green-500 text-[#0077B5]" to='https://www.linkedin.com/in/mdarmankhan6252/' target="_blank"><FaLinkedin /></Link>

                    <Link className="hover:text-green-500 text-[#171515]" to='https://www.github.com/mdarmankhan6252' target="_blank"><FaGithub /></Link>
                </motion.div>
            </div>
            <div className="basis-[46%] flex justify-end">
                <motion.img
                 initial={{x:100, opacity:0}}
                 animate={{x:0, opacity:1}}
                 transition={{delay:0.2, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
                 src={arman} alt="" className="max-w-sm z-10" />
            </div>
            {/* <BgAni/> */}
        </header>
    );
};

export default Header;