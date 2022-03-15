import { BrowserRouter, Routes, Route } from "react-router-dom";

import Rarity from "./pages/Rarity";
import ItemDetail from "./pages/ItemDetail";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import AdminLogin from "./pages/AdminLogin";

// import "./asset/css/Home.css";
// import "./asset/css/Licence.css";
import "./asset/css/nicepage.css";

// import "./asset/css/Rarity.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rarity" element={<Rarity />} />
        <Route path="/item-detail/:id" element={<ItemDetail />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
