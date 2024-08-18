
const Services = () => {
    return (
        <div className="bg-blue-50 py-24 px-2">
            
            <div className="max-w-6xl mx-auto">
                <h5 className="text-blue-500 text-xl font-light">SERVICES</h5>
                <h1 className="text-xl sm:text-3xl font-semibold playWrite py-4">What I Can Do For You</h1>
                

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    <div className="bg-white space-y-4 px-4 py-8 shadow-blue-500 shadow-[0px_0px_5px_0Px] hover:shadow-none duration-500">
                        <h3 className="text-center font-semibold text-xl sm:text-2xl">E-Commerce Website</h3>
                        <p className="text-justify font-light text-black leading-7">An ecommerce website enables businesses to sell products or services online, offering detailed product listings, a user-friendly shopping cart, secure payment integration, and user accounts for personalized shopping experiences. With a responsive design, it ensures optimal functionality across all devices, making it easy for customers to shop anytime, anywhere.</p>
                    </div>
                    <div className="bg-white space-y-4 px-4 py-8 shadow-blue-500 shadow-[0px_0px_5px_0Px] hover:shadow-none duration-500">
                        <h3 className="text-center font-semibold text-xl sm:text-2xl">Real State Website</h3>
                        <p className="text-justify font-light text-black leading-7">A real estate website showcases properties for sale or rent, featuring comprehensive listings, advanced search functionality, interactive maps, and easy contact forms. Optimized for viewing on all devices, it provides users with a smooth and efficient property search experience.</p>
                    </div>
                    <div className="bg-white space-y-4 px-4 py-8 shadow-blue-500 shadow-[0px_0px_5px_0Px] hover:shadow-none duration-500">
                        <h3 className="text-center font-semibold text-xl sm:text-2xl">Blog Website</h3>
                        <p className="text-justify font-light text-black leading-7">A blog website is an excellent platform for sharing insights, stories, and expertise on various topics. It features an easy-to-use content management system, categorized and tagged posts, and interactive elements such as comments and social media integration. With a responsive design, your blog ensures readers can enjoy your content on any device, enhancing engagement and reach.</p>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Services;