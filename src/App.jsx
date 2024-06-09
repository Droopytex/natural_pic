import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";
import FotoProvider from "./context/ContexFotos";

const App = () => {
  return (
    <FotoProvider>
      <div>
        <Navbar />

        <Routes>
          <Route path="/natural_pic" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </div>
    </FotoProvider>
  );
};
export default App;
