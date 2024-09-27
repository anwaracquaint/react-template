import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Register from "./pages/Register";

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const user = useSelector((state: RootState) => state.user.user);
  console.log("user", user);
  const isAuthenticated = user?.token;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Layout />
              </ProtectedRoutes>
            }>
            <Route index element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
