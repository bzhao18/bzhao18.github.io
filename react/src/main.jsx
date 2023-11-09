import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Nav from './Nav.jsx'
import Landing from './Landing.jsx'
import About from './About.jsx'
import Experience from './Experience.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Landing />
    <About />
    <Experience />
    <Contact />
    <Footer />
  </React.StrictMode>,
)
