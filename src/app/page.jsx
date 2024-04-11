import Intro from "./Home/Intro/Intro";
import "tailwindcss/tailwind.css";
import React from "react";
import SignupWidget from "./Home/SignupWidget";
import SkillsWidget from "./Home/Skillswidget/SkillsWidget";
import WorkWidget from "./Home/WorkWidget/WorkWidget";
import Footer from "../components/Footer";
import Article from "./Home/Articles";
import Header from "../components/Header";
import ThemeSwitcher from "../components/ThemeSwitcher";

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-black dark:text-white">
      <div className="max-w-screen-lg py-8 md:py-12">
        <Header />
        <Intro />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-2 lg:gap-2">
          <div className="md:col-span-2 p-3" style={{ maxWidth: "none", width: "100%" }}>
            <Article />
          </div>
          <div className="space-y-3 p-3 flex flex-col ">
            <SignupWidget />
            <WorkWidget />
            <SkillsWidget />
          </div>
        </div>
        <Footer />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
