import './App.css'
import * as $ from "jquery"
import Header from "./components/Header"
import Hero from "./components/Hero"
// import Review from "./components/Review"
import Features from "./components/Features"
import Download from "./components/Download"
import Frequent from "./components/Frequent.jsx"
import Simple from "./components/Simple.jsx"
import Footer from "./components/Footer.jsx"


function App() {
  

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Download />
      <Frequent />
      <Simple />
      <Footer />
    </>
  )
}

export default App
