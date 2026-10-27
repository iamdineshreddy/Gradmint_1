import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Internships from "@/pages/Internships";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/services/" element={<Services />} />
          <Route path="/internships/" element={<Internships />} />
          <Route path="/careers/" element={<Navigate to="/internships/" replace />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;