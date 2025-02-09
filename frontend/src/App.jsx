import { Routes, Route } from "react-router";
import './App.css'
import Header from './components/Header'
import CategoryPage from './pages/CategoryPage'

function App() {

  const categories = [
    { name: "WEC", href: "/wec/hypercar", color: "blue" },
    { name: "IMSA", href: "/imsa/gtp", color: "#221e1f" },
  ]

  return (
    <>
      <Header categories={categories} />

        <Routes>
          <Route path="/:category/:subcategory" element={<CategoryPage />} />
        </Routes>
    </>
  )
}

export default App
