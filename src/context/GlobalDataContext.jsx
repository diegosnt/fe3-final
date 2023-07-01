import React, { createContext, useEffect, useState } from 'react'

export const GlobalDataContext = createContext({})

export default function GlobalDataContextProvider(props) {
  const [dentists, setDentists] = useState([])

  const [dentistsFavs, setDentistsFavs] = useState([])
  const [dentistsFavsList, setDentistsFavsList] = useState(
    JSON.parse(localStorage.getItem('dentists')) || '[]'
  )

  async function getDentists() {
    const response = await (
      await fetch('https://jsonplaceholder.typicode.com/users')
    ).json()
    setDentists(response)
  }

  useEffect(() => {
    getDentists()

    const data = localStorage.getItem('dentists')
    if (data) {
      setDentistsFavs(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('dentists', JSON.stringify(dentistsFavs))
    setDentistsFavsList(dentistsFavs)
  }, [dentistsFavs])

  function like(id) {
    if (dentistsFavs.some((dentist) => dentist.id === id)) {
      setDentistsFavs((paramDentistFav) => {
        return paramDentistFav.filter((dentist) => dentist.id !== id)
      })
    } else {
      const dentistLike = dentists.find((dentist) => dentist.id === id)
      setDentistsFavs((paramDentistFav) => {
        return [...paramDentistFav, dentistLike]
      })
    }
  }

  const globalValues = {
    dentists,
    dentistsFavsList,
    like,
  }
  return (
    <GlobalDataContext.Provider value={globalValues}>
      {props.children}
    </GlobalDataContext.Provider>
  )
}
