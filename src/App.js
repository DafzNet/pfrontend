
// Update src/App.js to use the Layout component and useAuth hook
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SupplierOnboarding from './pages/SupplierOnboarding';
import RFPList from './pages/RFPList';
import CreateRFP from './pages/CreateRFP';
import SubmitBid from './pages/SubmitBid';
import EvaluateBids from './pages/EvaluateBids';
import { useAuth } from './hooks/useAuth';

function App() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={login} />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/supplier-onboarding"
              element={isAuthenticated ? <SupplierOnboarding /> : <Navigate to="/login" />}
            />
            <Route
              path="/rfps"
              element={isAuthenticated ? <RFPList /> : <Navigate to="/login" />}
            />
            <Route
              path="/create-rfp"
              element={isAuthenticated ? <CreateRFP /> : <Navigate to="/login" />}
            />
            <Route
              path="/submit-bid/:rfpId"
              element={isAuthenticated ? <SubmitBid /> : <Navigate to="/login" />}
            />
            <Route
              path="/evaluate-bids/:rfpId"
              element={isAuthenticated ? <EvaluateBids /> : <Navigate to="/login" />}
            />
          </Routes>
        </Layout>
      </Router>
    </ChakraProvider>
  );
}

export default App;

