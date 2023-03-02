import { LinksCard } from "./LinksCard"

export const CardBack = () => {
  return (
    <div className="card-body position-absolute card__back h-100">
      <h5 className="card-title text-center text-blue fs-3">Elmo Horario</h5>

      <p className="card-text text-light p-card">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>

      <div className="px-5 mx-5 d-flex justify-content-between">
        <LinksCard  icon="bi bi-github" link="https://github.com/anghelo-code"/>

        <LinksCard  icon="bi bi-globe" link="https://github.com/anghelo-code"/>
      </div>
    </div>
  )
}
