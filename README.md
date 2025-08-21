# Matrix/Grid Visualization (React + Vite + Canvas)

A tiny React app that renders a 10×10 **matrix/grid visualization** on an HTML Canvas.
Each cell is colored by value and labeled with the number. Click **Regenerate** to create a new random matrix.

## ✨ Features
- React + Vite setup (fast dev server, ESM)
- Canvas-based grid for performance
- Heatmap-ish color mapping using HSL
- Simple UI and one-click data regeneration

## 🚀 Quick Start

```bash
# 1) Install dependencies
npm install

# 2) Start dev server
npm run dev

# Vite will show a local URL in your terminal (e.g., http://localhost:5173)
```

## 🧠 How it Works
- A 10×10 matrix of values (0..100) is generated in state.
- `useEffect` draws the grid onto a `<canvas>` each time data changes.
- Cell color is computed from value (blue→red) via HSL.

## 📁 Project Structure
```text
vite-matrix-grid-react/
├─ index.html
├─ package.json
├─ vite.config.js
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ MatrixGridVisualization.jsx
   └─ styles.css
```

## 📦 Build
```bash
npm run build
npm run preview
```

**Author:** Shamima P

