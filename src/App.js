import { About } from "./components/About";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import { SocialLinks } from "./components/SocialLinks";
import { Details } from "./components/Details";
import { Contact } from "./components/Contact";
import React, { useState } from "react";

function App() {
  const [selectedDetail, setSelectedDetail] = useState(null);

  const handleDetailsClick = (detail) => {
    setSelectedDetail(detail);
  };

  const handleCloseDetails = () => {
    setSelectedDetail(null);
  };

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio onDetailsClick={handleDetailsClick} />
      {selectedDetail && (
        <Details detail={selectedDetail} onClose={handleCloseDetails} />
      )}
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
