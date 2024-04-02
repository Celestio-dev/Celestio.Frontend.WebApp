import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import LoginLayout from "./layout/LoginLayout";
import AppLayout from "./layout/AppLayout";
import AgencyDashboardPage from "./pages/AgencyDashboardPage";
import CreatorProfilePage from "./pages/CreatorProfilePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BrandDashboardPage from "./pages/BrandDashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "agency-login", element: <LoginPage type="agency" /> },
      { path: "agency-register", element: <RegisterPage type="agency" /> },
      { path: "creator-login", element: <LoginPage /> },
      { path: "creator-register", element: <RegisterPage /> },
    ],
  },

  {
    path: "app",
    element: <AppLayout />,
    children: [
      { path: "agency", element: <AgencyDashboardPage /> },
      { path: "brand", element: <BrandDashboardPage /> },
      { path: "creator", element: <CreatorProfilePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
