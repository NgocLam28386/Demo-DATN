import React from 'react';

function Footer(props) {
  return (
    <div>
      <footer className="footer-area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Khám phá</h4>
              <ul>
                <li><a href="#">Vòng Tay</a></li>
                <li><a href="#">Dây Chuyền</a></li>
                <li><a href="#">Hoa Tai</a></li>
                <li><a href="#">Nhẫn</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Chăm sóc khách hàng</h4>
              <ul>
                <li><a href="#">Câu hỏi thường gặp</a></li>
                <li><a href="#">Chính sách bảo mật</a></li>
                <li><a href="#">Chính sách thanh toán</a></li>
                <li><a href="#">Chính sách giao nhận</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Dịch vụ giao hàng</h4>
              <ul>
                <li><a href="#">Giao hàng tiết kiệm</a></li>
                <li><a href="#">Kiểm tra đơn hàng</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Về chúng tôi</h4>
              <ul>
                <li><a href="#">Về Padora</a></li>
                <li><a href="#">Câu chuyện Padora</a></li>
                <li><a href="#">Tuyển dụng</a></li>
                <li><a href="#">Liên hệ</a></li>
              </ul>
            </div>

          </div>
          <div className="footer-bottom row align-items-center">
            <p className="footer-text m-0 col-lg-8 col-md-12">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
               Đồ Án Tốt Nghiệp _Padora_  Cao Đằng FPT Polytechnic 2024  <i className="fa fa-heart-o" aria-hidden="true" />  <a href="https://colorlib.com" target="_blank"></a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>

          </div>
        </div>
      </footer>

    </div>
  );
}

export default Footer;