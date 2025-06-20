import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Layout from "./components/User/Layout"
import Home from "./pages/User/Home"
import About from "./pages/User/About"
import Gallery from "./pages/User/Gallery"
import Dashboard from "./pages/Dashboard/Dashboard"
import Patient from "./pages/Dashboard/Patient/Patient"
import Hospital from "./pages/Dashboard/Hospital/Hospital"
import Vaccine from "./pages/Dashboard/Vaccine/Vaccine"
import VaccinatedPatient from "./pages/Dashboard/VaccinatedPatient/VaccinatedPatient"
import DashboardLayout from "./components/Dashboard/DashboardLayout"
import { Button } from "./components/ui/button"
import Vaccines from "./pages/User/Vaccines"
import Hospitals from "./pages/User/Hospitals"
import Approval from "./pages/Dashboard/Approval/Approval"
import CovidTest from "./pages/Dashboard/CovidTest/CovidTest"
import Settings from "./pages/Dashboard/Settings/Settings"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="vaccines" element={<Vaccines />} />
            <Route path="hospitals" element={<Hospitals />} />
          </Route>

          <Route path="/dashboard/" element={<DashboardLayout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="patients" element={<Patient />} />
            <Route path="hospitals" element={<Hospital />} />
            <Route path="vaccines" element={<Vaccine />} />
            <Route path="approvals" element={<Approval />} />
            <Route path="covid-tests" element={<CovidTest />} />
            <Route path="vaccinated-patients" element={<VaccinatedPatient />} />
            <Route path="settings" element={<Settings />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
