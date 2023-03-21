import { H1 } from "../Shared/H1";

export const TextAboutMe = () => {
  return (
    <>
      <H1 text="Sobre Mí" />
      <p className="text-lg-start fs-6 text-about text-center">
        ¡Hola! Soy <b>Anghelo Alagón</b>, un desarrollador <b>front-end</b> con habilidades para aprender rápidamente y adaptarme de manera óptima a las tecnologías actuales. Actualmente estudio en una universidad y trabajo como desarrollador en la empresa <b>Itep Travel</b>, donde he tenido la oportunidad de mejorar mis habilidades técnicas trabajando en proyectos desafiantes. <br /> <br />

        Mi enfoque principal es crear soluciones de alta calidad que sean visualmente atractivas y funcionales. Siempre busco mejorar mis habilidades y aprender nuevas tecnologías para poder ofrecer soluciones de vanguardia.
      </p>

      <button className="btn btn-outline-primary btn-lg">Descargar CV</button>
    </>

  )
}