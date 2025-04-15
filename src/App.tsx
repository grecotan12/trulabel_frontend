import React from 'react';
import "./App.css";
import { Navbar } from './navfooter/Navbar';
import { HomePage } from './homepage/HomePage';

export const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage/>
    </div>
  );
};
