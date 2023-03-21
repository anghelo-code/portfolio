import { TextAboutMe } from "./TextAboutMe";
import imgDesktop from "../../assets/laptop.jpg";
import "./style.component.css";


export const AboutMe = () => {
  return (
    <section className="my-lg-5" id="aboutMeId">
      <div className="row h-auto">
        <div className="col-lg-6 p-4">
          <img src={ imgDesktop } alt="desktop" className="img-fluid rounded-5"/>
        </div>

        <div className="col-lg-6 p-lg-5 d-flex align-items-center flex-column">
          <TextAboutMe />
        </div>
      </div>
    </section>
  )
}
