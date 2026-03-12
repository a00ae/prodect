import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import ShoppingCartProvider from "./componints/context/useShoppingcart.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </StrictMode>,
);
