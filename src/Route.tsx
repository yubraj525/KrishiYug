import React from 'react'
import { createBrowserRouter } from 'react-router'

import Layout from './Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import LoginPage from './pages/LoginPage';

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wraps all pages inside Layout
    children: [
      { index: true, element: <Home /> }, // Default page
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactUs/> }, 
      { path: "service", element: <Services/> },// Fix: Added missing `/>`
    ],
  },
  {path:"/login", element:<LoginPage/>}
]);

export default Route