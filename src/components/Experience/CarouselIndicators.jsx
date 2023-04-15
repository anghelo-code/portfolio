import { CarouselButton } from './CarouselButton';

export const CarouselIndicators = ({ n }) => {
  const firstComponentProps = { className: 'active', index: 0 };
  const componentsArray = new Array(n).fill(null);

  return (
    <div className="carousel-indicators carousel__indicators">

      {/* Renderizamos el primer componente con sus props */}
      {n > 0 && <CarouselButton {...firstComponentProps} />}

      {/* Renderizamos los componentes restantes */}
      {
      componentsArray.map((_, index) => {
        if (index === 0) return null;
        return <CarouselButton key={ index } index={ index }  />;
      })
      }
    </div>
  )
}
