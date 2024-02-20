import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";


import { useSelector } from "react-redux";
import CreateBlogs from "./pages/CreateBlogs";
import MyBlogs from "./pages/MyBlogs";
import MyProfile from "./pages/MyProfile";

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
       <Route path="/createBlog" element={<CreateBlogs/>}/>
       <Route path="/myBlogs" element={<MyBlogs/>}/>
    <Route path="/profile" element={<MyProfile />} />
        <Route path="*" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>


  );
}


export default App;
