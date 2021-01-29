import React from 'react';
import './App.css';
import { Router, Location, Redirect} from "@reach/router";

import Navigationbar from './components/Navigationbar/Navigationbar'
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import LavaLamp from './components/LavaLamp/LavaLamp'




function App() {
  

  return (
    <Location>
    {({location, navigate}) => (
      <>
        <Navigationbar currentPage={location}/>
        {/* <Button style={{background:'linear-gradient(45deg, rgba(29,233,182,1) 24%, rgba(152,249,235,1) 76%)'}}>Hello</Button> */}
        <LavaLamp/>
        <Router location={location} navigate={navigate}>
          <Redirect from="/" to='/home' noThrow />
          <Home path='/home'/>
          <About path='/about'/>
          <Contact path='/contact'/>
        </Router>
      </>
      )}
    </Location>
  );
}

export default App;
