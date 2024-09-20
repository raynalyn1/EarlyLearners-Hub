import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import GeneralLayout from './layouts/GeneralLayout';
import ParentLayout from './layouts/ParentLayout';
import Loader from './components/Loader'; // Loader component
import Services from './pages/general/Services';

// Lazy load the pages
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Games = lazy(() => import('./pages/admin/Games'));
const Videos = lazy(() => import('./pages/admin/Videos'));
const ParentDashboard = lazy(() => import('./pages/parent/Dashboard'));
const Feedback = lazy(() => import('./pages/parent/Feedback'));
const LandingPage = lazy(() => import('./pages/general/LandingPage'));
const AboutUs = lazy(() => import('./pages/general/AboutUs'));
const Login = lazy(() => import('./pages/general/Login'));
const Register = lazy(() => import('./pages/general/Register'));
const StartExploring = lazy(() => import('./pages/general/StartExploring')); 
const ArtsSection = lazy(() => import('./pages/general/ArtsSection')); // Only lazy import

// Custom hook to track page changes and trigger loader
const usePageLoader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Trigger loader on route change
    setLoading(true);

    // Ensure loader stays for at least 1 second
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1-second duration

    return () => clearTimeout(timer); // Cleanup timeout on unmount or route change
  }, [location]);

  return loading;
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
};

// Separated component to handle routes and the loader logic
const AppRoutes = () => {
  const isLoading = usePageLoader(); // Check if loading state is active

  return isLoading ? (
    <Loader />
  ) : (
    <Routes>
      {/* General Pages */}
      <Route path="/" element={<GeneralLayout><LandingPage /></GeneralLayout>} />
      <Route path="/about" element={<GeneralLayout><AboutUs /></GeneralLayout>} />
      <Route path="/login" element={<GeneralLayout><Login /></GeneralLayout>} />
      <Route path="/register" element={<GeneralLayout><Register /></GeneralLayout>} />
      <Route path="/services" element={<GeneralLayout><Services /></GeneralLayout>} />
      <Route path="/StartExploring" element={<GeneralLayout><StartExploring /></GeneralLayout>} />
      <Route path="/arts" element={<GeneralLayout><ArtsSection /></GeneralLayout>} /> {/* ArtsSection Route */}

      {/* Admin Pages */}
      <Route path="/admin" element={<Navigate to="/admin/dashboard" />} /> {/* Default to dashboard */}
      <Route path="/admin/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
      <Route path="/admin/games" element={<AdminLayout><Games /></AdminLayout>} />
      <Route path="/admin/videos" element={<AdminLayout><Videos /></AdminLayout>} />

      {/* Parent Pages */}
      <Route path="/parent" element={<Navigate to="/parent/dashboard" />} /> {/* Default to parent dashboard */}
      <Route path="/parent/dashboard" element={<ParentLayout><ParentDashboard /></ParentLayout>} />
      <Route path="/parent/feedback" element={<ParentLayout><Feedback /></ParentLayout>} />
    </Routes>
  );
};

export default App;
