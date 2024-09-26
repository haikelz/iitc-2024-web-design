import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Dashboard from "./pages/dashboard";
import Course from "./pages/dashboard/course";
import Discussion from "./pages/dashboard/discussion";
import Material from "./pages/dashboard/material";
import DetailMaterial from "./pages/dashboard/material/detail";
import Profile from "./pages/dashboard/profile";
import Quiz from "./pages/dashboard/quiz";
import Score from "./pages/dashboard/quiz/score";
import Leaderboard from "./pages/dashboard/quiz/leaderboard";
import CourseMaterial from "./pages/dashboard/course/material";
import QuizCourseScore from "./pages/dashboard/course/score";
import QuizCourse from "./pages/dashboard/course/quiz";
import Raport from "./pages/dashboard/course/raport";
import Test from "./pages/dashboard/quiz/test";
import Reward from "./pages/dashboard/reward";

export default function App() {
  const location = useLocation();

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/material" element={<Material />} />
          <Route path="/dashboard/material/:detail" element={<DetailMaterial />} />
          <Route path="/dashboard/quiz" element={<Quiz />} />
          <Route
            path="/dashboard/quiz/quantities-and-units"
            element={<Test />}
          />
          <Route path="/dashboard/quiz/score" element={<Score />} />
          <Route path="/dashboard/quiz/leaderboard" element={<Leaderboard />} />
          <Route path="/dashboard/course" element={<Course />} />
          <Route
            path="/dashboard/course/quantities-and-units"
            element={<CourseMaterial />}
          />
          <Route path="/dashboard/course/quiz" element={<QuizCourse />} />
          <Route
            path="/dashboard/course/quiz/score"
            element={<QuizCourseScore />}
          />
          <Route path="/dashboard/course/quiz/raport" element={<Raport />} />
          <Route path="/dashboard/discussion" element={<Discussion />} />
          <Route path="/dashboard/reward" element={<Reward />} />
          <Route path="/dashboard/profile" element={<Profile />} />
        </Routes>
      </AnimatePresence>
    </LazyMotion>
  );
}
