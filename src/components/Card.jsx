import dentistImage from '../assets/doctor.jpg'
import React from 'react'

function Card(props) {
  const { dentist } = props
  return (
    <>
      <div className='Card'>
        <img src={dentistImage} />
        <p>{dentist.name}</p>
        <p>({dentist.username})</p>
        {/* <p>Id: {dentist.id}</p> */}
      </div>
    </>
  )
}

export default Card
