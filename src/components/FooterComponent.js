import React from 'react'
import './FooterComponent.css'

export default function FooterComponent() {
  const getCurrentYear = () => {
    const currentDate = new Date()
    return currentDate.getFullYear()
  }
  return (
    <div className='footer-component'>
      <p>
        Website created by&nbsp;
        <strong>
          <a href="http://kevinlutz.me/">Kevin Lutz</a>
        </strong>
      </p>
      <p>&copy; {getCurrentYear()}</p>
    </div>
  )
}
