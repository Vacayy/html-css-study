import { Route, Routes } from "react-router-dom";
import TextAni from './text-bg-animation/TextAni';
import UserPage from "./text-bg-animation/UserPage";
import ScrollPage from "./text-bg-animation/ScrollPage";
import LandingPage from "./TestFiles/LandingPage/LandingPage";
import ScrollPageA from "./text-bg-animation/ScrollPageA";
import TileSlider from "./text-bg-animation/TileSlider";

function App() {
  return (

    <Routes>
      <Route path="/" element={<LandingPage />} /> 
      <Route path="/slider" element={<TileSlider />} /> 
      
      {/* <Route path="/textani" element={<TextAni />} /> */}
      {/* <Route path="/userpage" element={<UserPage />} /> */}
      {/* <Route path="/scroll" element={<ScrollPage />} /> */}
      {/* <Route path="/scroll-a" element={<ScrollPageA />} />  */}

    </Routes>

  );
}

export default App;
