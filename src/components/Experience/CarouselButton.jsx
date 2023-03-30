export const CarouselButton = ({ className = '', index }) => {
  return (
    <button 
      type="button" 
      className={ className }
      data-bs-target="#carouselExperience" 
      data-bs-slide-to={ index } 
      aria-label={ `Slide ${ index + 1 }` }
    >
    </button>
  )
}
