import HomePage from "./home";
import DashboardPage from "./dashBoard";
import MassagePage from "./massage";

export const Router = Object.freeze({
  Home: <HomePage />,
  dashboard: <DashboardPage />,
  massage: <MassagePage />,
});

export default Router;
