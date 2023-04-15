import { Carousel } from './Carousel';
import { H1 } from '../Shared/H1';
import './style.component.css';


export const Experience = () => {
  return (
    <section className="row h-auto justify-content-center mb-5" id="experienceId">
      <H1 text="Experiencia y Logros" />

      <Carousel />

    </section>
  )
}
