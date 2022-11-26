import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  employeeInfo: null,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EMPLOYEE_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        employeeInfo: action.employeeInfo,
      };
    case actionTypes.EMPLOYEE_LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        employeeInfo: null,
      };
    case actionTypes.PROCESS_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        employeeInfo: null,
      };
    default:
      return state;
  }
};

export default employeeReducer;
