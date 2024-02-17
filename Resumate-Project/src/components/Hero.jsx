import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AppContext} from '../Context/appContext';

function Hero() {
  const {data} = useContext(AppContext);
  return (
    <>
      <section className="bg-white dark:bg-gray-900 w-11/12 m-auto pt-10">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Resumate Resume Builder</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Use Resumate Resume Builder to your chances of getting job at top companies.</p>
            <Link to="/resume" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Build your Resume
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
          </div>
          <div className="lg:hidden">
            <img  src="cv_template1.png" alt="mockup" />
          </div>
          <div className="hidden lg:flex lg:mt-0 ml-8 lg:col-span-5">
            <img className="w-3/4 h-auto" src="cv_template1.png" alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
