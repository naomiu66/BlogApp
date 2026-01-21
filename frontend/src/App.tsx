import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPage from './pages/BlogPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
