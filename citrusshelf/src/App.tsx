import { Routes, Route } from "react-router-dom"
import SearchPage from "./pages/SearchPage"
import ToReadPage from "./pages/ToReadPage"
import ReadPage from "./pages/ReadPage"
import BookShelfPage from "./pages/BookShelfPage"
import AnalyticsPage from "./pages/AnalyticsPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/to-read" element={<ToReadPage />} />
      <Route path="/read" element={<ReadPage />} />
      <Route path="/bookShelf" element={<BookShelfPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
    </Routes>
  )
}

export default App
