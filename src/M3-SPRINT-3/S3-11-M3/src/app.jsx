import { useState } from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <div>
      <GlobalStyle />
      <ToastContainer position="top-right" theme="crimson" />
      <RoutesMain />
    </div>
  );
}
