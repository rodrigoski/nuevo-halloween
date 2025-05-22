"use client"

import { useState, useEffect } from "react"

export default function Countdown() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    // Fecha objetivo: 1 de Noviembre 2025 a las 20:00 (8 PM) en horario local
    const target = new Date("2025-11-01T20:00:00")
    
    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      // Solo actualizar si la fecha no ha pasado
      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24))
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const s = Math.floor((difference % (1000 * 60)) / 1000)

        setDays(d)
        setHours(h)
        setMinutes(m)
        setSeconds(s)
      } else {
        // Si la fecha ya pasó, detener el contador
        clearInterval(interval)
        setDays(0)
        setHours(0)
        setMinutes(0)
        setSeconds(0)
      }
    }, 1000)

    // Limpiar intervalo al desmontar el componente
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="rounded-lg bg-black/50 p-4 backdrop-blur-sm">
        <div className="text-3xl font-bold text-white md:text-5xl">
          {days.toString().padStart(2, "0")}
        </div>
        <div className="text-xs text-gray-400 md:text-sm">Días</div>
      </div>
      <div className="rounded-lg bg-black/50 p-4 backdrop-blur-sm">
        <div className="text-3xl font-bold text-white md:text-5xl">
          {hours.toString().padStart(2, "0")}
        </div>
        <div className="text-xs text-gray-400 md:text-sm">Horas</div>
      </div>
      <div className="rounded-lg bg-black/50 p-4 backdrop-blur-sm">
        <div className="text-3xl font-bold text-white md:text-5xl">
          {minutes.toString().padStart(2, "0")}
        </div>
        <div className="text-xs text-gray-400 md:text-sm">Minutos</div>
      </div>
      <div className="rounded-lg bg-black/50 p-4 backdrop-blur-sm">
        <div className="text-3xl font-bold text-white md:text-5xl">
          {seconds.toString().padStart(2, "0")}
        </div>
        <div className="text-xs text-gray-400 md:text-sm">Segundos</div>
      </div>
    </div>
  )
}