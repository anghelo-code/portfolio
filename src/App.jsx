import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"

export const App = () => {
  return (
    <>
      <Navbar/>
      <main className="container main">
        <Home/> 

        <Projects/>
      </main>
    </>
  )
}
