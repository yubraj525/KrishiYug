import React from 'react'
import { createBrowserRouter } from 'react-router'

import Layout from './Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';

import Blog from './pages/Blog';
import ProductPage from './pages/ProductPage';
import LoginPage from './components/LoginPage';
import Gallery from './pages/Gallery';
import Workstation from './pages/Workstation';

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wraps all pages inside Layout
    children: [
      { index: true, element: <Home /> }, // Default page
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactUs/> }, 
      { path: "service", element: <Services/> },// Fix: Added missing `/>`
      { path: "blogs", element: <Blog/> },// Fix: Added missing `/>`
      { path: "products", element: <ProductPage/> },// Fix: Added missing `/>`
      { path: "gallery", element: <Gallery/> },// Fix: Added missing `/>`
    ],
  },
  {path:"login", element:<Workstation/>}
]);

export default Route