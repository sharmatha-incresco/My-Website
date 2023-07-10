import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Module from './component/module';
import React from 'react';
import Screen from './component/screen';
import Topbar from './component/topbar';
import Sidebar from './component/sidebar';
import DropdownList from './component/dropdownlist';
import Apply from './component/applyform';
function App() {
  return (
    <div>
      <Screen/>
    </div>
  );
}

export default App;
