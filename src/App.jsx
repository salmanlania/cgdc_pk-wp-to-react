import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./pages/dashboard";
import About from "./pages/about";
import Navbar from "./Components/Common/Navigation/navbar";
import Footer from "./Components/Common/Footer/footer";
import Contact from "./pages/contact";
import OurTeam from "./pages/team";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route index element={<DashBoard />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ourteam" element={<OurTeam />} />
        </Routes>
        <Footer />
      </BrowserRouter >
    </>
  )
}