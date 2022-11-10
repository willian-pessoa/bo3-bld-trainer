import React from 'react'

import { useNavigate } from 'react-router-dom'

import "./back-button.styles.scss"

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <div onClick={()=>navigate(-1)} className='back-button'>
      Back
    </div>
  )
}

export default BackButton
