import HomePage from '@pages/Home'
import TestPage from '@pages/Test'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/auth/PrivateRoute'
import Navbar from './components/shared/Navbar'
import ScrollToTop from './components/shared/ScrollToTop'
import ApplyPage from './pages/Apply'
import CardPage from './pages/Card'
import SigninPage from './pages/Signin'
import SignupPage from './pages/Signup'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/apply/:id"
          element={
            <PrivateRoute>
              <ApplyPage />
            </PrivateRoute>
          }
        />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
