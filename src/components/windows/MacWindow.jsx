import React, { useMemo, useEffect, useState } from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"


const APP_TITLES = {
    cli: "zsh",
    github: "GitHub",
    vscode: "VS Code",
    calendar: "Calendar",
    resume: "Resume"
  }
  
  const USERNAME = "apoorvagupta"
  

const MacWindow = ({
  children,
  width = "60vw",
  height = "65vh",
  windowName,
  setWindowsState,
  zIndex = 1,
  bringToFront
}) => {
    const [revealed, setRevealed] = useState(false)

useEffect(() => {
  requestAnimationFrame(() => setRevealed(true))
}, [])


  const { x, y, w, h } = useMemo(() => {
    const vw = window.innerWidth
    const vh = window.innerHeight

    const wPx = vw * 0.6
    const hPx = vh * 0.65

    return {
      w: wPx,
      h: hPx,
      x: (vw - wPx) / 2,
      y: (vh - hPx) / 2
    }
  }, [])

  const appTitle = APP_TITLES[windowName] ?? windowName
  useEffect(() => {
    document.title = `${USERNAME} – ${appTitle}`
  }, [appTitle])
  


  return (
    <Rnd
      default={{
        width: w,
        height: h,
        x,
        y
      }}
      minWidth={400}
      minHeight={300}
      style={{ zIndex }}
      onMouseDown={() => bringToFront(windowName)}
    >
     <div className={`window ${revealed ? "reveal" : ""}`}>
        <div className="nav">
          <div className="dots">
            <div
              onClick={() =>
                setWindowsState(state => ({
                  ...state,
                  [windowName]: { open: false, minimized: false }
                }))
              }
              className="dot red"/>
            <div onClick={()=>{
               setWindowsState(s => ({
                ...s,
                [windowName]: { open: true, minimized: true }
              }))
            }} className="dot yellow" />
            <div className="dot green" />
          </div>

          <div className="title">
          <p>{USERNAME} – {appTitle}</p>
          </div>
        </div>

        <div className="main-content">
          {children}
        </div>
      </div>
    </Rnd>
  )
}

export default MacWindow
