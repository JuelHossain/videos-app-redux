import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import AuthorGrid from "./components/grid/AuthorGrid";
import FilteredGrid from "./components/grid/FilteredGrid";
import VideoGrid from "./components/grid/VideoGrid";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<VideoGrid />} />
          <Route path="filtered" element={<FilteredGrid />} />
          <Route path="author/:author" element={<AuthorGrid />} />
        </Route>
        <Route path="/videos/:videoId" element={<Video />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
