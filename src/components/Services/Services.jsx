
import { Helmet } from 'react-helmet';
import './Services.css'

const Services = () => {
    return (
        <div>
            <Helmet>
                <title>Services - Arman</title>
            </Helmet>
            <div className='services'>
                <h1 className='playWrite text-white font-semibold text-3xl sm:text-4xl lg:text-5xl'>My Services</h1>
            </div>
            {/* services */}
            <div className="bg-blue-50 py-24">
            
            <div className="max-w-6xl mx-auto">
                <h5 className="text-blue-500 text-xl font-light">SERVICES</h5>
                <h1 className="text-xl sm:text-3xl font-semibold playWrite py-4">What I Can Do For You</h1>
                

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    <div className="bg-white space-y-4 px-4 py-8 shadow-blue-500 shadow-[0px_0px_5px_0Px] hover:shadow-none duration-500">
                        <h3 className="text-center font-semibold text-xl sm:text-2xl">E-Commerce Website</h3>
                        <p className='text-justify'>An ecommerce website enables businesses to sell products or services online, offering detailed product listings, a user-friendly shopping cart, secure payment integration, and user accounts for personalized shopping experiences. With a responsive design, it ensures optimal functionality across all devices, making it easy for customers to shop anytime, anywhere.</p>
                    </div>
                    <div className="bg-white space-y-4 px-4 py-8 shadow-pink-500 shadow-[0px_0px_5px_0Px] hover:shadow-none duration-500">
                        <h3 className="text-center font-semibold text-xl sm:text-2xl">Real State Website</h3>
                        <p className='text-justify'>A real estate website showcases properties for sale or rent, featuring comprehensive listings, advanced search functionality, interactive maps, and easy contact forms. Optimized for viewing on all devices, it provides users with a smooth and efficient property search experience.</p>
                    </div>
                    <div className="bg-white space-y-4 px-4 py-8 shadow-blue-500 shadow-[0px_0px_5px_0Px] hover:shadow-none duration-500">
                        <h3 className="text-center font-semibold text-xl sm:text-2xl">Portfolio Website</h3>
                        <p className='text-justify'>A portfolio website is a personal showcase of your skills, projects, and professional experience, including an about me section, a project gallery, services offered, and contact information. With a responsive design, your portfolio ensures a professional and engaging presentation on all devices.</p>
                    </div>
                    <div className="bg-white space-y-4 px-4 py-8 shadow-blue-500 shadow-[0px_0px_5px_0Px] hover:shadow-none duration-500">
                        <h3 className="text-center font-semibold text-xl sm:text-2xl">Blog Website</h3>
                        <p className='text-justify'>A blog website is an excellent platform for sharing insights, stories, and expertise on various topics. It features an easy-to-use content management system, categorized and tagged posts, and interactive elements such as comments and social media integration. With a responsive design, your blog ensures readers can enjoy your content on any device, enhancing engagement and reach.</p>
                    </div>
                    <div className="bg-white space-y-4 px-4 py-8 shadow-pink-500 shadow-[0px_0px_5px_0Px] hover:shadow-none duration-500">
                        <h3 className="text-center font-semibold text-xl sm:text-2xl">Business Website</h3>
                        <p className='text-justify'>A business website serves as a digital storefront, providing essential information about your company, services, and contact details. Key features include a professional homepage, service descriptions, client testimonials, and a contact form. Designed to be responsive, it ensures that your business maintains a strong online presence and accessibility on all devices.</p>
                    </div>
                    <div className="bg-white space-y-4 px-4 py-8 shadow-blue-500 shadow-[0px_0px_5px_0Px] hover:shadow-none duration-500">
                        <h3 className="text-center font-semibold text-xl sm:text-2xl">Educational Website</h3>
                        <p className='text-justify'>An educational website offers a platform for delivering online courses, tutorials, and educational resources. It includes features like course management, student registration, interactive quizzes, and progress tracking. With a responsive design, it ensures that learners can access educational content smoothly on any device, promoting effective and flexible learning experiences</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Services;