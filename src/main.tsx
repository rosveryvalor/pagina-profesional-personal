import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ProjectDetail from './pages/ProjectDetail'
import ExpertisePage from './pages/ExpertisePage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/proyecto/:slug" element={<ProjectDetail />} />
        <Route path="/especialidades" element={<ExpertisePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
