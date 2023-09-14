import { CardBack } from './CardBack';
import { getImageUrl } from '../../helpers/getImageUrl'

export const Card = ({ data }) => {
  const { src, ...info } = data
  const textSrc = 'projects/' + src
  const srcComplete = getImageUrl(textSrc)

  const styleCard = {
    width: '18 rem',
  }
  return (
    <article className="col-lg-4 col-md-6">
      <div className="card h-100 position-relative" style={styleCard}>
        <img src={ srcComplete } className="card-img-top" alt={ data.title } />

        <CardBack info={ info }/>
      </div>
    </article>
  )
}
