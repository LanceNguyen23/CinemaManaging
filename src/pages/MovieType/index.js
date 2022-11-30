import styles from './MovieType.module.scss';
import classNames from 'classnames/bind';
import MovieSidebar from '../MovieSidebar';

const cx = classNames.bind(styles);

const MovieType = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('row')}>
        <div className={cx('col-8')}>
          <div className={cx('filter')}>
            <div className={cx('filter-item')}>
              <select className={cx('filter-select')}>
                <option>Thể loại</option>
                <option>Cao bồi</option>
                <option>Chiến tranh</option>
                <option>Gia đình</option>
                <option>Giả tưởng</option>
                <option>Giật gân</option>
              </select>
            </div>

            <div className={cx('filter-item')}>
              <select className={cx('filter-select')}>
                <option>Quốc gia</option>
                <option>Anh</option>
                <option>Mỹ</option>
                <option>Hàn Quốc</option>
                <option>Việt Nam</option>
                <option>Nhật Bản</option>
              </select>
            </div>

            <div className={cx('filter-item')}>
              <select className={cx('filter-select')}>
                <option>Năm</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
              </select>
            </div>

            <div className={cx('filter-item')}>
              <select className={cx('filter-select')}>
                <option>Đang chiếu / Sắp chiếu</option>
                <option>Đang chiếu</option>
                <option>Sắp chiếu</option>
              </select>
            </div>

            <div className={cx('filter-item')}>
              <select className={cx('filter-select')}>
                <option>Mới nhất</option>
                <option>Xem nhiều nhất</option>
                <option>Đánh giá tốt nhất</option>
              </select>
            </div>
          </div>

          <div className={cx('content-text')}>
            <h3>PHIM ĐIỆN ẢNH</h3>
          </div>

          <div className={cx('list-film')}>
            <div className={cx('film-item')}>
              <a className={cx('film-img-link')} href="#">
                <img className={cx('film-img')} src="https://cdn.galaxycine.vn/media/2022/11/21/450_1669021106747.jpg"></img>
                <div className={cx('has-overlay')}></div>
              </a>
              <div className={cx('film-info')}>
                <a className={cx('film-name')} href="javascript:;">
                  <h3>Slient Prada</h3>
                </a>
                <div className={cx('film-rate')}>
                  <div className={cx('film-like')}>
                    <i class={cx('fa-solid fa-thumbs-up')}></i>
                    <span>Thích 0</span>
                  </div>
                  <div className={cx('film-view')}>
                    <i class={cx('fa-solid fa-eye')}></i>
                    <span>29</span>
                  </div>
                </div>
                <div className={cx('film-description')}>
                  Phim kể về một tên tội phạm được thả tự do vì thiếu bằng chứng buộc tội. Ngay lập tức, hắn liền truy lùng định sát hại cả nhà cô ấy.
                  Vụ việc đã khiến vị giáo sư vật lý trẻ trở thành thám tử bất đắc dĩ để điều tra phá án.
                </div>
              </div>
            </div>
            <div className={cx('film-item')}>
              <a className={cx('film-img-link')} href="#">
                <img className={cx('film-img')} src="https://cdn.galaxycine.vn/media/2022/11/19/nct-dream-5_1668837286104.jpg"></img>
                <div className={cx('has-overlay')}></div>
              </a>
              <div className={cx('film-info')}>
                <a className={cx('film-name')} href="javascript:;">
                  <h3>NCT Dream The Movie: In A Dream</h3>
                </a>
                <div className={cx('film-rate')}>
                  <div className={cx('film-like')}>
                    <i class={cx('fa-solid fa-thumbs-up')}></i>
                    <span>Thích 0</span>
                  </div>
                  <div className={cx('film-view')}>
                    <i class="fa-solid fa-eye"></i>
                    <span>172</span>
                  </div>
                </div>
                <div className={cx('film-description')}>Bộ phim đầu tay với màn trình diễn bùng nổ của 7 thành viên NCT Dream!</div>
              </div>
            </div>
            <div className={cx('film-item')}>
              <a className={cx('film-img-link')} href="#">
                <img className={cx('film-img')} src="https://cdn.galaxycine.vn/media/2022/11/21/450x30_1669022498111.jpg"></img>
                <div className={cx('has-overlay')}></div>
              </a>
              <div className={cx('film-info')}>
                <a className={cx('film-name')} href="javascript:;">
                  <h3>Tro tàn rực rỡ</h3>
                </a>
                <div className={cx('film-rate')}>
                  <div className={cx('film-like')}>
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Thích 0</span>
                  </div>
                  <div className={cx('film-view')}>
                    <i class="fa-solid fa-eye"></i>
                    <span>56</span>
                  </div>
                </div>
                <div className={cx('film-description')}>
                  “Tro Tàn Rực Rỡ” là sự trở lại của đạo diễn Bùi Thạc Chuyên sau 10 năm kể từ “Lời Nguyền Huyết Ngải”
                </div>
              </div>
            </div>
            <div className={cx('film-item')}>
              <a className={cx('film-img-link')} href="#">
                <img className={cx('film-img')} src="https://cdn.galaxycine.vn/media/2022/11/16/anne-co-gai-muon-mat-3_1668590415821.jpg"></img>
                <div className={cx('has-overlay')}></div>
              </a>
              <div className={cx('film-info')}>
                <a className={cx('film-name')} href="javascript:;">
                  <h3>Faces Of Anne</h3>
                </a>
                <div className={cx('film-rate')}>
                  <div className={cx('film-like')}>
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Thích 0</span>
                  </div>
                  <div className={cx('film-view')}>
                    <i class="fa-solid fa-eye"></i>
                    <span>357</span>
                  </div>
                </div>
                <div className={cx('film-description')}>
                  Anne - Cô Gái Muôn Mặt là thuộc thể loại kinh dị tâm lý. Phim quy tụ một số lượng lớn các nữ diễn viên trẻ để cùng hoá thân vào nhân
                  vật tên Anne.
                </div>
              </div>
            </div>
            <div className={cx('film-item')}>
              <a className={cx('film-img-link')} href="#">
                <img className={cx('film-img')} src="https://cdn.galaxycine.vn/media/2022/11/15/1350x900_1668505790856.jpg"></img>
                <div className={cx('has-overlay')}></div>
              </a>
              <div className={cx('film-info')}>
                <a className={cx('film-name')} href="javascript:;">
                  <h3>Hunt</h3>
                </a>
                <div className={cx('film-rate')}>
                  <div className={cx('film-like')}>
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Thích 0</span>
                  </div>
                  <div className={cx('film-view')}>
                    <i class="fa-solid fa-eye"></i>
                    <span>355</span>
                  </div>
                </div>
                <div className={cx('film-description')}>Hai đặc vụ cùng săn lùng tên gián điệp được cài vào để mưu sát tổng thống!</div>
              </div>
            </div>
            <div className={cx('film-item')}>
              <a className={cx('film-img-link')} href="#">
                <img className={cx('film-img')} src="https://cdn.galaxycine.vn/media/2022/11/14/1350wx900h_1668416515476.jpg"></img>
                <div className={cx('has-overlay')}></div>
              </a>
              <div className={cx('film-info')}>
                <a className={cx('film-name')} href="javascript:;">
                  <h3>Violent Night</h3>
                </a>
                <div className={cx('film-rate')}>
                  <div className={cx('film-like')}>
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Thích 0</span>
                  </div>
                  <div className={cx('film-view')}>
                    <i class="fa-solid fa-eye"></i>
                    <span>401</span>
                  </div>
                </div>
                <div className={cx('film-description')}>Nhóm lính đánh thuê tấn công gia đình giàu có nhưng đụng độ ông già Noel!</div>
              </div>
            </div>
            <div className={cx('film-item')}>
              <a className={cx('film-img-link')} href="#">
                <img className={cx('film-img')} src="https://cdn.galaxycine.vn/media/2022/11/14/450x300-the-menu_1668399453039.jpg"></img>
                <div className={cx('has-overlay')}></div>
              </a>
              <div className={cx('film-info')}>
                <a className={cx('film-name')} href="javascript:;">
                  <h3>The Menu</h3>
                </a>
                <div className={cx('film-rate')}>
                  <div className={cx('film-like')}>
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Thích 0</span>
                  </div>
                  <div className={cx('film-view')}>
                    <i class="fa-solid fa-eye"></i>
                    <span>605</span>
                  </div>
                </div>
                <div className={cx('film-description')}>
                  Thực Đơn Bí Ẩn (The Menu) là bộ phim hài kinh dị, mang màu sắc châm biếm đen tối với những tình huống đầy bất ngờ như một thực đơn
                  được phục vụ tốt nhất dành cho người xem.
                </div>
              </div>
            </div>
            <div className={cx('film-item')}>
              <a className={cx('film-img-link')} href="#">
                <img className={cx('film-img')} src="https://cdn.galaxycine.vn/media/2022/11/18/fearless-love-4_1668744017556.jpg"></img>
                <div className={cx('has-overlay')}></div>
              </a>
              <div className={cx('film-info')}>
                <a className={cx('film-name')} href="javascript:;">
                  <h3>Fearless Love</h3>
                </a>
                <div className={cx('film-rate')}>
                  <div className={cx('film-like')}>
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Thích 0</span>
                  </div>
                  <div className={cx('film-view')}>
                    <i class="fa-solid fa-eye"></i>
                    <span>866</span>
                  </div>
                </div>
                <div className={cx('film-description')}>
                  Yêu Không Sợ Hãi là một bộ phim hài, kinh dị với sự góp mặt của cặp đôi vàng trong làng giải trí Thái Lan là Dan và Pattie.
                </div>
              </div>
            </div>
          </div>

          <div className={cx('row')}>
            <div className={cx('col-12')}>
              <ul className={cx('pagination', 'pull-right')}>
                <li className={cx('pagination-item')}>
                  <a className={cx('pagination-item__link')}>«</a>
                </li>
                <li className={cx('pagination-item')}>
                  <a className={cx('pagination-item__link')}>‹</a>
                </li>
                <li className={cx('pagination-item', 'active')}>
                  <a className={cx('pagination-item__link')}>1</a>
                </li>
                <li className={cx('pagination-item')}>
                  <a className={cx('pagination-item__link')}>2</a>
                </li>
                <li className={cx('pagination-item')}>
                  <a className={cx('pagination-item__link')}>3</a>
                </li>
                <li className={cx('pagination-item')}>
                  <a className={cx('pagination-item__link')}>4</a>
                </li>
                <li className={cx('pagination-item')}>
                  <a className={cx('pagination-item__link')}>5</a>
                </li>
                <li className={cx('pagination-item')}>
                  <a className={cx('pagination-item__link')}>›</a>
                </li>
                <li className={cx('pagination-item')}>
                  <a className={cx('pagination-item__link')}>»</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={cx('col-4')}>{<MovieSidebar></MovieSidebar>}</div>
      </div>
      <div className={cx('row')}>
        <div className={cx('col-12')}>
          <h3 className={cx('cinema-name')}>Galaxy Cinema</h3>
          <div className={cx('cinema-introduce')}>
            <p>
              Bạn là một người mê phim, bạn thích khám phá bí mật phía sau hậu trường của các bom tấn, bạn thần tượng nhà làm phim nào đấy bởi tư duy
              vượt thời đại, phong cách quay phim đặc biệt và những câu chuyện đầy mới lạ, bạn ngưỡng mộ một ngôi sao bởi khả năng diễn xuất cực đỉnh…
              Thậm chí nếu bạn muốn tìm hiểu sâu hơn về điện ảnh, các trào lưu chủ nghĩa từng tạo tiếng vang trong lịch sử, sự ra đời của các thể loại
              và bản sắc riêng của từng nền điện ảnh đến từ các quốc gia khác nhau.
            </p>
            <p>
              Chào mừng đến chuyên trang điện ảnh, nơi được xem như một thư viện với đầy đủ các thông tin về những bộ phim, đạo diễn, diễn viên dành
              cho người yêu phim. Tại đây bạn dễ dàng tìm hiểu được tiểu sử của vị đạo diễn yêu thích, có được thông tin bên lề của các bộ phim hay
              đang chiếu tại rạp. Ngoài ra nếu đam mê những tác phẩm kinh điển trong quá khứ, vẫn có những bài bình luận với hạng mục Phim Kinh Điển
            </p>
            <p>
              Đối với những ai có hứng thú tìm hiểu đời tư của các minh tinh hạng A, <span style={{ fontWeight: '600' }}>Galaxy Cinema</span> cũng
              luôn cập nhật các tin tức nóng hổi từ họ. Bên cạnh đó còn bao gồm các bài phân tích mang tính chuyên môn, các chủ đề giúp nâng cao kiến
              thức điện ảnh cũng được giới thiệu qua loạt bài Ký Sự Điện Ảnh.
            </p>
            <p>
              <span style={{ fontWeight: '600' }}>Galaxy Cinema</span> – rạp chiếu được trang bị hệ thống âm thanh và hình ảnh hàng đầu Việt Nam, tự
              hào là Trạm Điện Ảnh sẵn sàng đưa bạn vào thế giới Phim Như Sống – Sống Như Phim, cùng những chuyến tàu với trải nghiệm thú vị tuyệt vời
              nhất trên màn ảnh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieType;
