import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UsesTable from './UsesTable';
import ThemeSwitcher from '../../components/ThemeSwitcher'; // Import the ThemeSwitcher component

const Uses = () => {
  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-black dark:text-white">
    <div className="max-w-screen-lg py-8 md:py-12">
      <Header title="My Uses" />

        <div className="container mx-auto px-6 py-8">
          <h1 className="text-3xl md:text-4xl text-left font-semibold my-4">Boosters</h1>
          <p className="text-base md:text-lg text-left">
            A favorites list curated by a nerd.
          </p>
          <div className="overflow-x-auto">
            <UsesTable className="w-full" />
          </div>
        </div>

      <Footer />
      <ThemeSwitcher />
    </div>
    </div>
  );
};

export default Uses;
