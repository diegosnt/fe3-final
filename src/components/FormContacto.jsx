import { useState } from "react";

function FormContacto(props) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length < 3 || nombre.charAt(0) === " " || email.length < 6) {
      setError("Por favor chequea que la información sea correcta");
    } else {
      setError("");
      props.saveUsuario(nombre, email);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="nombre"
        value={nombre}
        placeholder="Ingresa tu nombre"
        onChange={onChangeNombre}
      />
      <br />
      <input
        type="email"
        id="email"
        value={email}
        placeholder="Ingresa tu email"
        onChange={onChangeEmail}
      />
      <br />
      <button className="button">Enviar</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default FormContacto
