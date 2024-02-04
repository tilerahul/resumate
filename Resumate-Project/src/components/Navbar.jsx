import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  useEffect(() => {
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    const toggleMenu = () => {
      for (let j = 0; j < menu.length; j++) {
        menu[j].classList.toggle('hidden');
      }
    };

    if (burger.length && menu.length) {
      for (let i = 0; i < burger.length; i++) {
        burger[i].addEventListener('click', toggleMenu);
      }
    }

    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
      for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', toggleMenu);
      }
    }

    if (backdrop.length) {
      for (let i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener('click', toggleMenu);
      }
    }

    return () => {
      if (burger.length && menu.length) {
        for (let i = 0; i < burger.length; i++) {
          burger[i].removeEventListener('click', toggleMenu);
        }
      }

      if (close.length) {
        for (let i = 0; i < close.length; i++) {
          close[i].removeEventListener('click', toggleMenu);
        }
      }

      if (backdrop.length) {
        for (let i = 0; i < backdrop.length; i++) {
          backdrop[i].removeEventListener('click', toggleMenu);
        }
      }
    };
  }, []);

  return (
    <div className="bg-blue-500 w-11/12 m-auto fixed">
            <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
                <Link className="text-3xl font-bold leading-none" to="/">
                    <div className="ml-5 h-10 flex gap-2" alt="logo" viewBox="0 0 10240 10240">
                        <Link to="/" className='flex gap-2'>
                          <img src="logo.png" alt="" className="h-8 w-8 " />
                          <h1 className="font-medium font-serif">Resumate</h1>
                        </Link>
                        
                    </div>
                </Link>
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center text-blue-600 p-3">
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                    <li><Link to="/" className="text-sm text-gray-400 hover:text-gray-500">Home</Link></li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li><Link className="text-sm text-blue-600 font-bold" to="/about">About Us</Link></li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
<<<<<<< HEAD
                    <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">FAQ</a></li>
=======
                    <li><Link className="text-sm text-gray-400 hover:text-gray-500" to="services">Services</Link></li>
>>>>>>> 249876b (login registration fuctionality)
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
<<<<<<< HEAD
                    <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Blog</a></li>
=======
                    <li><Link className="text-sm text-gray-400 hover:text-gray-500" to="pricing">Pricing</Link></li>
>>>>>>> 249876b (login registration fuctionality)
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li><Link className="text-sm text-gray-400 hover:text-gray-500" to="contact">Contact</Link></li>
                </ul>
                <Link to="/login" className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200 text-decoration-none">Sign In</Link>
                <Link to="/CreateAccount" className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200 text-decoration-none">Sign up</Link>
            </nav>
            <div className="navbar-menu relative z-50 hidden">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <Link className="mr-auto text-3xl font-bold leading-none" to="/">
                        <div className="ml-5 h-10 flex gap-2" alt="logo" viewBox="0 0 10240 10240">
                            <img src="logo.png" alt="" className="h-8 w-8 " />
                            <h1 className="font-medium font-serif">Resumate</h1>
                        </div>
                        </Link>
                        <button className="navbar-close">
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" to="/">Home</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" to="/about">About Us</Link>
                            </li>
                            <li className="mb-1">
<<<<<<< HEAD
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">FAQ</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Blog</a>
=======
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" to="/services">Services</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" to="pricing">Pricing</Link>
>>>>>>> 249876b (login registration fuctionality)
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" to="contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                            <Link to="/login" className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl text-decoration-none">Sign in</Link>
                            <Link to="/CreateAccount" className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl text-decoration-none">Sign Up</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
  );
}
export default Navbar;
