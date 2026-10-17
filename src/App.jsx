import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import DashboardLayout from "./components/layout/DashboardLayout";
import Customers from './components/pages/Customers';
import Overview from './components/pages/Overview';
import Settings from './components/pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="settings" element={<Settings />} />
          <Route path="customers" element={<Customers />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
