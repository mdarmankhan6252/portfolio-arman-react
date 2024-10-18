import './Projects.css'
import p1 from '../../assets/project_img/p1.png'
import p2 from '../../assets/project_img/p2.png'
import p3 from '../../assets/project_img/p3.png'
import p4 from '../../assets/project_img/p4.png'
import p5 from '../../assets/project_img/p5.png'
import p6 from '../../assets/project_img/p6.png'
import p7 from '../../assets/project_img/p7.png'
import p8 from '../../assets/project_img/p8.png'
import p9 from '../../assets/project_img/p9.png'
import { Link } from 'react-router-dom'
import BgAni from '../Home/BgAni'
const Projects = () => {
    return (
        <div>
            <div className='project'>
                <h1 className='playWrite text-white font-semibold text-2xl sm:text-3xl lg:text-5xl'>My Projects</h1>
            </div>
            <BgAni/>

            {/* my all projects */}
            <h1 className='text-2xl sm:text-3xl lg:text-4xl py-20 text-center font-semibold playWrite'>My Projects</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6 px-3'>
                <Link target='_blank' to='https://mdarmankhan6252.github.io/legal-justice/' className='border p-3 hover:shadow-blue-300 hover:shadow-[0px_0px_6px_0px] duration-500 hover:scale-105'>
                    <img src={p1} alt="" className='w-full' />
                    <div className=' px-3 *:py-2'>
                    <h3 className='play playFair text-2xl'>Legal Justice</h3>
                    <p className='text-[#927f7f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolorum! Minima iste dolores quisquam eos expedita?</p>
                    </div>
                </Link>
                <Link target='_blank' to='https://mdarmankhan6252.github.io/js-botcamp/' className='border p-3 hover:shadow-blue-300 hover:shadow-[0px_0px_6px_0px] duration-500 hover:scale-105'>
                    <img src={p2} alt="" className='w-full' />
                    <div className=' px-3 *:py-2'>
                    <h3 className='play playFair text-2xl'>Boot Camp</h3>
                    <p className='text-[#927f7f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolorum! Minima iste dolores quisquam eos expedita?</p>
                    </div>
                </Link>
                <Link target='_blank' to='https://mdarmankhan6252.github.io/assignment-3/' className='border p-3 hover:shadow-blue-300 hover:shadow-[0px_0px_6px_0px] duration-500 hover:scale-105'>
                    <img src={p3} alt="" className='w-full' />
                    <div className=' px-3 *:py-2'>
                    <h3 className='play playFair text-2xl'>Hockey's Shop</h3>
                    <p className='text-[#927f7f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolorum! Minima iste dolores quisquam eos expedita?</p>
                    </div>
                </Link>
                <Link target='_blank' to='https://mdarmankhan6252.github.io/assignment-2/' className='border p-3 hover:shadow-blue-300 hover:shadow-[0px_0px_6px_0px] duration-500 hover:scale-105'>
                    <img src={p4} alt="" className='w-full' />
                    <div className=' px-3 *:py-2'>
                    <h3 className='play playFair text-2xl'>Travel Website</h3>
                    <p className='text-[#927f7f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolorum! Minima iste dolores quisquam eos expedita?</p>
                    </div>
                </Link>
                <Link target='_blank' to='https://mdarmankhan6252.github.io/Tea-House/' className='border p-3 hover:shadow-blue-300 hover:shadow-[0px_0px_6px_0px] duration-500 hover:scale-105'>
                    <img src={p5} alt="" className='w-full' />
                    <div className=' px-3 *:py-2'>
                    <h3 className='play playFair text-2xl'>Tea House</h3>
                    <p className='text-[#927f7f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolorum! Minima iste dolores quisquam eos expedita?</p>
                    </div>
                </Link>
                <Link target='_blank' to='https://mdarmankhan6252.github.io/web-developer-portfolio/' className='border p-3 hover:shadow-blue-300 hover:shadow-[0px_0px_6px_0px] duration-500 hover:scale-105'>
                    <img src={p6} alt="" className='w-full' />
                    <div className=' px-3 *:py-2'>
                    <h3 className='play playFair text-2xl'>Personal Portfolio</h3>
                    <p className='text-[#927f7f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolorum! Minima iste dolores quisquam eos expedita?</p>
                    </div>
                </Link>
                <Link target='_blank' to='https://mdarmankhan6252.github.io/arithmetic/' className='border p-3 hover:shadow-blue-300 hover:shadow-[0px_0px_6px_0px] duration-500 hover:scale-105'>
                    <img src={p7} alt="" className='w-full' />
                    <div className=' px-3 *:py-2'>
                    <h3 className='play playFair text-2xl'>Architects</h3>
                    <p className='text-[#927f7f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolorum! Minima iste dolores quisquam eos expedita?</p>
                    </div>
                </Link>
                <Link target='_blank' to='https://mdarmankhan6252.github.io/assignment-1/' className='border p-3 hover:shadow-blue-300 hover:shadow-[0px_0px_6px_0px] duration-500 hover:scale-105'>
                    <img src={p8} alt="" className='w-full' />
                    <div className=' px-3 *:py-2'>
                    <h3 className='play playFair text-2xl'>Party Celebration</h3>
                    <p className='text-[#927f7f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolorum! Minima iste dolores quisquam eos expedita?</p>
                    </div>
                </Link>
                <Link target='_blank' to='https://mdarmankhan6252.github.io/barber/' className='border p-3 hover:shadow-blue-300 hover:shadow-[0px_0px_6px_0px] duration-500 hover:scale-105'>
                    <img src={p9} alt="" className='w-full' />
                    <div className=' px-3 *:py-2'>
                    <h3 className='play playFair text-2xl'>Hair Studio</h3>
                    <p className='text-[#927f7f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolorum! Minima iste dolores quisquam eos expedita?</p>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default Projects;