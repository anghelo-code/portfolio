import { CarouselIndicators } from './CarouselIndicators';
import { CarouselInner } from './CarouselInner';

export const Carousel = () => {
  return (
    <div id="carouselExperience" className="carousel slide " style={{ maxWidth: '800px' }}>
      <CarouselIndicators n={ 3 }/>

      <CarouselInner />

      <button className="carousel-control-prev carousel__prev" type="button" data-bs-target="#carouselExperience" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next carousel__next" type="button" data-bs-target="#carouselExperience" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      
    </div>
  )
}
