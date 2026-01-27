import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import Calendar from "./components/windows/Calendar"

function App() {

  const [windowsState, setWindowsState] = useState({
    github: { open: false, minimized: false },
    resume: { open: false, minimized: false },
    spotify: { open: false, minimized: false },
    cli: { open: false, minimized: false },
    calendar: { open: false, minimized: false }
  })
  
  const [zIndexes, setZIndexes] = useState({
    github: 1,
    resume: 1,
    spotify: 1,
    cli: 1,
    calendar: 1
  })

  const bringToFront = (windowName) => {
    const maxZ = Math.max(...Object.values(zIndexes))
    setZIndexes(prev => ({
      ...prev,
      [windowName]: maxZ + 1
    }))
  }
  
  
  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} bringToFront={bringToFront} />
      {windowsState.github.open && !windowsState.github.minimized && (
  <Github windowName="github" setWindowsState={setWindowsState} zIndex={zIndexes.github} bringToFront={bringToFront} />
)}

{windowsState.resume.open && !windowsState.resume.minimized && (
  <Resume windowName="resume" setWindowsState={setWindowsState} zIndex={zIndexes.resume} bringToFront={bringToFront} />
)}

{windowsState.spotify.open && !windowsState.spotify.minimized && (
  <Spotify windowName="spotify" setWindowsState={setWindowsState} zIndex={zIndexes.spotify} bringToFront={bringToFront} />
)}

{windowsState.cli.open && !windowsState.cli.minimized && (
  <Cli windowName="cli" setWindowsState={setWindowsState} zIndex={zIndexes.cli} bringToFront={bringToFront} />
)}

{windowsState.calendar.open && !windowsState.calendar.minimized && (
  <Calendar windowName="calendar" setWindowsState={setWindowsState} zIndex={zIndexes.calendar} bringToFront={bringToFront} />
)}



    </main>
  )
}

export default App
