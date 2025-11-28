import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Image, AlertCircle, CheckCircle, Sparkles } from 'lucide-react';
import './ConfessionForm.css';

const ConfessionForm: React.FC = () => {
    const [content, setContent] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim()) return;

        setIsSubmitting(true);
        setStatus('idle');

        const formData = new FormData();
        formData.append('entry.1155196915', content);
        formData.append('entry.2020457179', imageLink);

        try {
            await fetch(
                'https://docs.google.com/forms/d/e/1FAIpQLSeFbSoHAb22goZbapwWFofy5IEZv4w7rmV1g7qBCxW_9o2OBw/formResponse',
                {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors',
                }
            );

            setStatus('success');
            setContent('');
            setImageLink('');
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="form-section" id="write-cfs">
            <div className="form-background-glow"></div>
            <div className="container">
                <motion.div
                    className="form-wrapper"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="glass-card">
                        <div className="form-header-glass">
                            <div className="icon-badge-glass">
                                <Sparkles size={24} />
                            </div>
                            <h2>Gửi Tâm Sự</h2>
                            <p>Câu chuyện của bạn sẽ được giữ bí mật tuyệt đối.</p>
                        </div>

                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    className="success-state"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                >
                                    <div className="success-icon-wrapper">
                                        <CheckCircle size={64} />
                                    </div>
                                    <h3>Đã gửi thành công!</h3>
                                    <p>Admin sẽ duyệt bài của bạn sớm nhất có thể.</p>
                                    <button className="btn btn-outline" onClick={() => setStatus('idle')}>
                                        Gửi thêm confession khác
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    onSubmit={handleSubmit}
                                    className="confession-form-glass"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className={`input-group-glass ${focusedField === 'content' || content ? 'active' : ''}`}>
                                        <textarea
                                            id="content"
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                            onFocus={() => setFocusedField('content')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            rows={6}
                                        />
                                        <label htmlFor="content">Nội dung Confession</label>
                                        <div className="char-count">{content.length} ký tự</div>
                                    </div>

                                    <div className={`input-group-glass ${focusedField === 'image' || imageLink ? 'active' : ''}`}>
                                        <div className="input-with-icon-glass">
                                            <Image size={20} className="field-icon" />
                                            <input
                                                type="text"
                                                id="imageLink"
                                                value={imageLink}
                                                onChange={(e) => setImageLink(e.target.value)}
                                                onFocus={() => setFocusedField('image')}
                                                onBlur={() => setFocusedField(null)}
                                            />
                                            <label htmlFor="imageLink" className="label-with-icon">Link hình ảnh/video (Tùy chọn)</label>
                                        </div>
                                    </div>

                                    {status === 'error' && (
                                        <motion.div
                                            className="error-message"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                        >
                                            <AlertCircle size={20} />
                                            <span>Có lỗi xảy ra. Vui lòng thử lại sau.</span>
                                        </motion.div>
                                    )}

                                    <motion.button
                                        type="submit"
                                        className="btn btn-primary submit-btn-glass"
                                        disabled={isSubmitting || !content.trim()}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isSubmitting ? 'Đang gửi...' : (
                                            <>
                                                Gửi Ngay <Send size={18} />
                                            </>
                                        )}
                                    </motion.button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ConfessionForm;
