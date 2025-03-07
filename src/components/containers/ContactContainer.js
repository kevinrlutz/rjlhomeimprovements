import React from 'react'
import './ContactContainer.css'
import facebookLikeImg from '../../images/facebook-like.png'

export default function ContactContainer() {
  return (
    <div>
      <div className="contact-container">
        <p>
          Call or email us anytime to schedule your free consultation! <br /><br />
          <a href="tel:845-566-4029">(845) 566-4029</a><br /><br />
          <a href='mailto:rjlhomeimprovements@msn.com'>rjlhomeimprovements@msn.com</a>
        </p>
        <p>You can also find us on Facebook:</p>
        <a href='https://www.facebook.com/robertjlutzhomeimprovements' target='_blank' rel='noreferrer' alt='Facebook Page Link' className='centered'>
          <img src={facebookLikeImg} width={200} alt='Like us on facebook!' />
        </a>
      </div>
        
    </div>
  )
}
