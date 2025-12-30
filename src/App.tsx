import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Projects, ProjectDetail } from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/contacto" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
