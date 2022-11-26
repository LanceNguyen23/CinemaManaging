//Layouts
import Dashboard from "~/pages/Dashboard";
import DashboardEmp from "~/pages/DashboardEmp";

import LoginEmp from "~/pages/LoginEmp";

// Public routes
const publicRoutes = [
  { exact: true, path: "employee/login", component: LoginEmp },
  { exact: true, path: "dashboard", component: Dashboard },
];

const privateRoutes = [{ path: "employee/dashboard", component: DashboardEmp }];

export { publicRoutes, privateRoutes };
