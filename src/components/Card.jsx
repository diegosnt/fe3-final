import dentistImage from '../assets/doctor.jpg'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'

function Card(props) {
  const { dentist } = props
  const dentistDetail = useNavigate()

  const dentistClick = () => {
    dentistDetail(`/dentist/${dentist.id}`)
  }

  return (
    <div className="Card" onClick={dentistClick}>
      <img src={dentistImage} />
      <p>{dentist.name}</p>
      <p>({dentist.username})</p>
    </div>
  )
}

export default Card
