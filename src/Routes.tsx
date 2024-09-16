import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";

export default function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
