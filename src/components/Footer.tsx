import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h3>THPT Nhơn Trạch Confessions</h3>
                        <p>Kết nối tâm sự học đường</p>
                    </div>

                    <div className="footer-contact">
                        <h4>Liên Hệ</h4>
                        <p>Email: <a href="mailto:contact@nhontrachcfs.edu.vn">contact@nhontrachcfs.edu.vn</a></p>
                        <p>Phone: <a href="tel:+84964560507">0964560507</a></p>
                    </div>

                    <div className="footer-ncsc">
                        <a
                            href="https://tinnhiemmang.vn/danh-ba-tin-nhiem/nhon-trach-cfs-1660919952"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/assets/logo/ncsc-logo.png" alt="NCSC Certified" width="80" />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 THPT Nhơn Trạch Confessions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
