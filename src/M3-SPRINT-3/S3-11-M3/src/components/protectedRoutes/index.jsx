import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../providers/userProvider";
import { TechProvider } from "../../providers/techProvider";

export function ProtectedRoutes() {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={location} />;
  }

  return (
    <TechProvider>
      <Outlet />
    </TechProvider>
  );
}
