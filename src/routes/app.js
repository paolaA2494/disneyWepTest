import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/page_not_found/page_not_found";
import SingIn from "../pages/sing_in/sing_in";
import Home from '../pages/home/home';
import Layout from "../components/shared/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<SingIn/>} />
      <Route path="/home" element={<Layout />}>
        <Route index element={<Home/>} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;