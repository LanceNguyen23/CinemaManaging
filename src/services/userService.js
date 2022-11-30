import axios from "../axios";

const userService = (email, password) => {
  return axios.post("/api/login", {
    employeeEmail: email,
    employeePassword: password,
  });
};

export default userService;
