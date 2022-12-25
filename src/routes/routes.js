import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import CallDashboard from "../layout/CallDashboard/CallDashboard";
import Home from "../layout/Home/Home";
import ViewRecords from "../layout/ViewRecords/ViewRecords";
import { urlPaths } from "./urls";
const RouteComp = (props) => {
  return (
    <Routes>
      
      <Route path={urlPaths.HOME} element={<Home />} /> 
      <Route path={urlPaths.VIEW_RECORDS} element={<ViewRecords />} />     
      <Route path={urlPaths.CALL_DASHBOARD} element={<CallDashboard />} />    
    </Routes>
  );
};

export default RouteComp;
