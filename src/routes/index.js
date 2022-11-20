//Layouts
import Dashboard from "~/pages/Dashboard";
import LoginEmp from "~/pages/LoginEmp";

// Public routes
const publicRoutes = [
  { exact: true, path: "employee/login", component: LoginEmp },
];

const privateRoutes = [{ path: "employee/dashboard", component: Dashboard }];

export { publicRoutes, privateRoutes };
