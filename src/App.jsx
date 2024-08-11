import { useState } from 'react' 
import './App.css'
import Conversor from './Conversor.jsx'

function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')

  const [logueado, setLogueado] = useState(false)

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

  function cambiarClave(evento) {
    setClave(evento.target.value)
  }

  function Ingresar() {
    if (usuario === 'admin' && clave === 'admin') {
      setLogueado(true)
      alert('Bienvenido')
    } else {
      alert('Usuario o contraseña incorrectos')
    }
  }

  if (logueado) {
        return <Conversor />
      }

  return (
        <>
          <h1>Inicio de sesión</h1>
          <input placeholder='Usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
          <input placeholder='Clave' type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} />
          <button onClick={Ingresar}>Ingresar</button>
        </>
  )
}

export default App