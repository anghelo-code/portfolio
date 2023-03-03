import React from 'react'
import { H1 } from '../H1'
import { Card } from './Card'

export const Projects = () => {
  return (
    <section className="h-auto text-center">
      {/* <h1 className="gradient__text text-center display-4 fw-bold">Projects</h1> */}
      <H1 text="Projects" />
      <div className="row g-4 p-4 py-5">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

      <button className="btn btn-outline-primary btn-lg mb-5">ver mas</button>      
    </section>
  )
}
