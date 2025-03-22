import React from 'react'
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="border-gray-200 border-b-2">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-[9vh]">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-violet-600">FLT</span>
                </Link>
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
            </div>
        </nav>
    )
}

export default NavBar