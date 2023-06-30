import FormContacto from './FormContacto'
import FormSend from './FormSend'
import { useState } from 'react'

function Formulario() {
  const [usuario, setUsuario] = useState({})

  const saveUsuario = (nombre, email) => {
    setUsuario({ nombre, email })
  }

  return (
    <div>
      <h1>Contacto</h1>
      <FormContacto saveUsuario={saveUsuario} />
      {Object.keys(usuario).length === 0 ? undefined : (
        <FormSend nombre={usuario.nombre} email={usuario.email} />
      )}
    </div>
  )
}

export default Formulario
