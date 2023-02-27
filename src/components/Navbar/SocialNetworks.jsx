export const SocialNetworks = () => {
  return (
    <ul className="navbar-nav flex-row flex-wrap ms-md-auto row">
      <li className="nav-item col-4 col-lg-auto px-auto">
        <a href="https://www.linkedin.com/in/anghelo-alagon-fernandez-2b7867213/" className="nav-link" target="_blank">
          <i class="bi bi-linkedin"></i>
          <small className="d-lg-none ms-2">Linkedin</small>
        </a>
      </li>

      <li className="nav-item col-4 col-lg-auto">
        <a href="https://github.com/anghelo-code" className="nav-link" target="_blank" >
          <i class="bi bi-github"></i>
          <small className="d-lg-none ms-2">GitHub</small>
        </a>
      </li>

      <li className="nav-item col-4 col-lg-auto">
        <a href="https://twitter.com/Anghelo_Code" className="nav-link" target="_blank">
          <i class="bi bi-twitter"></i>
          <small className="d-lg-none ms-2">Twitter</small>
        </a>
      </li>
    </ul>
  )
}
