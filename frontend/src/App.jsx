import SignUpForm from "./components/SignUp";
import LogInForm from "./components/LogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import StartedPage from "./components/Started Page/StartedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartedPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="signup" element={<SignUpForm />} />
        <Route path="login" element={<LogInForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
