import elmoHorario from '../../assets/elmoHorario.jpg';
import { CardBack } from './CardBack';
import './style.component.css';

export const Card = () => {

  const styleCard = {
    width: '18 rem',
  }
  return (
    <article className="col-md-4">
      <div className="card h-100 position-relative" style={styleCard}>
        <img src={elmoHorario} className="card-img-top" alt="Elmo Horario" />

        <CardBack />
      </div>
    </article>
  )
}
