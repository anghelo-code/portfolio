import { LinksCard } from './LinksCard';

export const CardBack = ({info}) => {

  const { text, title, link, github } = info;
  return (
    <div className="card-body position-absolute card__back h-100 w-100">
      <h5 className="card-title text-center text-blue fs-3">{ title }</h5>

      <p className="card-text text-light p-card">
        { text }
      </p>

      <div className="px-5 mx-5 d-flex justify-content-between">
        <LinksCard  icon="bi bi-github" link={ github }/>

        <LinksCard  icon="bi bi-globe" link={ link } />
      </div>
    </div>
  )
}
