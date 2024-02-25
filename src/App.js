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

  const isLoggedIn = useSelector(state => state.login.isLoggedIn)
  const isSignedUp = useSelector(state => state.signUp.isSignedUp)


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />

        <Route path="/home" element={
          isLoggedIn || isSignedUp ? <Home /> : <ErrorPage />
        } />

        <Route path="/createBlog" element={
          isLoggedIn || isSignedUp ? <CreateBlogs /> : <ErrorPage />
        } />

        <Route path="/myBlogs" element={
          isLoggedIn || isSignedUp ? <MyBlogs /> : <ErrorPage />
        } />

        <Route path="/profile" element={
          isLoggedIn || isSignedUp ? <MyProfile /> : <ErrorPage />
        } />

        <Route path='/detailPage/:id' element={
          isLoggedIn || isSignedUp ? <DetailPage /> : <ErrorPage />
        } />

        <Route path="*" element={"Page Not found"} />

      </Routes>
    </BrowserRouter>

  );
}


export default App;
