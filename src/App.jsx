import React from 'react';
import './style.css';
import Header from "./Header";
import Nav from './Nav';
import MainContent from './MainContent';
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
