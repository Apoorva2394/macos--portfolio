import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState ,zIndex, bringToFront}) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => 'I am a  web developer passionate about building modern web applications with React, Node.js, and cloud technologies.'
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Frontend: React, Vanilla JS, Sass, HTML/CSS
Backend: Node.js, Express, Python
Databases: MongoDB, MySQL
Tools: Git, Docker, Vite
Cloud: AWS, Azure`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. Portfolio Website - Vanilla javascript
2. Snake Game -javascript
3. Kanban Board - javascript
4. RAG Application - python
5. Blog Application - typescript`
        },
        experience: {
            description: 'Display work experience',
            usage: 'experience',
            fn: () => `Frontend Developer Intern @ Invest24by7 (Aug-2024 - Nov-2024)
  - Develop responsive applications using HTML, CSS and Javascipt
  - test apllication and debug code

Devops intern @ Veha Technologies (Dec- 2024)
  - Built CI/CD pipeline
  - learn build deployment mechanism`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: apoorvag861@gmail.com   
            Location: Dehradun, Uttarakhand`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/Apoorva2394/', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => 'Resume download started...'
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `Email: apoorvag861@gmail.com
           LinkedIn: https://www.linkedin.com/in/apoorva2394/
           Github: https://www.github.com/in/Apoorva2394/
Portfolio: https://rebrand.ly/apoorva_portfolio`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • social  - view my social handles
  • contact   - Get in touch

Happy exploring! 
`

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState}  zIndex={zIndex} bringToFront={bringToFront}>
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'apoorvagupta:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli