import { useState } from "react";
import Header from "./components/Header";
import SearchPopup from "./SearchPopup.tsx";
import HeroSection from "./HeroSection.tsx";
import MainSection from "./MainSection.tsx";

function App() {
  const [searchPopupToggle, setSearchPopupToggle] = useState<boolean>(false);

  return (
    <div className="max-w-6xl m-auto">
      <Header
        setSearchPopupToggle={setSearchPopupToggle}
        searchPopupToggle={searchPopupToggle}/>
      <HeroSection/>
      <MainSection/>
      <SearchPopup
        searchPopupToggle={searchPopupToggle}/>
    </div>
  )
}

export default App
