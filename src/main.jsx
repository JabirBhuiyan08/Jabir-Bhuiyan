import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from "./router/Routes.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();  



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <div className="full-screen">
            <RouterProvider router={router} />
          </div>
      </QueryClientProvider>
  </React.StrictMode>
)
