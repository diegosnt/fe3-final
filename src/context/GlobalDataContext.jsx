import React, { createContext, useEffect, useState } from 'react'

export const GlobalDataContext = createContext({})

export default function GlobalDataContextProvider(props) {
  const { children } = props
  const [dentists, setDentists] = useState([])

  const contexData = 58
  const valor = contexData

  async function getDentists() {
    const response = await (
      await fetch('https://jsonplaceholder.typicode.com/users')
    ).json()
    setDentists(response)
  }

  const globalValues = {
    dentists,
    valor,
  }

  useEffect(() => {
    getDentists()
  }, [])

  return (
    <GlobalDataContext.Provider value={globalValues}>
      {props.children}
    </GlobalDataContext.Provider>
  )
}