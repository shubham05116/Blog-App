import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LoginForm />} />

        <Route path="/signup" element={<SignUp />} />
      
        <Route path="/home" element= {<PrivateRoute>
        <Home />
        </PrivateRoute>} />

      </Routes>
    </BrowserRouter>

  );
}


export default App;
