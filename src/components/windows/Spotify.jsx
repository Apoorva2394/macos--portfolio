import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"

const Spotify = ({ windowName, setWindowsState, zIndex, bringToFront }) => {
    return (
        <MacWindow width='25vw'  windowName={windowName} setWindowsState={setWindowsState} zIndex={zIndex} bringToFront={bringToFront} >
            <div className="spotify-window">
                <iframe data-testid="embed-iframe" style={{borderRadius: "12px"}} 
                src="https://open.spotify.com/embed/playlist/7xmpNYZ15D6b43BHzYQCLt?utm_source=generator" 
               width="100%" height="380" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>             
            </div>
        </MacWindow>
    )
}

export default Spotify