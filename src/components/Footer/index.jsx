import { Link } from "./Link";
import './style.component.css';

export const Footer = () => {
  return (
    <footer className="h-auto footer">
      <div className="container">
        <div className="row  justify-content-md-center p-4 pb-0">
          <div className="col-md-4 d-flex justify-content-between d-flex align-items-center flex-column flex-md-row">
            <Link
              url="https://www.linkedin.com/in/anghelo-alagon-fernandez-2b7867213/"
              icon="bi-linkedin"
              text="Linkedin"
            />
            <Link
              url="https://github.com/anghelo-code"
              icon="bi-github"
              text="GitHub"
            />
            <Link
              url="https://twitter.com/Anghelo_Code"
              icon="bi-twitter"
              text="Twitter"
            />
            <Link
              url="mailto:anghelo.alagon.02@gmail.com"
              icon="bi-envelope-fill"
              text="Email"
            />
          </div>
        </div>
        <div className="text-center py-3">
          <small className="footer__small">Anghelo Alagon | Fron End Developer</small>
        </div>
      </div>


    </footer>
  )
}
