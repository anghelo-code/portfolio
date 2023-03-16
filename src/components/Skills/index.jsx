import { H1 } from "../H1";
import './style.component.css';
import { faCss3Alt, faSquareJs, faHtml5, faReact, faPython, faGithub, faPhp, faLinux, faApple, faGitAlt, faBootstrap, faDocker, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { LogoFontAwesome } from "./LogoFontAwesome";
import { LogoSvg } from "./LogoSvg";
import django from '../../assets/django.svg';
import mysql from '../../assets/mysql.svg';
import sqlServer  from '../../assets/sql-server.svg';
import photoshop from '../../assets/photoshop.svg';

export const Skills = () => {
  return (
    <section className="m-4">
      <H1 text="Mis Habilidades" />

      <div className="row gy-4">
        <LogoFontAwesome classLogo={ faHtml5 } />
        <LogoFontAwesome classLogo={ faCss3Alt } />
        <LogoFontAwesome classLogo={ faSquareJs } />
        <LogoFontAwesome classLogo={ faGitAlt } />
        <LogoFontAwesome classLogo={ faGithub } />
        <LogoFontAwesome classLogo={ faReact } />
        <LogoFontAwesome classLogo={ faPython } />
        <LogoSvg svg={ django } alt="django"/>
        <LogoFontAwesome classLogo={ faPhp } />
        <LogoFontAwesome classLogo={ faLinux } />
        <LogoFontAwesome classLogo={ faWindows } />
        <LogoFontAwesome classLogo={ faBootstrap } />
        <LogoSvg svg={ mysql } alt="mysql"/>
        <LogoSvg svg={ sqlServer } alt="sql server"/>
        <LogoFontAwesome classLogo={ faDocker } />
        <LogoSvg svg={ photoshop } alt="photoshop"/>
      </div>
    </section>
  )
}
