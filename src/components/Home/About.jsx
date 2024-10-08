import { Link } from 'react-router-dom';
import img_1 from '../../assets/img_1.jpg'
import { BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
const About = () => {
    return (
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-x-2 flex-col sm:flex-row mt-10 px-2">
            
            <div className='basis-[42%]'>
                <img src={img_1} alt="" />
            </div>
            <div className='basis-[58%]'>
                <h4 className='text-2xl font-light'>What I do ?</h4>
                <h1 className='text-2xl sm:text-3xl playFair py-2'>Know More About Me<br/>A Little Bit.</h1>
                <p className='text-[#81849e] leading-8'>I am a passionate React.js front-end web developer with over a year of experience in creating responsive and dynamic web applications. I specialize in building user-friendly interfaces and ensuring seamless performance for each project.</p>  
                <div className='flex items-center space-x-2 py-4 text-lg sm:text-xl'>
                    <BsWhatsapp className='text-green-500'/>
                    <p>+880 1875-778050</p>
                </div>
                <div className='flex items-center space-x-2 pb-4 text-lg sm:text-xl'>
                    <MdEmail className='text-green-500'/>
                    <p>mdarmankhan6252@gmail.com</p>
                </div>
                <Link to='/contact' className="text-xl font-medium py-2.5 px-8 border-2 border-white bg-blue-500 text-white rounded-lg hover:border-blue-500 hover:text-blue-500 hover:bg-transparent duration-500 hover:shadow-[0px_0px_4px_0.5px] hover:shadow-blue-500 inline-block" >Get In Touch</Link>
            </div>                    
        </div>
    );
};

export default About;