import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class TheHeader extends Component {
  render() {
    let activeClassName = "text-gray-800 border-b-2 border-blue-500 mx-1.5 sm:mx-6";
    
    return (
      <header className=" bg-white container">
        <nav>
          <div className="container p-6 mx-auto">
            <NavLink
              className="block text-2xl font-bold text-center text-gray-800 lg:text-3xl hover:text-gray-700 "
              to="/"
            >
              Global News
            </NavLink>

            <div className="flex items-center justify-center mt-6 text-gray-600 capitalize">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
                }
              >
                home
              </NavLink>

              <NavLink
                to="/business"
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
                }
              >
                business
              </NavLink>

              <NavLink
                to="/entertainment"
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
                }
              >
                entertainment
              </NavLink>

              <NavLink
                to="/health"
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
                }
              >
                health
              </NavLink>

              <NavLink
                to="/science"
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
                }
              >
                science
              </NavLink>

              <NavLink
                to="/sports"
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
                }
              >
                sports
              </NavLink>

              <NavLink
                to="/technology"
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
                }
              >
                technology
              </NavLink>
            </div>
          </div>
        </nav>

        {/* <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
              <button className="w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none"></button>
              <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
              <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
              <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
            </div>

            <div className="max-w-lg lg:mx-12 lg:order-2">
              <h1 className="text-3xl font-medium tracking-wide text-gray-800  lg:text-4xl">
                The best Apple Watch apps
              </h1>
              <p className="mt-4 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                quia asperiores alias vero magnam recusandae adipisci ad vitae
                laudantium quod rem voluptatem eos accusantium cumque.
              </p>
              <div className="mt-6">
                <NavLink 
                  to="/entertainment"
                  className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md lg:inline hover:bg-blue-400"
                >
                  Download from App Store
                </NavLink >
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full max-w-2xl rounded-md"
              src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
              alt="apple watch photo"
            />
          </div>
        </div> */}
      </header>
    );
  }
}
