import { Helmet } from 'react-helmet';
import './About.css'
import user from '../../assets/portfolio_img/user.png'
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineDownload } from 'react-icons/md';
import { useState } from 'react';
import { PiCertificateLight } from 'react-icons/pi';
import Skill from './Skill';



const About = () => {

    const [experience, setExperience] = useState(true);
    
    return (
        <div>
            <Helmet>
                <title>About - Arman</title>
            </Helmet>

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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis enim illo repellat veritatis, nobis amet placeat ipsa impedit ad fuga!</p>
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
                        <p className='text-[#797373] leading-9'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.</p>
                    </div>
                    <div className='space-y-4'>
                        <div className='border p-4 text-xl font-semibold'>
                            2021 - 2022
                        </div>
                        <h1 className='sm:text-4xl font-bold text-2xl'>Higher School Certificate</h1>
                        <h4 className='text-xl font-light playWrite'>ChandMia Mollah Degree College</h4>
                        <p className='text-[#797373] leading-9'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.</p>
                    </div>
                    <div className='space-y-4'>
                        <div className='border p-4 text-xl font-semibold'>
                            2015 - 2020
                        </div>
                        <h1 className='sm:text-4xl font-bold text-2xl'>Secondary School Certificate</h1>
                        <h4 className='text-xl font-light playWrite'>Taymos Begum High School</h4>
                        <p className='text-[#797373] leading-9'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.</p>
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
                        <p className='text-[#797373] leading-9'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.</p>
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
                        <p className='text-[#797373] leading-9'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.</p>
                    </div>
                    <div className='space-y-4'>
                        <div className='border p-4 text-xl font-semibold'>
                            2020
                        </div>
                        <h1 className='sm:text-4xl font-bold text-2xl'>MS Office</h1>
                        <h4 className='text-xl font-light playWrite'>Computer City Telecom</h4>
                        <p className='text-[#797373] leading-9'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.</p>
                    </div>
                </div>

            </div>

            {/* skills section */}
            <Skill/>
        </div>
    );
};

export default About;