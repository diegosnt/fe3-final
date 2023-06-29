import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CardDetail() {
  const dentistParam = useParams()
  const [dentist, setDentist] = useState()
  const [loading, setLoading] = useState(true)

  async function getDentist() {
    setLoading(true)
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${dentistParam.id}`
    )
    const data = await response.json()
    setDentist(data)
    setLoading(false)
  }
  useEffect(() => {
    getDentist()
  }, [])

  console.log(dentist)
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Detalles del Dentista</h1>
          <article>
            <p>Nombre: {dentist.name}</p>
            <p>Email: {dentist.email}</p>
            <p>Telefono: {dentist.phone}</p>
            <p>Website: {dentist.website}</p>
          </article>
        </div>
      )}
    </div>
  )
}

export default CardDetail
