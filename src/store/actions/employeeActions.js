import actionTypes from "./actionType";

export const employeeLoginSuccess = (employeeInfo) => ({
  type: actionTypes.EMPLOYEE_LOGIN_SUCCESS,
  employeeInfo: employeeInfo,
});

export const employeeLoginFail = () => ({
  type: actionTypes.EMPLOYEE_LOGIN_FAIL,
});

export const processLogout = () => ({
  type: actionTypes.PROCESS_LOGOUT,
});
