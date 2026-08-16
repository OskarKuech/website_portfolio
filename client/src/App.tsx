import { Routes, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Landing from "./pages/Landing";
import About from "./pages/About";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavTabs />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
