import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";

/**
 * Root Initialization
 * We wrap <App /> in:
 * 1. BrowserRouter: Enables client-side routing (React Router)
 * 2. AuthProvider: Provides login/user state to the entire MERN frontend
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);