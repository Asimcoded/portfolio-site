import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About"; 
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";
export default function routes() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/project" element={<Project />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
}
