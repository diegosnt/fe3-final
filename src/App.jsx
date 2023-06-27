import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Contacto from './routes/Contacto'
import Dentist from './routes/Dentist'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/dentist/:id" element={<Dentist />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
