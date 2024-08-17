import HomePage from '@pages/Home'
import TestPage from '@pages/Test'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CardPage from './pages/Card'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
