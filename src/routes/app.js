import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/page_not_found/page_not_found";
import SingIn from "../pages/sing_in/sing_in";
import Home from '../pages/home/home';
import Layout from "../components/shared/layout";
import AboutUs from "../pages/about_us/about_us";
import ContentCategory from "../pages/content_category/content_category"
import ContentDetail  from "../pages/content_detail/content_detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index path="/" element={<SingIn/>} />
      <Route path="/home" element={<Layout />}>
        <Route path="/home" element={<Home/>} />
      </Route>
      <Route path="/about" element={<Layout />}>
         <Route path="/about" element={<AboutUs/>}/>
      </Route>
      <Route path="/category/:name" element={<Layout />}>
         <Route path="/category/:name" element={<ContentCategory/>}/>
      </Route>
      <Route path="/detail/:id" element={<Layout />}>
         <Route path="/detail/:id" element={<ContentDetail/>}/>
      </Route>
    
      <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;