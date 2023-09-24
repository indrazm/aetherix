import React from "react";

export const Header = () => {
  return (

    <nav className="border-gray-200 bg-gray-100">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap">EventMaker</span>
            </a>
            <ul className="flex flex-row font-medium space-x-8">
                <li>
                    <a href="#" className="block text-gray-900 rounded hover:text-blue-700">Logout</a>
                </li>
            </ul>
        </div>
    </nav>

  );
};
