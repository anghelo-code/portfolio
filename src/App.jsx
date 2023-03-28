import { AboutMe } from "./components/AboutMe"
import { Experience } from "./components/Experience"
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
        
        <br /><br /><br /><br /><br />
      </main>
    </>
  )
}
