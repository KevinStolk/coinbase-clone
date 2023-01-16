import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext'

export const Navbar = () => {
    const { user, logout } = UserAuth()
    const [nav, setNav] = useState(false)

    const navigate = useNavigate()

    const handleSignOut = async () => {
        try {
            await logout()
            navigate('/')
        } catch (err) {
            console.error(err)
        }
    }
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="border w-full px-2 flex items-center justify-between h-[58px] font-bold">
            <Link to="/">
                <h1 className="text-accent text-2xl">coinbase</h1>
            </Link>
            <div className="hidden md:block">
                <ThemeToggle />
            </div>
            {user ? (
                <div className="hidden md:block">
                    <Link
                        to="/account"
                        className="p-4 hover:text-accent transition"
                    >
                        My Account
                    </Link>

                    <button
                        onClick={handleSignOut}
                        className="bg-button text-btnText px-5 py-2 ml-2 rounded-md shadow-lg hover:shadow-2xl"
                    >
                        Sign out
                    </button>
                </div>
            ) : (
                <div className="hidden md:block">
                    <Link
                        to="/signin"
                        className="p-4 hover:text-accent transition"
                    >
                        Sign In
                    </Link>
                    <Link
                        to="/signup"
                        className="bg-button text-btnText px-5 py-2 ml-2 rounded-md shadow-lg hover:shadow-2xl"
                    >
                        Get started
                    </Link>
                </div>
            )}
            <div
                onClick={handleNav}
                className="block md:hidden cursor-pointer z-10"
            >
                {nav ? (
                    <AiOutlineClose size={25} />
                ) : (
                    <AiOutlineMenu size={20} />
                )}
            </div>
            {/* Mobile Menu  */}
            <div
                className={
                    nav
                        ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10'
                        : 'fixed top-[-100%] h-full flex flex-col items-center justify-between'
                }
            >
                <ul className="w-full p-4">
                    <li className="py-6">
                        <Link to="/">Home</Link>
                    </li>
                    {user ? (
                        <li className="py-6">
                            <Link to="/account">Account</Link>
                        </li>
                    ) : null}
                    <li className="py-6">
                        <ThemeToggle />
                    </li>
                </ul>
                {!user ? (
                    <div className="flex flex-col w-full p-4">
                        <Link to="/signup">
                            <button className="w-full m-y2 p-3 bg-button text-btnText rounded-md shadow-xl">
                                Get started
                            </button>
                            <Link to="/signin">
                                <button className="w-full my-2 p-3 border-blue-500 text-accent dark:text-white border-2 border-secondary rounded-md shadow-xl hover:border-none">
                                    Sign In
                                </button>
                            </Link>
                        </Link>
                    </div>
                ) : (
                    <button
                        onClick={handleSignOut}
                        className="w-full m-y2 p-3 bg-button text-btnText rounded-md shadow-xl"
                    >
                        Sign Out
                    </button>
                )}
            </div>
        </div>
    )
}
