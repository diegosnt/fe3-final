import dentistImage from '../assets/doctor.jpg'
import { GlobalDataContext } from '../context/GlobalDataContext'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'


function Card({ dentist, id, likeFunct }) {
  const [like, setLike] = useState(
    JSON.parse(localStorage.getItem('dentists')).some(
      (dentist) => dentist.id === id
    )
  )
  const dentistDetail = useNavigate()

  const dentistClick = () => {
    dentistDetail(`/dentist/${dentist.id}`)
  }

  const handleLike = () => {
    likeFunct(id)
    setLike(!like)
  }

  return (
    <div className="Card">
      <div onClick={dentistClick}>
        <img src={dentistImage} />
        <p>{dentist.name}</p>
        <p>({dentist.username})</p>
      </div>
      <button onClick={handleLike}> {like? 'Quitar' : 'Guardar'}</button>
    </div>
  )
}

export default Card
