export const Link = ({ url, icon, text }) => {
  return (
    <a href={ url } className="nav-link footer__icon" target="_blank">
      <i className={`bi ${ icon }`}></i>
      <small className="d-md-none ms-2">{ text }</small>
    </a>
  )
}
