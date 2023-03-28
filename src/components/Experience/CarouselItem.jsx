export const CarouselItem = ({ src, tittle, text, className }) => {
  let classname = `carousel-item ${className}`
  return (
    <article className={classname}>
      <div className="card text-bg-dark"  >
        <div className="row g-0">
          <div className="col-md-6">
            <img src={ src } className="img-fluid rounded-start" alt={ tittle } />
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title">{ tittle }</h3>

              <p className="card-text">
                {text}
              </p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}