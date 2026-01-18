import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects, ProjectDetail } from "./pages/Projects";
import ContactSection from "./pages/Contact/ContactSection";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/contact" element={<ContactSection />} />
      </Route>
    </Routes>
  );
}

export default App;
