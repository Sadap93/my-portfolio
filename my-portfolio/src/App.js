import React, {useState} from "react";
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
  const [satelliteStatusJupiter, setSatelliteStatusJupiter] = useState(false);
  const [satelliteStatusSaturn, setSatelliteStatusSaturn] = useState(false);
  const [satelliteStatusUranus, setSatelliteStatusUranus] = useState(false);

  return (

    <div className="App">
      <GlobalFonts />
      <GlobalStyle />
      <Nav />

      <AboutMe
        satelliteStatusJupiter={satelliteStatusJupiter}
        setSatelliteStatusJupiter={setSatelliteStatusJupiter}
      />
      <MyWorks
        satelliteStatusSaturn={satelliteStatusSaturn}
        setSatelliteStatusSaturn={setSatelliteStatusSaturn}
      />
      <Contact />
    </div>
  );
};


export default App;
