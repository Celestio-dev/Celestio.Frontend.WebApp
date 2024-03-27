import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import LoginLayout from "./layout/LoginLayout";
import AppLayout from "./layout/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      { index: true, element: <DashboardPage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
