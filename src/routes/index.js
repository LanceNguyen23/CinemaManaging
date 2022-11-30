//Layouts
import { Route, Routes } from "react-router-dom";
import Dashboard from "~/pages/Dashboard";
import DashboardEmp from "~/pages/DashboardEmp";

import LoginEmp from "~/pages/LoginEmp";
import ProtectedRoute from "./ProtectedRoute";

// Public routes

// Private routes

const CreateRoutes = () => {
  return (
    <Routes>
      <Route path="employee" element={<LoginEmp />}>
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<DashboardEmp />} />
        </Route>
      </Route>

      {/* <Route path="" element={<LoginEmp />} /> */}
    </Routes>
  );
};

export default CreateRoutes;
