import AdminDashboard from "../Admin Component/AdminDashboard";
import About from "../components/About/About";
import Auth from "../components/Auth/Auth";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";
import { Home } from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import VehiclePage from "../components/Vehicle/VehiclePage";

const allRoute = [
  {
    component: <Home />,
    path: "/",
  },
  {
    component: <AdminDashboard />,
    path: "/dashboard/*",
  },
  {
    component: <Auth />,
    path: "/account/register",
  },
  {
    component: <Auth />,
    path: "/account/login",
  },
  {
    component : <Profile/>,
    path:"/my-profile/*"
  },
  {
    component: <VehiclePage />,
    path: "/vehicles",
  },
  {
    component: <About />,
    path: "/about",
  },
];

export default allRoute;
