import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Mail, School, PenTool, Camera, MessageCircle, CheckSquare, Ban, Ruler, Info, Globe, Clock } from 'lucide-react';
import './Rules.css';

const Rules: React.FC = () => {
    const rules = [
        { icon: <ShieldAlert size={32} />, title: "Không đả kích", text: "Không đả kích cá nhân hoặc tập thể.", span: "col-span-2" },
        { icon: <School size={32} />, title: "Chủ đề trường học", text: "Chỉ nhận câu chuyện liên quan đến trường học.", span: "col-span-1" },
        { icon: <Mail size={32} />, title: "Gửi qua Form", text: "Không nhận CFS qua Fanpage (trừ mất đồ, ảnh, video).", span: "col-span-1" },
        { icon: <PenTool size={32} />, title: "Ngôn ngữ", text: "Được dùng teencode, nhưng phải dễ hiểu.", span: "col-span-1" },
        { icon: <Camera size={32} />, title: "Ảnh & Video", text: "CFS kèm ảnh/video gửi qua link (Drive, Imgur...).", span: "col-span-2" },
        { icon: <MessageCircle size={32} />, title: "Lịch sự", text: "Nội dung lịch sự, không nhạy cảm hay bạo lực.", span: "col-span-1" },
        { icon: <CheckSquare size={32} />, title: "Trung thực", text: "Thông tin phải trung thực, không xúc phạm.", span: "col-span-1" },
        { icon: <Ban size={32} />, title: "Không QC", text: "Không quảng cáo, PR, bán hàng.", span: "col-span-1" },
        { icon: <Ruler size={32} />, title: "Độ dài", text: "Bài viết cần đủ dài và rõ ý.", span: "col-span-1" },
        { icon: <Info size={32} />, title: "Chi tiết", text: "CFS cụ thể cần đủ thông tin chi tiết.", span: "col-span-1" },
        { icon: <Globe size={32} />, title: "Tiếng Việt", text: "Tránh ngôn ngữ địa phương khó hiểu.", span: "col-span-1" },
        { icon: <Clock size={32} />, title: "Kiên nhẫn", text: "CFS duyệt trong 24-48 giờ, hãy kiên nhẫn.", span: "col-span-2" },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="section rules-section" id="rules">
            <div className="container">
                <div className="section-header text-center mb-12">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Quy Định Gửi Confessions
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Để cộng đồng luôn văn minh và tích cực, hãy tuân thủ các quy tắc sau nhé!
                    </motion.p>
                </div>

                <motion.div
                    className="bento-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {rules.map((rule, index) => (
                        <motion.div
                            key={index}
                            className={`bento-card ${rule.span}`}
                            variants={item}
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        >
                            <div className="card-icon-wrapper">
                                {rule.icon}
                            </div>
                            <div className="card-content">
                                <h3>{rule.title}</h3>
                                <p>{rule.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Rules;
