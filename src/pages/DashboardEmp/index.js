import classNames from "classnames/bind";
import styles from "./DashboardEmp.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChartLine,
  faChevronDown,
  faCircleNotch,
  faCircleXmark,
  faClapperboard,
  faClipboardUser,
  faEllipsisVertical,
  faFilm,
  faGear,
  faMagnifyingGlass,
  faTableColumns,
  faTicket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { Pagination } from "@mui/material";
import { Outlet } from "react-router-dom";

const cx = classNames.bind(styles);

const DashboardEmp = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("sidebar")}>
          <div className={cx("logo_container")}>
            <FontAwesomeIcon icon={faFilm} className={cx("logo_icon")} />
            <div className={cx("logo_text")}>UIT Manager</div>
          </div>
          <div className={cx("functions")}>
            <Button
              style="solid"
              leftIcon={<FontAwesomeIcon icon={faTableColumns} />}
            >
              Dashboard
            </Button>
            <Button
              style="text"
              leftIcon={<FontAwesomeIcon icon={faClapperboard} />}
            >
              Films
            </Button>
            <Button style="text" leftIcon={<FontAwesomeIcon icon={faTicket} />}>
              Tickets
            </Button>
            <Button
              style="text"
              leftIcon={<FontAwesomeIcon icon={faClipboardUser} />}
            >
              Staff
            </Button>
            <Button style="text" leftIcon={<FontAwesomeIcon icon={faUser} />}>
              Customer
            </Button>
            <Button
              style="text"
              leftIcon={<FontAwesomeIcon icon={faChartLine} />}
            >
              Statistics
            </Button>
          </div>
          <div className={cx("settings")}>
            <Button style="text" leftIcon={<FontAwesomeIcon icon={faGear} />}>
              Setting
            </Button>
            <Button
              style="text"
              leftIcon={<FontAwesomeIcon icon={faCircleLeft} />}
            >
              Log out
            </Button>
          </div>
        </div>
        <div className={cx("content_container")}>
          <div className={cx("header")}>
            <div className={cx("search")}>
              <input placeholder="Search accounts and videos" />
              <button className={cx("clear")}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              <FontAwesomeIcon className={cx("loading")} icon={faCircleNotch} />
              <button className={cx("search-btn")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <div className={cx("info")}>
              <div className={cx("notifications")}>
                <FontAwesomeIcon
                  icon={faBell}
                  className={cx("icon_notification")}
                />
                <span className={cx("number_notification")} />
              </div>
              <div className={cx("profile")}>
                <span className={cx("name_profile")}>Lance</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={cx("icon_profile")}
                />
              </div>
            </div>
          </div>
          <div className={cx("content")}>
            <table className={cx("styled-table")}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Second Name</th>
                  <th>Duration</th>
                  <th>Actor</th>
                  <th>Director</th>
                  <th>Country</th>
                  <th>Producer</th>
                  <th>Premiered</th>
                  <th>Content</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dom</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>6000</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faEllipsisVertical}
                      className={cx("actions")}
                    />
                  </td>
                </tr>
                <tr className={cx("active-row")}>
                  <td>Melissa</td>
                  <td>5150</td>
                  <td>Melissa</td>
                  <td>5150</td>
                  <td>Melissa</td>
                  <td>5150</td>
                  <td>Melissa</td>
                  <td>5150</td>
                  <td>5150</td>
                  <td>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={cx("pages_container")}>
              <Pagination count={10} size="large" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardEmp;
