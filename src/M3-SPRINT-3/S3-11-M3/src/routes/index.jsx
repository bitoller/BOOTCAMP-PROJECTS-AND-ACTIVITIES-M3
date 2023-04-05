import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Signin } from "../pages/signin";
import { Signup } from "../pages/signup";

export function RoutesMain() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Signin />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}