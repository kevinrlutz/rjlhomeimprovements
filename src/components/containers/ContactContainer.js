import React from 'react'
import './ContactContainer.css'
import { Phone, Mail, ThumbsUp } from 'lucide-react'

export default function ContactContainer() {
  return (
    <div className="contact-container">
      <p>Call or email us anytime to schedule your free consultation!</p>
      <ul className='contact-list'>
        <li>
          <Phone size={24} aria-hidden='true' />
          <a href="tel:845-566-4029">(845) 566-4029</a>
        </li>
        <li>
          <Mail size={24} aria-hidden='true' />
          <a href='mailto:rjlhomeimprovements@msn.com'>rjlhomeimprovements@msn.com</a>
        </li>
      </ul>
      <a
        href='https://www.facebook.com/robertjlutzhomeimprovements'
        target='_blank'
        rel='noreferrer'
        className='btn btn-facebook'
      >
        <ThumbsUp size={20} aria-hidden='true' /> Find us on Facebook
      </a>
    </div>
  )
}
