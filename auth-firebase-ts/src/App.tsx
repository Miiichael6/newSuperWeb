import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./pages/routes/ProtectedRoutes";
import Home from "./pages/Home";
import PublicRoutes from "./pages/routes/PublicRoutes";
import Profile from './pages/Profile';
import LandingPage from "./pages/LandingPage";
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/register" element={<RegisterForm />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
