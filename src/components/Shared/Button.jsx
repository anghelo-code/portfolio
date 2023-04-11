import './style.component.css';

export const Button = ({ type = 'button', children, onClick = () => {}, className='' }) => {
  return (
    <>
      <button 
        className={`btn btn-outline-primary btn-lg mb-lg-5 my-4 button ${ className }`}  
        type={ type }  
        onClick={ onClick } 
      >
        { children }
      </button>
    </>
  )
}
