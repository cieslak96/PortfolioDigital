import "tailwindcss/tailwind.css";
import React from "react";
import Header from '../../components/Header';
import Intro from "./projectsintro/intro";
import Footer from '../../components/Footer';
import ThemeSwitcher from '../../components/ThemeSwitcher';

export const metadata = {
  title: 'Portfolio - Projects',
  description: 'The projects page of my portfolio.',
}

export default function Projects() {
  return (
    <div className="min-h-screen dark:bg-black dark:text-white">
      <div className="max-w-screen-lg py-8 md:py-12 px-4 md:px-8 lg:px-12 mx-auto">
        <Header/>
        <div>
          <div className="w-full py-12">
            <Intro/>
          </div>
        </div>
        <Footer/>
        <ThemeSwitcher/>
      </div>
    </div>
  );
}

