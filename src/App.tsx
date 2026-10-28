import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PHome from './pages/PHome/PHome'
import PListagemProduto from './pages/PListagem/PListagemProduto/PListagemProduto'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PHome />} />
        <Route path='/lista/produtos' element={<PListagemProduto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
