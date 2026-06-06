"use client"
import { useState } from "react"
import { CONFIG } from "@/lib/config"
export default function ReactionBar() {
  const [counts, setCounts] = useState<Record<string, number>>({})
  const [float, setFloat] = useState<string | null>(null)
  const tap = (id: string, floats: boolean) => {
    setCounts(prev => ({...prev, [id]: (prev[id] || 0) + 1 }))
    if (floats) { setFloat(id); setTimeout(() => setFloat(null), 800) }
  }
  return (
    <div className="absolute bottom-20 right-4 flex-col gap-4">
      {CONFIG.REACTIONS.map(r => (
        <button key={r.id} onClick={() => tap(r.id, r.floats)} className="text-3xl relative text-white">
          {r.emoji}<span className="text-sm block">{counts[r.id] || 0}</span>
          {float === r.id && <span className="absolute -top-8 animate-bounce text-4xl">{r.emoji}</span>}
        </button>
      ))}
    </div>
  )
}
