import { useState, useEffect } from 'react'
import reactLogo from './assets/cake.png'
import viteLogo from '/spider.png'
import './App.css'
import ReactAudioPlayer from 'react-audio-player';

function App() {
  const [count, setCount] = useState(60)
  const [rocking, setRocking] = useState(false)
  const [ligthOn, setLightOn] = useState(true)

  useEffect(() => {
    if (rocking) {
      if (ligthOn) {
        setTimeout(() => {
          setLightOn(false)
        }, 200)
      } else {
        setTimeout(() => {
          setLightOn(true)
        }, 200)
      }
    }
  }, [rocking, ligthOn])



  return (
    <div style={{ backgroundColor: `${ligthOn ? "rgba(86, 15, 88, 0.4)" : "rgba(0, 0, 0, 0.8)"}`, width: "100%", height: "100%", margin: "0px" }}>


      <div >
        <ReactAudioPlayer
          style={{ marginBottom: "10%", marginTop: "20%" }}
          src="/song.mp3"
          autoPlay
          controls
          onPlay={() => {
            setTimeout(() => {
              setRocking(true)
              console.log("Rpcking?: ", rocking)
            }, 40000)
          }}
          onEnded={() => setRocking(false)}
        />
      </div>
      <div>
        <p>Dale play!</p>
      </div>
      <div>
        <a href="https://www.nationalgeographic.com.es/mundo-animal/aranas-azules-son-tan-extranas-como-parecen_20804" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.youtube.com/watch?v=FLMVB0B1_Ts" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{ color: "#ffa8ff" }}>Revela los secretos de tu juventud</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + Math.floor(Math.random() * 10))}>
          Te quedan {count} años de vida
        </button>
        <p style={{ color: "#ffa860" }}>
          Cuando sales con un programador con potencial pero sin dinero :(
        </p>
      </div>
      <p style={{ color: "#ffffff" , textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)"}}>
        Aquí es sólo el comienzo...<br /><br />

        En tus ojos <br />
        de cuya oscuridad emanan<br />
        pequeños destellos<br />
        verdes y amarillos,<br />
        amarillo pálido.<br /><br />

        Recorren el espacio<br />
        tales brillos<br />
        y retornan<br />
        en silencio<br />
        y con frío.<br /><br />

        Se recogen,<br />
        se aprovechan<br />
        de la eternidad,<br />
        chocan contra<br />
        la substancia.<br /><br />

        Más aún,<br />
        el frio permanece. <br />
        Las llanuras,<br />
        que supiste áridas,<br />
        están floridas.<br /><br />

        Lloras un poco.<br />
        Más destellos<br />
        rebotan aquí<br />
        donde también<br />
        todo comienza<br /><br />

        ¡Que tus años sean cada vez más felices!<br /><br />

        The fancat<br /><br />


      </p>
    </div>
  )
}

export default App
