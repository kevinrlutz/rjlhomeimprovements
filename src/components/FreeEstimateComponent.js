import React from 'react';
import './FreeEstimateComponent.css'
import { Phone } from 'lucide-react'

export default function FreeEstimateComponent() {
  return (
    <a href='tel:8455664029' className='free-estimate-component'>
        <Phone size={28} aria-hidden='true' />
        <div>
            <div className='estimate-label'>CALL FOR A FREE ESTIMATE</div>
            <div className='estimate-number'>(845) 566-4029</div>
        </div>
    </a>
  )
}
