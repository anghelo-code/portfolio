import { Button } from '../Shared/Button';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert2'

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_8nbxn3i","template_zfbs0ru", form.current, "L76HIYpRduMXuBcBS")
      .then((result) => {
        form.current.reset();
        swal.fire(
          'SEND!',
          'The Email Has Been Sent!',
          'success'
        )
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <form className="w-md-60 mx-auto" ref={ form } onSubmit={ sendEmail }>
      <div className="form-floating mb-3">
        <input type="text" className="form-control form__inputs" id="user_name" name="user_name" placeholder="Nombre ..." />
        <label htmlFor="user_name" className="form__label" >Nombre</label>
      </div>

      <div className="form-floating mb-3">
        <input type="email" className="form-control form__inputs" id="user_email" name="user_email" placeholder="name@example.com" />
        <label htmlFor="user_email" className="form__label" >Email</label>
      </div>

      <div className="form-floating">
        <textarea className="form-control form__inputs" placeholder="Tu mensaje" id="message" name="message" style={{ height: '400px' }}></textarea>
        <label htmlFor="message" className="form__label" >Comentario</label>
      </div>

      <Button type="submit" className="form__button">Enviar</Button>
    </form>
  )
}
