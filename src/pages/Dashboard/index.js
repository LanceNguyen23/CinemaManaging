import classNames from "classnames/bind";
import Header from "~/components/Header";
import styles from "./Dashboard.module.scss";

const cx = classNames.bind(styles);

const Dashboard = () => {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("content")}>Content</div>
      </div>
    </div>
  );
};

export default Dashboard;
