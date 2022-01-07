import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Kontak from "./Page/Kontak";
import MenuMakanan from "./Page/MenuMakanan";
import MenuMinuman from "./Page/MenuMinuman";

const AppRoute = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/menu_makanan" element={<MenuMakanan />} />
          <Route path="/menu_minuman" element={<MenuMinuman />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoute;
