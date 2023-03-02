import React from 'react'
import { Card } from './Card'

export const Projects = () => {
  return (
    <section className="h-auto">
      <h1 className="gradient__text text-center display-4 fw-bold">Projects</h1>
      <div className="row g-4 p-4 py-5">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      
    </section>
  )
}
