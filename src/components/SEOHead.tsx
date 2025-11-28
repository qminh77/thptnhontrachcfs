import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead: React.FC = () => {
    const siteTitle = "THPT Nhơn Trạch Confessions";
    const siteDescription = "Nơi chia sẻ câu chuyện ẩn danh về học đường, tình yêu, cuộc sống,.. Của học sinh tại THPT Nhơn Trạch Confessions.";
    const siteUrl = "https://nhontrachcfs.edu.vn/";
    const siteImage = "https://nhontrachcfs.edu.vn/assets/images/cover-image.jpg";

    return (
        <Helmet>
            <html lang="vi" />
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content="THPT Nhơn Trạch, confessions, tâm sự học đường, học sinh, trường học, Đồng Nai, tình yêu học trò, câu chuyện học đường" />
            <meta name="author" content="THPT Nhơn Trạch Confessions" />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="language" content="vi-VN" />
            <meta name="revisit-after" content="1 day" />
            <meta name="rating" content="general" />
            <meta name="distribution" content="global" />

            {/* Geographic targeting */}
            <meta name="geo.region" content="VN-89" />
            <meta name="geo.placename" content="Nhơn Trạch, Đồng Nai, Vietnam" />
            <meta name="geo.position" content="10.8431;106.8197" />
            <meta name="ICBM" content="10.8431, 106.8197" />

            <meta name="theme-color" content="#0f172a" />
            <link rel="canonical" href={siteUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={siteImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:locale" content="vi_VN" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={siteImage} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "THPT Nhơn Trạch Confessions",
                    "alternateName": ["Nhơn Trạch CFS", "NT Confessions"],
                    "description": "Nơi chia sẻ câu chuyện ẩn danh về học đường, tình yêu, cuộc sống của học sinh tại THPT Nhơn Trạch",
                    "url": siteUrl,
                    "logo": "https://nhontrachcfs.edu.vn/assets/logo/logo.png",
                    "image": siteImage,
                    "sameAs": ["https://www.facebook.com/thptnhontrachcfs"],
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+84964560507",
                        "contactType": "customer support",
                        "email": "contact@nhontrachcfs.edu.vn"
                    },
                    "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "VN",
                        "addressLocality": "Đồng Nai"
                    }
                })}
            </script>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "THPT Nhơn Trạch Confessions",
                    "url": siteUrl,
                    "description": "Trang web chính thức của THPT Nhơn Trạch Confessions - nơi chia sẻ tâm sự học đường",
                    "inLanguage": "vi-VN",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://nhontrachcfs.edu.vn/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                })}
            </script>
        </Helmet>
    );
};

export default SEOHead;
