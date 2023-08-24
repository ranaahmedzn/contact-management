import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Dashboard from './layouts/Dashboard';
import Contact from './pages/Dashboard/Contact/Contact';
import CreateContact from './pages/Dashboard/CreateContact/CreateContact';
import EditContact from './pages/Dashboard/EditContact/EditContact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/contact/create-contact',
        element: <CreateContact />
      },
      {
        path: '/contact/edit-contact',
        element: <EditContact />
      },
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
