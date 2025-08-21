import React from 'react'
import MatrixGridVisualization from './MatrixGridVisualization.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <center><h1>Matrix/Grid Visualization</h1></center>
      <p className="subtitle">
        A simple 10×10 heatmap-style grid drawn on HTML Canvas. Click "Regenerate" to see new data.
      </p>
      <MatrixGridVisualization />
     
    </div>
  )
}
