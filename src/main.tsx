import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
// @ts-ignore: Allow CSS side-effect import in this project setup
import "./index.css";
import App from "./App.tsx";
import { initAnalytics } from "./lib/analytics";

initAnalytics();

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
