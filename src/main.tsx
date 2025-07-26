/* eslint-disable */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyRouterProvider from "./router/MyRouterProvider";

// eslint-disable-next-line
createRoot(document.getElementById("root")!).render(
    <StrictMode> 
        <MyRouterProvider />
    </StrictMode>
);
