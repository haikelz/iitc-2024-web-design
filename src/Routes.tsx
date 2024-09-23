import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard";
import Material from "./pages/dashboard/material";
import Quiz from "./pages/dashboard/quiz";
import Course from "./pages/dashboard/course";
import Discussion from "./pages/dashboard/discussion";
import Reward from "./pages/dashboard/reward";

export default function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/material" element={<Material />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/course" element={<Course />} />
      <Route path="/discussion" element={<Discussion />} />
      <Route path="/reward" element={<Reward />} />
    </Routes>
  );
}
