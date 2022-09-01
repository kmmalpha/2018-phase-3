import React from 'react';
import './style.css';
import Header from "./Header";
import Nav from './Nav';
import MainContent from './MainContent';
import Footer from "./Footer";

function App() {
  return (
    <div className='App'>
      {/* <Header /> */}
      <Nav />
      <div className='container'>
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
