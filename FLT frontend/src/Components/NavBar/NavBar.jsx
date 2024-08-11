import React from 'react'
import {Link} from 'react-router-dom';

function NavBar({btn, to}) {
    return (
        <nav className="border-gray-200 border-b-2">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-violet-600">FLT</span>
                </Link>
                <div className="block w-auto" id="navbar-default">
                    <Link to={to} className="block py-2 px-3 text-white bg-violet-600 rounded-lg hover:bg-violet-500">{btn}</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar