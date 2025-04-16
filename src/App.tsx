import React from 'react';
import "./App.css";
import { Navbar } from './navfooter/Navbar';
import { HomePage } from './homepage/HomePage';
import { Footer } from './navfooter/Footer';

export const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage/>
      <Footer/>
    </div>
  );
};
