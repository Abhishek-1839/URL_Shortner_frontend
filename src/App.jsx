import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DataTable from './components/DataTable'
import AnalyticTable from './components/AnalyticTable'
import UserProfile from './components/UserProfile'


const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  

  return (
    <>
      <Router>
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          {/* <Route path="*" element={<Register />} /> */}
          <Route path="/dashboard/" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }>
            <Route path="links" element={<DataTable />} />
            <Route path="analytics" element={<AnalyticTable />} />
            <Route path="settings" element={<UserProfile />} />
          </Route>
          {/* <Route path="settings" element={} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
