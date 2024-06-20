import {
  QueryClient,
  QueryClientProvider,
  
} from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import Alpine from "alpinejs";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProvider from "./ContextProvider/AuthContext";

const queryClient = new QueryClient();
window.Alpine = Alpine;

Alpine.start();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </QueryClientProvider>
);
