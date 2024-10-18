import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    const [menu, setMenu] = useState(false)

    const handleMenu = () =>{
        setMenu(!menu)
    }

    const [sticky, setSticky] = useState(false);
    useEffect(() =>{
        window.addEventListener('scroll', () =>{
            window.scrollY > 50 ?  setSticky(true) : setSticky(false)
        })
    },[])
    // shadow-blue-200
    return (
        <nav className={`sticky top-0 left-0 right-0 z-20 bg-white px-2 ${sticky ? 'shadow-blue-200 shadow duration-500' : ''}`}>
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
                <ul className={`font-semibold *:block absolute bg-white  top-[72px] pl-6 pr-16 duration-500 *:py-2 py-4 shadow-[0px_0px_6px_0px] shadow-blue-300 ${menu ? ' -right-2' : '-right-40'} sm:hidden`}>
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