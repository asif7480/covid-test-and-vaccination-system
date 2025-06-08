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
          </Route>

          <Route path="/dashboard/" element={<DashboardLayout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="patient" element={<Patient />} />
            <Route path="hospital" element={<Hospital />} />
            <Route path="vaccine" element={<Vaccine />} />
            <Route path="vaccinatedPatient" element={<VaccinatedPatient />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
