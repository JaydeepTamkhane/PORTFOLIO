import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import DsaCp from "./pages/DsaCp";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="bg-black text-gray-400">
      <Navbar />
      <div className="px-10 md:px-20 lg:px-32 pt-16 pb-10 min-h-screen ">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/dsacp" element={<DsaCp />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;