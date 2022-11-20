import styles from "./LoginEmp.module.scss";
import classNames from "classnames/bind";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { userService } from "~/services";
import { useDispatch } from "react-redux";
import sectionSlice from "~/store/slices/sectionSlice";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { useNavigation } from "react-router-dom";
import Header from "~/components/Header";

const cx = classNames.bind(styles);

const LoginEmp = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleShowHidePassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleLogin = async () => {
    setErrMessage("");
    try {
      let data = await userService(username, password);
      if (data && data.errCode !== 0) {
        setErrMessage(data.message);
      }
      if (data && data.errCode === 0) {
        setErrMessage("Login succeed");
        dispatch(sectionSlice.actions.processLogin(data.employee));
        // navigate("/employee/dashboard");
      }
    } catch (e) {
      console.log(e.response);
      if (e.response) {
        if (e.response.data) {
          setErrMessage(e.response.data.message);
        }
      }
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <form>
          <legend className={cx("title")}>
            <p className={cx("detail")}>Log in</p>
          </legend>
          <div className={cx("email")}>
            <input
              type="email"
              className="form-control"
              placeholder="E-mail"
              value={username}
              onChange={(e) => handleChangeUsername(e)}
            />
          </div>
          <div className={cx("password")}>
            <input
              type={isShowPassword ? "text" : "password"}
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => handleChangePassword(e)}
            />
            <span onClick={handleShowHidePassword}>
              <FontAwesomeIcon
                icon={isShowPassword ? faEyeSlash : faEye}
                className={cx("icon-eye")}
              />
            </span>
          </div>
          <div className={cx("err-message")}>{errMessage}</div>
          <button
            type="button"
            className={cx("login-btn")}
            onClick={handleLogin}
          >
            Login
          </button>
          <div className={cx("wrapper-password-reset")}>
            <a href="#" className={cx("password-reset")}>
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //   navigate: (path) => dispatch(push(path)),
    //   adminLoginSuccess: (adminInfo) =>
    //     dispatch(actions.adminLoginSuccess(adminInfo)),
    //   adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(null, mapDispatchToProps)(LoginEmp);
