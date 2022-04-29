import React, { useState } from "react";
import Home from "../pages/Home";
import "./App.css";
import Paginate from "./Paginate";

const App = () => {
  const [paginateData, setPaginateData] = useState({})
  const results = 10;
  return ( 
    <>
    <Home results={results} show={paginateData}/>
    <Paginate items={results} itemsPerPage="3" setData={setPaginateData}/>
  </>
  );
};

export default App;
