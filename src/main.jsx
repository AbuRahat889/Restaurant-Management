import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvaider from "./Contex/AuthProvaider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AuthProvaider>
      <React.StrictMode>
        <div className="max-w-screen-2xl mx-auto px-5 md:px-0">
          <RouterProvider router={router} />
        </div>
      </React.StrictMode>
      ,
    </AuthProvaider>
  </HelmetProvider>
);
