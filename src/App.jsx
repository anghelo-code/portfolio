import { AboutMe } from "./components/AboutMe"
import { Contact } from "./components/Contact"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"
import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

export const App = () => {
  return (
    <>
      <Navbar/>
      <main className="container main">
        <Home/> 

        <Projects/>

        <AboutMe/>

        <Skills/>

        <Experience/> 
        
        <Contact/>

        <br /><br /><br /><br /><br />
      </main>

      <Footer/>
    </>
  )
}
