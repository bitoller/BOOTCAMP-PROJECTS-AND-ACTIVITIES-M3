import { GlobalStyle } from "./styles/GlobalStyles";
import { MainRoutes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./providers/userContext";

export function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <UserProvider>
        <MainRoutes />
      </UserProvider>
    </>
  );
}
