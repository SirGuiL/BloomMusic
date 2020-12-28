import React, { useState } from 'react';
import Sidebar from '../sidebar';
import Advantages from '../advantages';
import Navbar from '../header';
import Home from '../home';
import Info from '../info';
import { infoObjOne, infoObjTwo, infoObjThree } from '../infoData';
import Footer from '../footer';

const Homepage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return(
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <Home />
          <Info {...infoObjTwo} />
          <Info {...infoObjThree} />
          <Info {...infoObjOne} />
          <Advantages />
          <Footer />
        </>
    )
}

export default Homepage;