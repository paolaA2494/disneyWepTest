import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Products from "../pages/Products";
// import Product from "../pages/Product";
import PageNotFound from "../pages/page_not_found/page_not_found";
import SingIn from "../pages/sing_in/sing_in";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<  SingIn/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;