import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import CreateBlogs from "./pages/CreateBlogs";
import MyBlogs from "./pages/MyBlogs";
import MyProfile from "./pages/MyProfile";
import DetailPage from "./pages/DetailPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  const isPrivateRoute = useSelector(state => state.login.private)
  const isLoggedIn = useSelector(state => state.login.isLoggedIn)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={
          isLoggedIn ? <Home /> :<ErrorPage/>
        } />
       <Route path="/createBlog" element={
          isLoggedIn ? <CreateBlogs /> :<ErrorPage/>
        } />
       <Route path="/myBlogs" element={
          isLoggedIn ? <MyBlogs /> :<ErrorPage/>
        } />
    <Route path="/profile" element={
          isLoggedIn ? <MyProfile /> :<ErrorPage/>
        }  />
    <Route path='/detailPage/:id' element={
          isLoggedIn ? <DetailPage /> :<ErrorPage/>
        } />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>


  );
}


export default App;
