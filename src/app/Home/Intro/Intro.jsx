import React from "react";
import Image from "next/image";
import profilePic from "./profile.jpg";

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

export default function Intro() {
  return (
    <div className="container mx-auto p-5 ">
      <Image src={profilePic} alt="Profile" className=" p-5 rounded-full w-64 h-64 md:w-50 md:h-50" />
      <h1 className="text-2xl md:text-4xl text-left font-semibold my-4">Angela Cieslak , 27</h1>
      <p className="text-base md:text-lg text-left">F-Society</p>
      <ul className="flex">
        <li>
          <a
            href="https://linkedin.com/in/angelacieslak"
            target="_blank"
            rel="noreferrer"
            className="linkedin inline-block mr-3"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="{{ IsDarkMode ? 'fill-white' : 'fill-gray-800' }}"
            >
              <path
                d="M18.335 18.339H15.67V14.162C15.67 13.166 15.65 11.884 14.28 11.884C12.891 11.884 12.679 12.968 12.679 14.089V18.339H10.013V9.75H12.573V10.92H12.608C12.966 10.246 13.836 9.533 15.136 9.533C17.836 9.533 18.336 11.311 18.336 13.624V18.339H18.335ZM7.003 8.575C6.79956 8.57526 6.59806 8.53537 6.41006 8.45761C6.22207 8.37984 6.05127 8.26574 5.90746 8.12184C5.76365 7.97793 5.64965 7.80706 5.57201 7.61901C5.49437 7.43097 5.4546 7.22944 5.455 7.026C5.4552 6.71983 5.54618 6.4206 5.71644 6.16615C5.8867 5.91169 6.12859 5.71343 6.41153 5.59645C6.69447 5.47947 7.00574 5.44902 7.30598 5.50894C7.60622 5.56886 7.88196 5.71648 8.09831 5.93311C8.31466 6.14974 8.46191 6.42566 8.52145 6.72598C8.58099 7.0263 8.55013 7.33753 8.43278 7.62032C8.31543 7.9031 8.11687 8.14474 7.86219 8.31467C7.60751 8.4846 7.30917 8.5752 7.003 8.575ZM8.339 18.339H5.666V9.75H8.34V18.339H8.339ZM19.67 3H4.329C3.593 3 3 3.58 3 4.297V19.703C3 20.42 3.594 21 4.328 21H19.666C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3H19.67Z"
                class="fill-current"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://vero.co/angelacieslak" target="_blank" rel="noreferrer" className="x inline-block mr-3 ">
            <svg
              width="24"
              height="24"
              viewBox="0 3 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="{{ IsDarkMode ? 'fill-white' : 'fill-gray-800' }}"
            >
              <path
                d="M1.125 5.515A1 1 0 0 1 2 5h14a1 1 0 0 1 .84 1.543l-5.162 7.977.347.578 6.131-9.635A1 1 0 0 1 19 5h3a1 1 0 0 1 .848 1.53l-10 16a1 1 0 0 1-1.696 0l-10-16a1 1 0 0 1-.027-1.015ZM3.805 7 12 20.113 20.196 7h-.647l-6.705 10.537a1 1 0 0 1-1.701-.022l-1.5-2.5a1 1 0 0 1 .017-1.058L14.162 7H3.804Z"
                class="fill-current"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://github.com/cieslak96" target="_blank" rel="noreferrer" className="github inline-block mr-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="{{ IsDarkMode ? 'fill-white' : 'fill-gray-800' }}"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1.99963C6.475 1.99963 2 6.58763 2 12.2526C2 16.7896 4.862 20.6216 8.838 21.9796C9.338 22.0696 9.525 21.7616 9.525 21.4926C9.525 21.2496 9.512 20.4426 9.512 19.5826C7 20.0586 6.35 18.9566 6.15 18.3796C6.037 18.0846 5.55 17.1746 5.125 16.9316C4.775 16.7396 4.275 16.2646 5.112 16.2516C5.9 16.2396 6.462 16.9956 6.65 17.3026C7.55 18.8536 8.988 18.4186 9.562 18.1486C9.65 17.4826 9.912 17.0336 10.2 16.7776C7.975 16.5216 5.65 15.6376 5.65 11.7156C5.65 10.6006 6.037 9.67763 6.675 8.95963C6.575 8.70363 6.225 7.65263 6.775 6.24263C6.775 6.24263 7.612 5.97363 9.525 7.29363C10.325 7.06363 11.175 6.94763 12.025 6.94763C12.875 6.94763 13.725 7.06263 14.525 7.29363C16.437 5.96063 17.275 6.24363 17.275 6.24363C17.825 7.65263 17.475 8.70363 17.375 8.95963C18.012 9.67763 18.4 10.5876 18.4 11.7156C18.4 15.6496 16.063 16.5216 13.838 16.7776C14.2 17.0976 14.513 17.7136 14.513 18.6746C14.513 20.0456 14.5 21.1476 14.5 21.4946C14.5 21.7626 14.688 22.0836 15.188 21.9806C17.1849 21.2846 18.911 19.9756 20.12 18.2406C21.3456 16.4845 22.0019 14.3941 22 12.2526C22 6.58763 17.525 1.99963 12 1.99963Z"
                class="fill-current"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}
