import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Dashboard from "./pages/dashboard";
import Course from "./pages/dashboard/course";
import Discussion from "./pages/dashboard/discussion";
import Material from "./pages/dashboard/material";
import Profile from "./pages/dashboard/profile";
import Quiz from "./pages/dashboard/quiz";
import Reward from "./pages/dashboard/reward";
import Test from "./pages/dashboard/quiz/test";
import Score from "./pages/dashboard/quiz/score";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/material" element={<Material />} />
      <Route path="/dashboard/quiz" element={<Quiz />} />
      <Route path="/dashboard/quiz/quantities-and-units" element={<Test />} />
      <Route path="/dashboard/quiz/score" element={<Score />} />
      <Route path="/dashboard/course" element={<Course />} />
      <Route path="/dashboard/discussion" element={<Discussion />} />
      <Route path="/dashboard/reward" element={<Reward />} />
      <Route path="/dashboard/profile" element={<Profile />} />
    </Routes>
  );
}
