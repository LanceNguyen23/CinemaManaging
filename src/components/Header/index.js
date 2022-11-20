import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const Header = () => {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("header")}>Logo</div>
        <div className="search">Search</div>
        <div className="login">Login</div>
      </div>
    </>
  );
};

export default Header;
