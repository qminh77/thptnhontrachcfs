import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
    const scrollToForm = () => {
        const formElement = document.getElementById('write-cfs');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span>✨ Cổng thông tin chính thức</span>
                    </motion.div>

                    <h1 className="hero-title">
                        THPT Nhơn Trạch <br />
                        <span className="text-gradient">Confessions</span>
                    </h1>

                    <p className="hero-description">
                        Nơi những câu chuyện thầm kín được lắng nghe. Chia sẻ ẩn danh về học đường,
                        tình yêu và cuộc sống học sinh một cách an toàn và bảo mật.
                    </p>

                    <div className="hero-actions">
                        <motion.button
                            onClick={scrollToForm}
                            className="btn btn-primary btn-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Viết Confession <ArrowRight size={20} />
                        </motion.button>
                        <motion.a
                            href="#rules"
                            className="btn btn-outline btn-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Xem Quy Định
                        </motion.a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">10K+</span>
                            <span className="stat-label">Confessions</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">24h</span>
                            <span className="stat-label">Duyệt bài</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Ẩn danh</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="image-card-wrapper">
                        <motion.div
                            className="image-card main-card"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        >
                            <img src="/assets/images/cover-image.jpg" alt="THPT Nhơn Trạch" />
                        </motion.div>
                        <motion.div
                            className="floating-card card-1"
                            animate={{ y: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        >
                            <span>💌</span>
                            <p>Gửi ẩn danh</p>
                        </motion.div>
                        <motion.div
                            className="floating-card card-2"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
                        >
                            <span>🔒</span>
                            <p>Bảo mật 100%</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
