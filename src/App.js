import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Travels from "./components/Travels";
import SearchedTravels from "./pages/SearchedTravels";
import AdminTravel from "./pages/admin/AdminTravel";
import Layout from "./layouts/Layout";
import AdminProgram from "./pages/admin/AdminProgram";
import AdminAirplaneCompany from "./pages/admin/AdminAirplaneCompany";
import AdminHotel from "./pages/admin/AdminHotel";
import AdminFacility from "./pages/admin/AdminFacility"
import AdminReservation from "./pages/admin/AdminReservation"
import AdminCustomer from "./pages/admin/AdminCustomer"
import AdminUser from "./pages/admin/AdminUser"
import AdminRoom from "./pages/admin/AdminRoom"







function App() {
  return (
    <>
    
    <Router>
          <div className="min-h-screen">
            <Navbar />
            <Layout> {/* Use the Layout component */}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/travels" element={<Travels />} />
                <Route path="/travels/search" element={<SearchedTravels />} />
                <Route path="/admin/travels" element={<AdminTravel />} />
                <Route path="/admin/programs" element={<AdminProgram />} />
                <Route path="/admin/airplaneCompanies" element={<AdminAirplaneCompany/>} />
                <Route path="/admin/facilities" element={<AdminFacility />} />
                <Route path="/admin/hotels" element={<AdminHotel />} />
                <Route path="/admin/reservations" element={<AdminReservation />} />
                <Route path="/admin/customers" element={<AdminCustomer />} />
                <Route path="/admin/rooms" element={<AdminRoom />} />
                <Route path="/admin/users" element={<AdminUser />} />





               

              </Routes>
            </Layout>
          </div>
        </Router>
    
    </>
  );
}

export default App;
