import miniDino from './../../assets/dino-haker-2.png';

export const Home = () => {
  return (
    <section className="row home vh-100">

      <div className="col-lg-6 my-auto">
        <img src={ miniDino } alt="mini dino" />
      </div>
      <div className="col-lg-6 my-auto">
        <h1>HOLA, SOY ANGHELO ALAGON</h1>
        <p>Front-end Developer</p>
      </div>
    </section>
  )
}
