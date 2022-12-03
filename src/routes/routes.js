import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../layout/Home/Home";
import { urlPaths } from "./urls";
const RouteComp = (props) => {
  return (
    <Routes>
      <Route path={urlPaths.HOME} element={<Home />} />      
    </Routes>
  );
};

export default RouteComp;
