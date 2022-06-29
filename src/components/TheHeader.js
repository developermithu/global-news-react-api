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

            <div className="flex flex-wrap items-center justify-center mt-6 text-gray-600 capitalize">
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
      </header>
    );
  }
}
