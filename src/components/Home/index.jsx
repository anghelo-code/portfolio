import miniDino from './../../assets/dino-haker-3.png';
import "./style.component.css";

export const Home = () => {
  return (
    <section className="row home h-nav">

      <div className=" col-12 col-lg-6 my-lg-auto dino">
        <img src={ miniDino } alt="mini dino" className="img-fluid" />
      </div>
      <div className=" col-12 col-lg-6 my-lg-auto">
        <h1 className="display-3 name gradient__text">HOLA, SOY ANGHELO ALAGON</h1>
        <p className="display-5 job">Front-end Developer</p>
      </div>
    </section>
  )
}
