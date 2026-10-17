import React from 'react'
import './WelcomeComponent.css'
import { Phone, Images, MapPin } from 'lucide-react'

const heroImage = 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=1600&auto=format&fit=crop'

export default function WelcomeComponent() {
  return (
    <section className='hero' style={{ backgroundImage: `url(${heroImage})` }}>
      <div className='hero-content'>
        <h1>"We take pride in our work"</h1>
        <p className='hero-counties'>
          <MapPin size={20} aria-hidden='true' />
          Serving Orange, Rockland, Dutchess &amp; Westchester Counties since 2006
        </p>
        <div className='hero-actions'>
          <a href='tel:8455664029' className='btn btn-primary'>
            <Phone size={20} aria-hidden='true' /> Call (845) 566-4029
          </a>
          <a href='#projects' className='btn btn-secondary'>
            <Images size={20} aria-hidden='true' /> See Our Work
          </a>
        </div>
      </div>
    </section>
  )
}
