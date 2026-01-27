import React from 'react'
import "./dock.scss"

const Dock = ({ windowsState, setWindowsState, bringToFront }) => {

  const openWindow = (name) => {
    setWindowsState(s => ({
      ...s,
      [name]: {
        ...s[name],
        open: true,
        minimized: false
      }
    }))
    bringToFront(name)
  }

  return (
    <footer className="dock">

      <div className="icon github" onClick={() => openWindow("github")}>
        <span className="tooltip">GitHub</span>
        <img src="/doc-icons/github.svg" alt="GitHub" />
      </div>

      <div className="icon pdf" onClick={() => openWindow("resume")}>
        <span className="tooltip">Resume</span>
        <img src="/doc-icons/pdf.svg" alt="Resume" />
      </div>

  <div className="icon calender" onClick={() => openWindow("calendar")}>
  <span className="tooltip">Calendar</span>
  <img src="/doc-icons/calender.svg" alt="Calendar" />
</div>



      <div className="icon spotify" onClick={() => openWindow("spotify")}>
        <span className="tooltip">Spotify</span>
        <img src="/doc-icons/spotify.svg" alt="Spotify" />
      </div>

      <div
        className="icon mail"
        onClick={() => window.open("mailto:apoorvag861@gmail.com", "_blank")}
      >
        <span className="tooltip">Mail</span>
        <img src="/doc-icons/mail.svg" alt="Mail" />
      </div>

     

      <div
        className="icon link"
        onClick={() => window.open("https://www.linkedin.com/in/apoorva2394/", "_blank")}
      >
        <span className="tooltip">LinkedIn</span>
        <img src="/doc-icons/link.svg" alt="LinkedIn" />
      </div>

      <div
         className="icon leetcode"
         onClick={() => window.open("https://leetcode.com/u/apoorvag861/", "_blank")}
       >
       <span className="tooltip">LeetCode</span>
     <img src="/doc-icons/leetcode.svg" alt="LeetCode" />
    </div>

      <div className="icon cli" onClick={() => openWindow("cli")}>
        <span className="tooltip">Terminal</span>
        <img src="/doc-icons/cli.svg" alt="Terminal" />
      </div>

    </footer>
  )
}

export default Dock
