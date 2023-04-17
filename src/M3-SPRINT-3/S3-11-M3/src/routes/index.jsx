import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Signin } from "../pages/signin";
import { Signup } from "../pages/signup";
import { ProtectedRoutes } from "../components/protectedRoutes";

export function RoutesMain() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Signin />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}
