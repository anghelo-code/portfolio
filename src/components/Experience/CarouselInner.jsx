import { CarouselItem } from "./CarouselItem"
import laptop from '../../assets/laptop.jpg';

export const CarouselInner = () => {
  return (
    <div className="carousel-inner">
      <CarouselItem
        src={laptop}
        tittle="ITEP Travel"
        text="
        Optimicé el rendimiento y agregué nuevas características a las páginas web de la empresa, gestioné las redes sociales de la empresa y aumenté el flujo de visitas a las páginas web, utilizando HTML, CSS, JavaScript, Bootstrap, Canva y PHP para llevar a cabo mis tareas.
        "
        className="active"
        time="Setiembre  2022 - Presente"
      />

      <CarouselItem
        src={laptop}
        tittle="Primer lugar en CUSCONTEST XVIII ( nivel intermedio):"
        text="
        Trabajando en equipo con dos compañeros.
        Compitiendo contra varios equipos de programadores experimentados.
        "
        time="Agosto  2022 (ACM chapter Cusco)"
      />
      <CarouselItem
        src={laptop}
        tittle="Tercer lugar en CUSCONTEST XVII ( nivel principiante):"
        text="
        Compitiendo contra equipos de hasta 3 personas.
        Resolviendo una amplia gama de problemas desafiantes y complejos. 
        "
        time="Enero  2022 (ACM chapter Cusco)"
      />
    </div>
  )
}
