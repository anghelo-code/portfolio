import { H1 } from '../Shared/H1';
import './style.component.css';
import { faCss3Alt, faSquareJs, faHtml5, faReact, faPython, faGithub, faPhp, faLinux, faGitAlt, faBootstrap, faDocker, faWindows } from '@fortawesome/free-brands-svg-icons';
import { LogoFontAwesome } from './LogoFontAwesome';
import { LogoSvg } from './LogoSvg';
import { MysqlSvg, SqlServerSvg, PhotoshopSvg, DjangoSvg } from './svg';

export const Skills = () => {
  return (
    <section className="m-4" id="skillsId">
      <H1 text="Mis Habilidades" />

      <div className="row gy-4">
        <LogoFontAwesome classLogo={ faHtml5 } name="Html" />
        <LogoFontAwesome classLogo={ faCss3Alt } name="Css" />
        <LogoFontAwesome classLogo={ faSquareJs } name="Javascript"/>
        <LogoFontAwesome classLogo={ faGitAlt } name="Git" />
        <LogoFontAwesome classLogo={ faGithub } name="Github" />
        <LogoFontAwesome classLogo={ faReact } name="React Js"/>
        <LogoFontAwesome classLogo={ faPython } name="Python"/>
        <LogoSvg svg={ <DjangoSvg /> } name="Django" />
        <LogoFontAwesome classLogo={ faPhp } name="Php" />
        <LogoFontAwesome classLogo={ faLinux } name="Linux" />
        <LogoFontAwesome classLogo={ faWindows } name="Windows" />
        <LogoFontAwesome classLogo={ faBootstrap } name="Bootstrap" />
        <LogoSvg svg={ <MysqlSvg /> } name="MySql" />
        <LogoSvg svg={ <SqlServerSvg  /> } name="Sql Server" />
        <LogoFontAwesome classLogo={ faDocker } name="Docker" />
        <LogoSvg svg={ <PhotoshopSvg /> } alt="photoshop" name="Photoshop" />
      </div>
    </section>
  )
}
