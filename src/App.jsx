import { AboutMe } from "./components/AboutMe"
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
      </main>
    </>
  )
}
