import SignUpForm from "./components/SignUp";
import LogInForm from "./components/LogIn";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUpForm />} />
        <Route path="login" element={<LogInForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
