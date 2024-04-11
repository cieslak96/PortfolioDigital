import "tailwindcss/tailwind.css";
import React from "react";
import Header from "../../components/Header";
import Int_about from "./Intro";
import Right_col from "./Contact";
import Footer from "../../components/Footer";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import lanapic from "./lana.jpg";
import Image from "next/image";

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

export default function About() {
  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-black dark:text-white">
      <div className="max-w-screen-lg py-8 md:py-12">
        <Header />

        <div className="flex flex-col md:flex-row">
          <div className="p-6 py-12 md:w-1/2 md:order-last">
            <Image src={lanapic} alt="Lana" className="mx-auto md:mx-0" />
            <Right_col />
          </div>
          <div className="md:w-1/2 p-4 md:order-first">
            <div>
              <Int_about />
            </div>
          </div>
        </div>

        <Footer />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
