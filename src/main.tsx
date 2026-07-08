import { createRoot } from "react-dom/client";
import { Helmet } from "react-helmet-async";
// @ts-ignore: Allow CSS side-effect import in this project setup
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <Helmet>
      <title>Leadforge Studio | Web Development in Kenya</title>
      <meta
        name="description"
        content="Depot Covers Company (DCC) — Branding & Printing Solutions Kenya"
      />
    </Helmet>

    <App />
  </>,
);
