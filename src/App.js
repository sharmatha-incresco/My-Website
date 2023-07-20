import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
import { useTransition } from 'react';
import Module from './component/module';
import React from 'react';
import Screen from './component/screen';
import Topbar from './component/topbar';
import Sidebar from './component/sidebar';
import DropdownList from './component/dropdownlist';
import Apply from './component/applyform';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import ErrorBoundary from "./ErrorBoundary";
import SignUp from './component/signup';
import SignIn from './component/signin';
function App() {
 //changeLanguage('ta');
  return (
    <ErrorBoundary>
       
       <SignIn/>
        
      </ErrorBoundary>
  );
}

export default App;
