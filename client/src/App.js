//import React, { useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Menu />} />
          <Route path='login' element={<Login/>}/>
          <Route path='users' element={<Users/>}/>
          <Route path='*' element={<p>No page</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App