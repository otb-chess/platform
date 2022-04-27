import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./assets/css/style.css";
import App from "./App";
import { SidebarProvider } from "./context/SidebarContext";
import ThemedSuspense from "./components/ThemedSuspense";



ReactDOM.render(
  <SidebarProvider>
    <Suspense fallback={<ThemedSuspense />}>    
        <App />
    </Suspense>
  </SidebarProvider>,
  document.getElementById("root")
);

