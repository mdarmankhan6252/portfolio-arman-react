import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    const [menu, setMenu] = useState(false)

    const handleMenu = () =>{
        setMenu(!menu)
    }

    return (
        <nav className="sticky top-0 left-0 right-0 shadow shadow-blue-200 z-10 bg-white">
            <div className="flex items-center max-w-6xl mx-auto justify-between py-4 relative">
                <Link to='/'>
                <h1 className="text-4xl text-blue-500">Arman</h1>
                </Link>
                <ul className="space-x-6 font-semibold sm:block hidden">
                <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/service'>Services</NavLink>
                    <NavLink to='/project'>Project</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </ul>
                <div onClick={handleMenu}  className="text-2xl pr-1 active:text-blue-500 sm:hidden">
                    {
                        menu ? <MdClose /> : <CiMenuBurger />
                    }
                
                </div>
                <ul className={`font-semibold *:block absolute bg-white right-6 top-11 pl-6 pr-10 *:py-2 py-4 shadow-[0px_0px_6px_0px] shadow-blue-300 ${menu ? 'block' : 'hidden'} sm:hidden`}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/service'>Services</NavLink>
                    <NavLink to='/project'>Project</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </ul>
            </div>                        
        </nav>
    );
};

export default Nav;