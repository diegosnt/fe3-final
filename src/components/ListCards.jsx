import React, { useContext, useState, useEffect } from 'react'
import { GlobalDataContext } from '../context/GlobalDataContext'

function ListCards() {
  const { dentists } = useContext(GlobalDataContext)
  //console.log(dentists);
  return (
    <>
      <h1>ListCards</h1>
      <ul>
        {dentists.map((user) => (
          <li key={user.id}>{user.name} | {user.username}</li>
        ))}
      </ul>
    </>
  )
}

export default ListCards
