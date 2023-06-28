import React, { useContext, useState, useEffect } from 'react'
import { GlobalDataContext } from '../context/GlobalDataContext'
import Card from './Card'

function ListCards() {
  const { dentists } = useContext(GlobalDataContext)
  console.log(dentists)
  return (
    <div className='Container'>
      <h1>Listado de Dentistas</h1>
      <div className='ListCards'>
        {dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </div>
  )
}

export default ListCards
