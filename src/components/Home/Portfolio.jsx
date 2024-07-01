import img_1 from '../../assets/portfolio_img/img_1.jpg'
import img_2 from '../../assets/portfolio_img/img_2.png'
import img_3 from '../../assets/portfolio_img/img_3.jpg'
import img_4 from '../../assets/portfolio_img/img_4.png'
import img_5 from '../../assets/portfolio_img/img_5.jpg'
import img_6 from '../../assets/portfolio_img/img_6.png'

const Portfolio = () => {
    return (
        <div className="bg-blue-50 my-16 py-16">
            <div className="max-w-6xl mx-auto">
               <h1 className="text-4xl text-blue-950 font-semibold playWrite pb-10">Portfolio</h1>  
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden'>
                <img className='w-full h-full duration-300 hover:scale-105' src={img_1} alt="" />
                <img className='w-full h-full duration-300 hover:scale-105' src={img_2} alt="" />
                <img className='w-full h-full duration-300 hover:scale-105' src={img_3} alt="" />
                <img className='w-full h-full duration-300 hover:scale-105' src={img_4} alt="" />
                <img className='w-full h-full duration-300 hover:scale-105' src={img_5} alt="" />
                <img className='w-full h-full duration-300 hover:scale-105' src={img_6} alt="" />
                </div> 
            </div>      
        </div>
    );
};

export default Portfolio;