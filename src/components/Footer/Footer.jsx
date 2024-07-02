import { BiArrowToRight, BiCopyright } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-blue-950 text-white mt-12 pt-24">
            <div className="max-w-6xl mx-auto flex justify-between *:basis-[32%] *:space-y-6">
                <div>
                    <Link to='/' className="text-2xl font-semibold playFair">Arman</Link>
                    <p>We know from first hand the
                        true meaning of the word support.Best Web Developer in Bangladesh</p>
                    <Link to='/contact' className="flex items-center space-x-2 hover:text-blue-300 font-semibold w-32">
                        <span>Get Support</span>
                        <BiArrowToRight className="text-2xl -mb-1" />
                    </Link>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold">Services</h2>
                    <ul className="*:block space-y-4">
                        <Link to='/' className="hover:underline">E-commerce </Link>
                        <Link to='/' className="hover:underline">Figma to React.js </Link>
                        <Link to='/' className="hover:underline">Responsive Website </Link>
                        <Link to='/' className="hover:underline">UI / UX Design</Link>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold">Find Me</h2>
                    <ul className="*:block space-y-4">
                        <Link to='https://www.facebook.com/profile.php?id=100021868964533' className="hover:underline">Facebook</Link>
                        <Link to='https://www.instagram.com/mdarmankhan6252/' className="hover:underline">Instagram </Link>
                        <Link to='https://www.linkedin.com/in/mdarmankhan6252/' className="hover:underline">Linkedin</Link>
                        <Link to='https://github.com/mdarmankhan6252' className="hover:underline">GitHub</Link>
                    </ul>
                </div>
            </div>
            <div className="flex items-center space-x-2 py-10 max-w-6xl mx-auto">
            <BiCopyright/>
            <small>All rights reserved by MD Arman Khan</small>
            </div>
        </footer>
    );
};

export default Footer;