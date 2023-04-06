export const Form = () => {
  return (
    <form className="w-md-60 mx-auto">
      <div className="form-floating mb-3">
        <input type="text" className="form-control form__inputs" id="Name" placeholder="Nombre ..." />
        <label htmlFor="floatingInput" className="form__label" >Nombre</label>
      </div>

      <div className="form-floating mb-3">
        <input type="email" className="form-control form__inputs" id="Email" placeholder="name@example.com" />
        <label htmlFor="Email" className="form__label" >Email</label>
      </div>

      <div className="form-floating">
        <textarea className="form-control form__inputs" placeholder="Tu mensaje" id="mensaje" style={{height: '400px'}}></textarea>
        <label htmlFor="mensaje" className="form__label" >Comentario</label>
      </div>
    </form>
  )
}
