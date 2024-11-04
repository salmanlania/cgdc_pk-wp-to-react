import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./pages/dashboard";
import About from "./pages/about";
import Navbar from "./Components/Common/Navigation/navbar";
import Footer from "./Components/Common/Footer/footer";
import Contact from "./pages/contact";
import OurTeam from "./pages/team";
import ServiceComp from "./Components/service/services";
import TownPlanning from "./pages/services/town-planning";
import Architecture from "./pages/services/architecture";
import ProjectMgmt from "./pages/services/prjmgmt";
import MepDesign from "./pages/services/mep";
import StructEng from "./pages/services/structEng";
import Building from "./pages/services/building";
import Finance from "./pages/services/finance";
import Interior from "./pages/services/interior";
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
          <Route path="service" element={<ServiceComp />} />
          <Route path="services">
            <Route path="Town-planning" element={<TownPlanning />} />
            <Route path="architecture" element={<Architecture />} />
            <Route path="project-management" element={<ProjectMgmt />} />
            <Route path="mep-designing" element={<MepDesign />} />
            <Route path="structure-engineering" element={<StructEng />} />
            <Route path="building-economics" element={<Building />} />
            <Route path="financial-feasibility" element={<Finance />} />
            <Route path="interior-designing" element={<Interior />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter >
    </>
  )
}