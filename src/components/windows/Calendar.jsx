import React from "react"
import MacWindow from "./MacWindow"
import "./Calendar.scss"

const Calendar = ({ windowName, setWindowsState,zIndex, bringToFront }) => {

  const today = new Date()
  const currentDate = today.getDate()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()

  const monthName = today.toLocaleString("default", { month: "long" })

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState} zIndex={zIndex} bringToFront={bringToFront}>
      <div className="calendar-app">

        <div className="calendar-header">
          <h1>{monthName} {currentYear}</h1>
        </div>

        <div className="calendar-grid">
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(day => (
            <div key={day} className="day-label">{day}</div>
          ))}

          {/* Empty cells before month starts */}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className="day-cell empty" />
          ))}

          {/* Actual days */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1
            const isToday = day === currentDate

            return (
              <div
                key={day}
                className={`day-cell ${isToday ? "today" : ""}`}
              >
                {day}
              </div>
            )
          })}
        </div>

      </div>
    </MacWindow>
  )
}

export default Calendar
