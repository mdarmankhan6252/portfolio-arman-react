import { useState } from "react";
import faq from '../../assets/portfolio_img/faq_img.png'
function FaQ() {
    const [isOpen, setIsOpen] = useState(null);
    const dataArr = [{ title: "What services do you offer?", description: 'I specialize in building responsive and dynamic web applications using React.js. My services include front-end development, single-page applications, component-based architecture, API integration, and website maintenance.', }, { title: "What technologies do you use ?", description: 'I primarily use React.js for front-end development. Additionally, I am experienced with JavaScript, HTML, CSS, Redux, React Router, and other modern web development tools and libraries. For backend development, I am familiar with Node.js and Express.', }, { title: "Do you offer custom web development?", description: "Yes, I offer custom web development services tailored to meet the unique needs of your business. Whether you need a custom feature, a specific design, or integration with other services, I can build a solution that fits your requirements.", }, { title: "Can you work with existing websites?", description: "Absolutely. I can help enhance and optimize existing websites by adding new features, improving performance, and ensuring the site is responsive and user-friendly.", }, { title: "How much do your services cost?", description: "The cost of my services depends on the complexity and scope of the project. After an initial consultation, I will provide a detailed quote based on your specific requirements.", },];
    const toggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
    };

    return (
        <div className="max-w-6xl mx-auto px-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl playWrite text-center  pb-16">Frequently Asked Questions.</h1>
            <div className="flex items-center justify-between flex-row-reverse gap-x-10">
                <div className="mx-auto max-w-[800px] bg-white px-2 font-sans *:mix-blend-difference dark:bg-inherit z-20 basis-2/3">
                    {dataArr.map((PerAccordion, idx) => (
                        <div key={idx} className="border-b border-gray-500/50 py-3">
                            <button onClick={() => toggle(idx)} className="flex h-full w-full justify-between font-medium outline-none text-white">
                                <span>{PerAccordion.title}</span>
                                <span className="rounded-full p-2">
                                    <svg className="ml-8 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                        <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                    </svg>
                                </span>
                            </button>
                            <div className={`grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden pr-4 text-sm">{PerAccordion.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="basis-1/3 -mb-12">
                    <img src={faq} alt="" />
                </div>
            </div>
        </div>
    );
}

export default FaQ;