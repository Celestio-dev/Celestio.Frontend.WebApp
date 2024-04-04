import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import LoginLayout from "./layout/LoginLayout";
import AppLayout from "./layout/AppLayout";
import AgencyProfilePage from "./pages/profilePages/AgencyProfilePage";
import CreatorProfilePage from "./pages/profilePages/CreatorProfilePage";
import EditCreatorProfile from "./pages/editPages/EditCreatorProfile";
import EditAgencyProfile from "./pages/editPages/EditAgencyProfile";
import CreatorDashboard from "./pages/CreatorDashboard";
import CreatorSearch from "./pages/CreatorSearch";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BrandProfilePage from "./pages/profilePages/BrandProfilePage";

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
      //Agency pages
      { path: "agency", element: <AgencyProfilePage /> },
      { path: "agency/edit", element: <EditAgencyProfile /> },
      //Brand pages
      { path: "brand", element: <BrandProfilePage /> },
      //Creator pages
      { path: "creator", element: <CreatorProfilePage /> },
      { path: "creator/edit", element: <EditCreatorProfile /> },
      { path: "creator/dashboard", element: <CreatorDashboard /> },
      { path: "creator/search", element: <CreatorSearch /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
