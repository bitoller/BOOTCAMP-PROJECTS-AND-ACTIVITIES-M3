import { GlobalStyle } from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./providers/userProvider";

export function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer position="top-right" theme="crimson" />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </>
  );
}
