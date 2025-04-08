import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import { useState } from 'react';

function NavBar() {

    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
    return (
        <nav className="border-gray-200 border-b-2">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between h-[9vh] mx-[10%]">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-violet-600">FLT</span>
                </Link>
                <nav className='md:inline-block hidden'>
                <ul className='flex flex-row gap-5'>
                    <li className=" w-auto" id="navbar-default">
                        <NavLink to="/" className={({isActive}) => `${isActive? "border-b-4 border-violet-600" : ""} px-1 font-medium`}>Home</NavLink>
                    </li>
                    <li className=" w-auto" id="navbar-default">
                        <NavLink to="/allCards" className={({isActive}) => `${isActive? "border-b-4 border-violet-600" : ""} px-1 font-medium`}>All Cards</NavLink>
                    </li>
                    <li className=" w-auto" id="navbar-default">
                        <NavLink to="/card/add" className={({isActive}) => `${isActive? "border-b-4 border-violet-600" : ""} px-1 font-medium`}>Add Card</NavLink>
                    </li>
                </ul>
                </nav>

                <GiHamburgerMenu className='md:hidden block text-2xl cursor-pointer' onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}/>

                <nav className={`md:hidden ${showHamburgerMenu? "block" : "hidden"} absolute top-[5vh] right-5 bg-white shadow-lg rounded-lg p-5` } onClick={() => setShowHamburgerMenu(!showHamburgerMenu) }>
                <ul className='flex flex-col gap-5'>
                    <li className=" w-auto" id="navbar-default">
                        <NavLink to="/" className={({isActive}) => `${isActive? "border-b-4 border-violet-600" : ""} px-1 font-medium`}>Home</NavLink>
                    </li>
                    <li className=" w-auto" id="navbar-default">
                        <NavLink to="/allCards" className={({isActive}) => `${isActive? "border-b-4 border-violet-600" : ""} px-1 font-medium`}>All Cards</NavLink>
                    </li>
                    <li className=" w-auto" id="navbar-default">
                        <NavLink to="/card/add" className={({isActive}) => `${isActive? "border-b-4 border-violet-600" : ""} px-1 font-medium`}>Add Card</NavLink>
                    </li>
                </ul>
                </nav>
            </div>
        </nav>
    )
}

export default NavBar