import { CarouselItem } from "./CarouselItem"
import laptop from '../../assets/laptop.jpg';

export const CarouselInner = () => {
  return (
    <div className="carousel-inner">
      <CarouselItem 
        src={ laptop } 
        tittle="Laptop" 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis praesentium molestias odit vel odio quidem dicta repudiandae porro sed repellendus!"  
        className="active"
      /> 


    </div>
  )
}
