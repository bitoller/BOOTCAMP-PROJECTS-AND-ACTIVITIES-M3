import { UserProvider } from "./providers/userContext";
import Router from "./routes";
import { GlobalStyles } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <UserProvider>
        <Router />
      </UserProvider>
    </>
  );
}
