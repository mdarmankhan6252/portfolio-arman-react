import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="sticky top-0 left-0 right-0 shadow shadow-blue-200 z-10 bg-white">
            <div className="flex items-center max-w-6xl mx-auto justify-between py-4">
                <Link to='/'>
                <h1 className="text-4xl text-blue-500">Arman</h1>
                </Link>
                <ul className="space-x-6 font-semibold">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='/service'>Services</NavLink>
                </ul>
            </div>                        
        </nav>
    );
};

export default Nav;