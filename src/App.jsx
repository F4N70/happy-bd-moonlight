import { useState } from 'react'
import reactLogo from './assets/cake.png'
import viteLogo from '/spider.png'
import './App.css'
import ReactAudioPlayer from 'react-audio-player';

function App() {
  const [count, setCount] = useState(60)

  return (
    <>
      <div>
        <ReactAudioPlayer
          src="/song.mp3"
          autoPlay
          controls
        />
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{ color: "#ffa8ff" }}>Revela los secretos de tu juventud</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + Math.floor(Math.random() * 10))}>
          Te quedan {count} años de vida
        </button>
        <p style={{ color: "#ffa860" }}>
          Cuando sales con un programador con ideas pero sin ganas
        </p>
      </div>
      <p style={{ color: "#ffffff" }}>
        Este es sólo el comienzo...<br /><br />

        En tus ojos <br />
        de cuya oscuridad emanan<br />
        pequeños destellos<br />
        verdes y amarillos,<br />
        amarillo palido<br /><br />

        Recorren el espacio<br />
        tales brillos<br />
        y retornan<br />
        en silencio<br />
        y con frio<br /><br />

        Se recogen,<br />
        se aprovechan<br />
        de la eternidad,<br />
        chocan contra<br />
        la substancia<br /><br />

        Más aún,<br />
        el frio permanece. <br />
        Las llanuras,<br />
        que supiste áridas,<br />
        están floridas<br /><br />

        Lloras un poco.<br />
        Más destellos<br />
        rebotan aquí<br />
        donde tambien<br /> 
        todo comienza<br /><br />

        Que tus años sean cada vez más felices!<br /><br />

        The fancat<br /><br />


      </p>
    </>
  )
}

export default App
