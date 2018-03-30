import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar.jsx'
import HomeIntro from './components/HomeIntro/HomeIntro.jsx'
import LoremPage from './Pages/LoremPage/LoremPage.jsx'
import FeaturedPage from './Pages/FeaturedPage/FeaturedPage.jsx'
import OurLorem from './Pages/OurLorem/OurLorem.jsx'
import TopPage from './Pages/TopPage/TopPage.jsx'
import Footer from './components/Footer/Footer.jsx'
import ScrollUpButton from './components/ScrollUpButton/ScrollUpButton.jsx'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <NavBar />
        <HomeIntro />
        <LoremPage />
        <FeaturedPage />
        <OurLorem />
        <TopPage />
        <ScrollUpButton />
        <Footer />
      </div>
    );
  }
}

export default App;
