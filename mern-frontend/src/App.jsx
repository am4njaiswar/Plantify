import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute.jsx"; // Import the new GuestRoute

// Your Page and Component Imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PredictorPage from "./pages/PredictorPage";
import DiseaseDetailPage from "./pages/DiseaseDetailPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import "./styles/index.css";
import ContactPage from "./pages/ContactPage.jsx"

// This layout now uses <Outlet /> to render child routes
const MainLayout = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col">
    <Navbar />
    <main className="flex-grow">
      <Outlet /> {/* Child routes will be rendered here */}
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* === GUEST ROUTES (Only for logged-out users) === */}
          <Route element={<GuestRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>

          {/* === ROUTES THAT USE THE MAIN LAYOUT === */}
          <Route element={<MainLayout />}>
            
            {/* --- 1. Public Routes --- */}
            {/* Anyone can see these pages, logged in or not. */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* --- 2. Protected Routes --- */}
            {/* A user MUST be logged in to see these pages. */}
            <Route element={<ProtectedRoute />}>
              <Route path="/predict" element={<PredictorPage />} />
              <Route path="/disease/:diseaseId" element={<DiseaseDetailPage />} />
            </Route>
            
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;