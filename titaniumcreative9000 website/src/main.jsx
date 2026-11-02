import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header.jsx'
import AboutMe from './Pages/AboutMe.jsx'
import Home from './Pages/Home.jsx'
import Gallery from './Pages/Gallery.jsx'

function Page(){
  return(
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
createRoot(document.getElementById('root')).render(
  <Page />
)
