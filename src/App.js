import { BrowserRouter, Routes, Route } from "react-router-dom";

import Rarity from "./pages/Rarity";
import Licence from "./pages/Licence";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./asset/css/Home.css";
import "./asset/css/Licence.css";
import "./asset/css/nicepage.css";
import "./asset/css/Rarity.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rarity" element={<Rarity />} />
        <Route path="/licence" element={<Licence />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
