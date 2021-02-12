import React, {useState} from "react";
//Import Global Style and font styles
import GlobalStyle from "./styles/GlobalStyle";
import GlobalFonts from "./fonts/fonts";
//Import Components (Sections)
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import MyWorks from './components/MyWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  

    //States
    const [satelliteStatusAboutMe, setSatelliteStatusAboutMe] = useState(false);
    const [satelliteStatusMyWorks, setSatelliteStatusMyWorks] = useState(false);
    const [satelliteStatusContact, setSatelliteStatusContact] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const [songInfo, setSongInfo] = useState({
      currentTime: 0,
    });

    const timeUpdateHandler = (e) => {
      const current = e.target.currentTime;
      setSongInfo({...songInfo, currentTime: current})
    }


  return (

    <div className="App">
      <GlobalFonts />
      <GlobalStyle />
      <Nav 
        timeUpdateHandler={timeUpdateHandler}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      
      <AboutMe
        isPlaying={isPlaying}

        songInfo={songInfo}
        satelliteStatusAboutMe={satelliteStatusAboutMe}
        setSatelliteStatusAboutMe={setSatelliteStatusAboutMe}
      />

      <MyWorks
        satelliteStatusMyWorks={satelliteStatusMyWorks}
        setSatelliteStatusMyWorks={setSatelliteStatusMyWorks}
        isPlaying={isPlaying}
      />

      <Contact 
        satelliteStatusContact={satelliteStatusContact}
        setSatelliteStatusContact={setSatelliteStatusContact}
        isPlaying={isPlaying}
      /> 

      <Footer />
    </div>
  );
};


export default App;