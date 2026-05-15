import { createBrowserRouter } from "react-router";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { LeakAlerts } from "./components/LeakAlerts";
import { MeterReadings } from "./components/MeterReadings";
import { ValveControl } from "./components/ValveControl";
import { Reports } from "./components/Reports";
import { DeviceManagement } from "./components/DeviceManagement";
import { Schematic } from "./components/Schematic";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "schematic", Component: Schematic },
      { path: "leaks", Component: LeakAlerts },
      { path: "meters", Component: MeterReadings },
      { path: "valves", Component: ValveControl },
      { path: "reports", Component: Reports },
      { path: "devices", Component: DeviceManagement },
    ],
  },
]);
