import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Applyform from './component/applyform';
import './i18n';
import Screen from './component/screen';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Apply from './component/applyform';
import * as Sentry from "@sentry/react";
import axios from 'axios';
import { changeLanguage } from 'i18next';
import SignUp from './component/signup';
changeLanguage('ta')
Sentry.init({
  dsn: "https://d037bc4523fb4e61a1507f54ee6cd7f7@o4505514404806656.ingest.sentry.io/4505514481745920",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", "https:yourserver.io/api/"],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/applyform",
    element:<Applyform/>,
  },
  {
    path:"/screen",
    element:<Screen/>,
  },
  {
    path:"/signup",
    element:<SignUp/>,
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
