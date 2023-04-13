import { Button } from '../Shared/Button'
import { H1 } from '../Shared/H1'
import { Card } from './Card'
import './style.component.css';

export const Projects = () => {
  return (
    <section className="h-auto text-center" id="projectsId">
      <H1 text="Proyectos"/>
      <div className="row g-4 p-lg-4 py-lg-5 px-3">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

      {/* <button className="btn btn-outline-primary btn-lg mb-lg-5 my-4">ver mas</button>   */}
      <Button >Ver Mas</Button>    
    </section>
  )
}
