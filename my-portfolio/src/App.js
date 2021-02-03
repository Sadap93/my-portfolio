import React from "react";
//Import Global Style and font styles
import GlobalStyle from "./components/styles/GlobalStyle";
import GlobalFonts from "./fonts/fonts";
//Import Components(Sections)
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import MyWorks from './components/MyWorks';
import Contact from './components/Contact';


function App() {

  //State
  
  return (
    
    <div className="App">
      <GlobalFonts />
      <GlobalStyle />
      <Nav />
 
      <AboutMe 

      />
      <MyWorks />
      <Contact />
    </div>
  );
};


export default App;
