import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./Theme/DarkTheme";
import { Home } from "./components/Home/Home";
import VehiclePage from "./components/Vehicle/VehiclePage";
import Profile from "./components/Profile/Profile";
import CustomerRoutes from "./components/Routers/CustomerRoutes";
import RouteHandler from "./routeConfig/routeHandle";

function App() {

  // console.log("hhhhiiii")
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <CustomerRoutes /> */}
      <RouteHandler />
      
    </ThemeProvider>
  );
}

export default App;
