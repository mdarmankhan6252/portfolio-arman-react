import { Helmet } from 'react-helmet';
import './About.css'
import user from '../../assets/portfolio_img/user.png'
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineDownload } from 'react-icons/md';
import { useState } from 'react';
import { PiCertificateLight } from 'react-icons/pi';
import Skill from './Skill';
import BgAni from '../Home/BgAni';



const About = () => {

    const [experience, setExperience] = useState(true);
    
    return (
        <div>
            <Helmet>
                <title>About - Arman</title>
            </Helmet>
            <BgAni/>

            {/* about banner */}

            <div className='about'>
                <h1 className='playWrite text-white font-semibold text-3xl sm:text-4xl lg:text-5xl'>About Me</h1>
            </div>


            {/* about details */}

            <div className='max-w-6xl mx-auto flex items-center justify-between py-16'>
                <div className='basis-[48%] border rounded-full cRadial max-w-xl'>
                    <img src={user} alt="" className='w-full rounded-full  border-blue-700 border-1' />
                </div>
                <div className='basis-[48%] space-y-4'>
                    <h1 className='text-3xl lg:text-5xl font-semibold playWrite'>I'm <span className='text-blue-600'>MD Arman Khan</span></h1>
                    <h3 className='text-2xl font-light playFair'>React JS Developer</h3>
                    <p>I am a passionate React.js front-end web developer with over a year of experience in creating responsive and dynamic web applications. I specialize in building user-friendly interfaces and ensuring seamless performance for each project.</p>
                    <div className='flex items-center space-x-2 text-lg sm:text-xl'>
                        <BsWhatsapp className='text-green-500' />
                        <p>+880 1875-778050</p>
                    </div>
                    <a href="../../../public/resume.pdf" download='../../../public/resume.pdf' className="text-xl font-medium py-2.5 px-4 border-2 border-white bg-blue-500 text-white rounded-lg hover:border-blue-500 hover:text-blue-500 hover:bg-transparent duration-500 hover:shadow-[0px_0px_4px_0.5px] hover:shadow-blue-500 flex items-center space-x-2 w-48 text-center" >
                        <span>Download CV</span>
                        <MdOutlineDownload className="text-2xl -mb-2" />
                    </a>
                </div>
            </div>

            {/* education and experience */}

            <div className='max-w-6xl mx-auto'>
                <div className='text-center py-10 flex items-center justify-center space-x-10 *:border *:px-6 *:py-5 border my-6'>
                    <h1 onClick={() => setExperience(true)} className={`text-3xl sm:text-4xl playWrite cursor-pointer ${experience && 'bg-blue-100'}`}>Education</h1> 
                    <h1 onClick={() => setExperience(false)} className={`text-3xl sm:text-4xl playWrite cursor-pointer ${!experience && 'bg-blue-100'}`}>Experience</h1>
                </div>
                {/* education */}
                <div className={`*:pb-16 ${experience ? '' : 'hidden'}`}>

                    <div className='space-y-4'>
                        <div className='border p-4 text-xl font-semibold'>
                            2023 - running
                        </div>
                        <h1 className='sm:text-4xl font-bold text-2xl'>Bachelor of Business Administration</h1>
                        <h4 className='text-xl font-light playWrite'>University of Barishal</h4>
                        <p className='text-[#797373] leading-9'>Hi there! I am currently pursuing a Bachelor of Business Administration (BBA) in the Department of Management Studies at the University of Barishal. Alongside my academic journey, I am also a passionate React.js front-end web developer with over a year of experience. I specialize in creating responsive and dynamic web applications, seamlessly blending my technical skills with my management studies to bring a unique perspective to every project I undertake. Let's connect and see how I can help bring your vision to life!</p>
                    </div>
                    <div className='space-y-4'>
                        <div className='border p-4 text-xl font-semibold'>
                            2021 - 2022
                        </div>
                        <h1 className='sm:text-4xl font-bold text-2xl'>Higher School Certificate</h1>
                        <h4 className='text-xl font-light playWrite'>ChandMia Mollah Degree College</h4>
                        <p className='text-[#797373] leading-9'>I passed my HSC from ChandMia Mollah Degree College, achieving a GPA of 4.92 in the commerce group. During this time, I was dedicated to my studies and laid a strong foundation in commerce.</p>
                    </div>
                    <div className='space-y-4'>
                        <div className='border p-4 text-xl font-semibold'>
                            2015 - 2020
                        </div>
                        <h1 className='sm:text-4xl font-bold text-2xl'>Secondary School Certificate</h1>
                        <h4 className='text-xl font-light playWrite'>Taymos Begum High School</h4>
                        <p className='text-[#797373] leading-9'>I passed my SSC from Taymos Begum High School. During my time there, I built a strong academic foundation and developed a keen interest in commerce.</p>
                    </div>
                </div>
                {/* experience */}
                <div className={`*:pb-16 ${experience ? 'hidden' : ''}`}>

                    <div className='space-y-4'>
                        <div className='border p-4 text-xl font-semibold'>
                            2023 - running
                        </div>
                        <h1 className='sm:text-4xl font-bold text-2xl'>Junior Web Developer</h1>
                        <h4 className='text-xl font-light playWrite'>Programming-hero</h4>
                        <p className='text-[#797373] leading-9'>I am a junior front-end web developer with over a year of experience in React.js, having completed an intensive 6-month course at Programming-hero. This training equipped me with a strong understanding of building interactive and responsive user interfaces. Alongside React.js, I have basic proficiency in back-end technologies such as Express and Node.js, as well as database management with MongoDB. My goal is to leverage these skills to create compelling web applications that combine seamless functionality with elegant design.</p>
                        <div className='flex justify-end'>
                        <a href="../../../public/resume.pdf" download='../../../public/resume.pdf' className="text-xl font-medium py-2.5 px-4 border-2 border-white bg-blue-500 text-white rounded-lg hover:border-blue-500 hover:text-blue-500 hover:bg-transparent duration-500 hover:shadow-[0px_0px_4px_0.5px] hover:shadow-blue-500 flex items-center space-x-2 w-52  text-center" >
                        <span>See Certificate</span>
                        <PiCertificateLight className="text-2xl -mb-2" />
                    </a>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className='border p-4 text-xl font-semibold'>
                            2021 - 2022
                        </div>
                        <h1 className='sm:text-4xl font-bold text-2xl'>Web Design</h1>
                        <h4 className='text-xl font-light playWrite'>Youtube, Google and others resources</h4>
                        <p className='text-[#797373] leading-9'>I have honed my web design skills through self-directed learning on platforms like YouTube, Google, and ChatGPT, among others. This eclectic approach has allowed me to master various aspects of web design, from user experience principles to front-end development techniques. I enjoy exploring new tools and methodologies, continually expanding my knowledge to create visually appealing and functional websites.</p>
                    </div>
                    <div className='space-y-4'>
                        <div className='border p-4 text-xl font-semibold'>
                            2020
                        </div>
                        <h1 className='sm:text-4xl font-bold text-2xl'>MS Office</h1>
                        <h4 className='text-xl font-light playWrite'>Computer City Telecom</h4>
                        <p className='text-[#797373] leading-9'>I have completed a comprehensive 3-month course in MS Office from Computer City Telecom. This training has equipped me with proficiency in various Microsoft Office applications, including Word, Excel, and PowerPoint. I am adept at using these tools to enhance productivity and create professional documents, spreadsheets, and presentations.

</p>
                    </div>
                </div>

            </div>

            {/* skills section */}
            <Skill/>
        </div>
    );
};

export default About;