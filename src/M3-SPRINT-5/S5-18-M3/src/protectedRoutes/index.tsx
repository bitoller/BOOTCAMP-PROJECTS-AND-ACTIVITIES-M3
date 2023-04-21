import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../providers/userContext";
import { CartProvider } from "../providers/cartContext";

export function ProtectedRoutes() {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={location} />;
  }

  return (
    <CartProvider>
      <Outlet />
    </CartProvider>
  );
}
