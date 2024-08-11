import { useState } from 'react' 
import './App.css'

function Conversor() {
  const [textoAVoz, setTextoAVoz] = useState('')
  const [vozATexto, setVozATexto] = useState('')

  function cambiarTexto(evento) {
    setTextoAVoz(evento.target.value)
  }

  function convertirTextoAVoz() {
    const synthesis = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(textoAVoz)
    synthesis.speak(utterThis)
  }

  function resultado(event) {
    setVozATexto(event.results[0][0].transcript)
  }

  function grabarVozATexto() {
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = 'es-ES'
    recognition.start()
    recognition.onresult = resultado 
  }

  return (
    <>
      <>
        <div className="App">
          <h1>Conversor TTS y STT</h1>
          <br />
          <h3>Texto a voz</h3>
          <input type='text' id="textoAVoz" value={textoAVoz} onChange={cambiarTexto} />
          <button onClick={convertirTextoAVoz} >Convertir</button>

          <h3>Conversor de voz a texto</h3>
          <button onClick={grabarVozATexto} >Grabar</button>
          {vozATexto}
        </div>
      </>
    </>
  );
}

export default Conversor