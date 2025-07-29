import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import "./index.css";
import MyRouterProvider from "./router/MyRouterProvider";
 
createRoot(document.getElementById("root")!).render(
    <StrictMode> 
        <MyRouterProvider />
        <Toaster />
    </StrictMode>
);
