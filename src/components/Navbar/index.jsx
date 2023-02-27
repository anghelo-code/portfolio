import React from 'react'
import { Logo } from './Logo'
import { Nav } from './Nav'
import { SocialNetworks } from './SocialNetworks'

export const Navbar = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bd-navbar sticky-top bg-dark">
      <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap">
        <Logo />

        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Nav />

          <SocialNetworks />
        </div>
      </nav>
    </header>
  )
}
