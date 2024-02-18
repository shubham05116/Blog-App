import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";


import { useSelector } from "react-redux";

function App() {
  const isPrivateRoute = useSelector(state => state.login.private)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />

        <Route path="/signup" element={<SignUp />} />

        <Route path="/home" element={
          isPrivateRoute ? <Home /> : <LoginForm />
        } />


      </Routes>
    </BrowserRouter>


  );
}


export default App;
