import { CarouselIndicators } from "./CarouselIndicators"
import { CarouselInner } from "./CarouselInner"

export const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" style={{ maxWidth: '800px' }}>
      <CarouselIndicators />

      <CarouselInner />

      <button className="carousel-control-prev carousel__prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next carousel__next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      
    </div>
  )
}
