import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = () => {
  var tab_login = document.querySelector('.tab-login');
  console.log(tab_login);
  // var tabs = document.querySelectorAll('.tab_title');
  // console.log(tabs);
  // tabs.forEach((tab) => {
  //   tab.addEventListener('click', () => {
  //     tabs.forEach((t) => t.parentElement.classList.remove('active'));
  //     this.parentElement.classList.add('active');
  //   });
  // });
  return (
    <div className={cx('container')}>
      <div className={cx('wrapper-header')}>
        <a className={cx('logo')} href="#">
          <img src="https://www.galaxycine.vn/website/images/galaxy-logo.png"></img>
        </a>

        <div className={cx('search')}>
          <input type="text" className={cx('search-input')} placeholder="Tìm tên phim, diễn viên..."></input>
          <button className={cx('search-btn')}>
            <i className={cx('fa-solid fa-magnifying-glass')}></i>
          </button>
        </div>
        <a className={cx('login-link')}>
          <i className={cx('fa-solid fa-user')}></i>
          Đăng nhập
        </a>
      </div>
      <div className={cx('modal')}>
        <div className={cx('modal-overlay')}></div>
        <div className={cx('modal-body')}>
          <div className={cx('login-container')}>
            <span className={cx('close')}>
              <i className="fa-solid fa-xmark"></i>
            </span>
            <ul className={cx('nav-tabs')}>
              <li className={cx('active')}>
                <a className={cx('tab_title', 'tab_login')} href="#">
                  Đăng nhập
                </a>
              </li>
              <li>
                <a className={cx('line')}>/</a>
              </li>
              <li>
                <a className={cx('tab_title', 'tab_register')} href="#">
                  Đăng ký
                </a>
              </li>
            </ul>
            <div className={cx('tab-content')}>
              <div className={cx('tab-content-login', 'active')}>
                <div className={cx('login-heading')}>
                  <p>Vui lòng đăng nhập trước khi mua vé để tích luỹ điểm, cơ hội nhận thêm nhiều ưu đãi từ chương trình thành viên Galaxy Cinema.</p>
                </div>
                <form className={cx('login-form')}>
                  <input placeholder="Email" type="email" className={cx('login-input')}></input>
                  <input placeholder="Mật khẩu" type="password" className={cx('login-input')}></input>
                  <div className={cx('login-remember')}>
                    <a id="forget-password" href="#">
                      Quên mật khẩu?
                    </a>
                  </div>
                  <button className={cx('submit-btn')}>Đăng nhập</button>
                </form>
              </div>
              <div className={cx('tab-content-register')}>
                <form className={cx('register-form')}>
                  <input placeholder="Họ tên" type="text" className={cx('register-input')}></input>
                  <input placeholder="Số điện thoại" type="text" maxLength={14} className={cx('register-input')}></input>
                  <input placeholder="Email" type="email" className={cx('register-input')}></input>
                  <input placeholder="Mật khẩu" type="password" className={cx('register-input')}></input>
                  <input placeholder="Xác nhận mật khẩu" type="password" className={cx('register-input')}></input>
                  <button className={cx('submit-btn')}>Đăng ký</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
