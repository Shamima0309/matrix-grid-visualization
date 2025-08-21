import React, { useEffect, useRef, useState } from 'react'

// Utility to create a rows×cols matrix with random integers 0..100
function makeRandomMatrix(rows, cols) {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => Math.floor(Math.random() * 101))
  )
}

export default function MatrixGridVisualization() {
  const rows = 10
  const cols = 10
  const cellSize = 40

  const [matrix, setMatrix] = useState(() => makeRandomMatrix(rows, cols))
  const canvasRef = useRef(null)

  // Map value (0..100) to a color (blue -> red) using HSL
  function valueToColor(v) {
    // 220 (blue) down to 0 (red)
    const hue = 220 - Math.round((v / 100) * 220)
    return `hsl(${hue} 80% 55%)`
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    canvas.width = cols * cellSize
    canvas.height = rows * cellSize

    // Draw grid
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const value = matrix[r][c]
        ctx.fillStyle = valueToColor(value)
        ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize)

        // Border
        ctx.strokeStyle = '#e5e7eb' // light gray
        ctx.lineWidth = 1
        ctx.strokeRect(c * cellSize + 0.5, r * cellSize + 0.5, cellSize, cellSize)

        // Value label
        ctx.fillStyle = '#111827' // near-black
        ctx.font = '12px system-ui, -apple-system, Segoe UI, Roboto, Arial'
        ctx.fillText(String(value).padStart(3, ' '), c * cellSize + 10, r * cellSize + 24)
      }
    }
  }, [matrix])

  return (
    <div className="card">
      <div className="controls">
        <button onClick={() => setMatrix(makeRandomMatrix(rows, cols))}>
          Regenerate
        </button>
      </div>
      <canvas ref={canvasRef} className="canvas" />
    </div>
  )
}
