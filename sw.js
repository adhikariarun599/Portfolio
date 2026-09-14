<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6496255246441755"
     crossorigin="anonymous"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arun Adhikari - Official Portfolio & Admin</title>
    
    <!-- SEO META TAGS -->
    <meta name="description" content="Official Portfolio of Arun Adhikari - Investor, Trader, Graphic Designer, and Web Developer from Shitaganga-03, Arghakhanchi, Nepal.">
    <meta name="keywords" content="Arun Adhikari, Arun Adhikari Nepal, Shitaganga Arghakhanchi, Web Developer Nepal, Technical Analyst Nepal">
    <meta name="author" content="Arun Adhikari">

    <!-- OPEN GRAPH / SOCIAL MEDIA SHARE TAGS -->
    <meta property="og:title" content="Arun Adhikari - Official Portfolio & Admin">
    <meta property="og:description" content="Discover professional services, courses, and financial insights by Arun Adhikari.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://arunadhikari.com.np">

    <!-- PERSON SCHEMA MARKUP -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Arun Adhikari",
      "url": "https://arunadhikari.com.np",
      "jobTitle": "Web Developer & Financial Analyst",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Shitaganga",
        "addressRegion": "Arghakhanchi",
        "addressCountry": "NP"
      },
      "sameAs": [
        "https://www.facebook.com/helloarunadhikari/",
        "https://youtube.com/@ArunAdhikari"
      ]
    }
    </script>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    
    <!-- EXTERNAL CSS LINK -->
    <link rel="stylesheet" href="style.css">
    
    <!-- FIREBASE SDKs -->
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
</head>
<body>

    <!-- TOP NOTICE BANNER -->
    <div id="siteNoticeBanner">
        <span id="siteNoticeText">📢 विशेष अफर: आज मात्र सबै कोर्सहरूमा भारी छुट!</span>
    </div>

    <!-- NAVBAR -->
    <nav id="mainNavbar">
        <div class="logo" onclick="window.scrollTo({top:0, behavior:'smooth'})">
            <span>Arun Adhikari</span>
            <div class="candlestick-chart-svg">
                <svg width="60" height="24" viewBox="0 0 100 40">
                    <line x1="0" y1="20" x2="100" y2="20" stroke="#f23645" stroke-width="1" stroke-dasharray="2,2"/>
                    <line x1="10" y1="22" x2="10" y2="38" stroke="#089981" stroke-width="1.5"/>
                    <rect x="8" y="26" width="4" height="8" fill="#089981"/>
                    <line x1="34" y1="10" x2="34" y2="28" stroke="#089981" stroke-width="1.5"/>
                    <rect x="32" y="14" width="4" height="11" fill="#089981"/>
                    <line x1="82" y1="2" x2="82" y2="22" stroke="#089981" stroke-width="1.5"/>
                    <rect x="80" y="5" width="4" height="12" fill="#089981"/>
                </svg>
            </div>
        </div>

        <button class="menu-toggle" id="menuToggleBtn" onclick="toggleMobileMenu()">
            <i class="fas fa-bars"></i>
        </button>

        <ul class="nav-links" id="navLinks">
            <li><a href="#about" class="nav-box-item box-about" onclick="closeMobileMenu()"><i class="fas fa-user"></i> About</a></li>
            <li><a href="#achievements" class="nav-box-item box-achievements" onclick="closeMobileMenu()"><i class="fas fa-trophy"></i> Achievements</a></li>
            <li><a href="#services" class="nav-box-item box-services" onclick="closeMobileMenu()"><i class="fas fa-concierge-bell"></i> Services</a></li>
            <li><a href="https://news.arunadhikari.com.np" class="nav-box-item box-news" target="_blank"><i class="fas fa-newspaper"></i> News Portal</a></li>
            <li><a href="https://courses.arunadhikari.com.np" class="nav-box-item box-courses" target="_blank"><i class="fas fa-graduation-cap"></i> Courses Portal</a></li>
        </ul>
    </nav>

    <!-- PORTFOLIO HERO -->
    <section class="hero">
        <div class="hero-content">
            <div class="greeting">Hello, Namaste! I am</div>
            <h1>Arun Adhikari</h1>
            <div class="location"><i class="fas fa-map-marker-alt"></i> Shitaganga-03, Arghakhanchi, Nepal</div>
            <div class="roles"><span id="fullTypingRoles"></span></div>
            <div class="hero-buttons">
                <a href="https://courses.arunadhikari.com.np" class="nav-box-item box-courses" style="height: 44px; padding: 0 1.5rem; font-size: 1rem;" target="_blank">
                    <i class="fas fa-graduation-cap"></i> View Courses & Offers
                </a>
                <a href="https://wa.me/9779857069058" target="_blank" class="nav-box-item box-about" style="height: 44px; padding: 0 1.5rem; font-size: 1rem;">
                    <i class="fab fa-whatsapp"></i> WhatsApp Me
                </a>
            </div>
        </div>
        <div class="hero-image-container">
            <div class="profile-img-box">
                <img src="images/profile.png" alt="Arun Adhikari" onerror="this.src='https://via.placeholder.com/280';">
            </div>
        </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about">
        <h2 class="section-title">About Me</h2>
        <div class="about-box">
            <p>Hello! I am a passionate and multi-skilled professional operating across <span class="highlight-dark-blue">Creative Design</span>, <span class="highlight-dark-blue">Web Technologies</span>, and the <span class="highlight-dark-blue">Financial Sector</span>.</p>
            <p style="margin-top: 0.8rem;">With <span class="highlight-dark-blue">10 years of experience</span> in the <span class="highlight-dark-blue">Microfinance Industry</span> and stock market analysis (<span class="highlight-dark-blue">Technical & Fundamental Analysis</span>), I am committed to sharing practical skills and helping others grow.</p>
        </div>
    </section>

    <!-- ACHIEVEMENTS -->
    <section id="achievements" style="background:#ffffff; border-top:1px solid #e2e8f0; border-bottom:1px solid #e2e8f0;">
        <h2 class="section-title">Key Achievement</h2>
        <div class="achievement-card">
            <div class="muni-logo-box">
                <img src="images/shitaganga-logo.png" alt="Shitaganga Municipality Logo" onerror="this.src='https://via.placeholder.com/130';">
            </div>
            <div class="achievement-info">
                <span style="background:#fef3c7; color:#92400e; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.85rem; font-weight:700;">🏆 1st Place Award Winner</span>
                <h3 style="margin-top:6px; color:var(--dark);">Official Logo Designer – Shitaganga Municipality</h3>
                <div style="color:#d97706; font-weight:700; font-size:1.1rem; margin:4px 0;">NPR 50,000 Cash Prize</div>
                <p>Designed and created the official municipal identity logo for Shitaganga Municipality, Arghakhanchi.</p>
            </div>
        </div>
    </section>

    <!-- SERVICES & EXPERTISE -->
    <section id="services">
        <h2 class="section-title">Services & Expertise</h2>
        <p class="section-sub">Areas of professional expertise and client support</p>
        
        <div class="services-grid">
            <div class="service-card">
                <h3><i class="fas fa-palette" style="color:var(--icon-yellow);"></i> Graphic Design</h3>
                <p><span class="highlight-dark-blue">5 years of experience</span> in Illustrator, Photoshop & InDesign branding.</p>
            </div>
            <div class="service-card">
                <h3><i class="fas fa-code" style="color:var(--icon-yellow);"></i> Web & App Development</h3>
                <p><span class="highlight-dark-blue">5 years of experience</span> in designing responsive websites and mobile interfaces.</p>
            </div>
            <div class="service-card">
                <h3><i class="fas fa-chart-line" style="color:var(--icon-yellow);"></i> Financial Guidance</h3>
                <p><span class="highlight-dark-blue">10 years of experience</span> in Banking/Microfinance & Stock Market Analysis.</p>
            </div>
            <div class="service-card">
                <h3><i class="fas fa-video" style="color:var(--icon-yellow);"></i> Video Production</h3>
                <p><span class="highlight-dark-blue">Professional Editing</span> using DaVinci Resolve and CapCut.</p>
            </div>
            <div class="service-card">
                <h3><i class="fas fa-bullhorn" style="color:var(--icon-yellow);"></i> Digital Marketing & Branding</h3>
                <p><span class="highlight-dark-blue">Brand building strategies</span>, social media growth, and visual assets design.</p>
            </div>
            <div class="service-card">
                <h3><i class="fas fa-chalkboard-teacher" style="color:var(--icon-yellow);"></i> Practical Mentorship</h3>
                <p><span class="highlight-dark-blue">One-on-One training</span> for students in NEPSE technical analysis and modern tech skills.</p>
            </div>
        </div>
    </section>

    <!-- PROOF IMAGE PREVIEW MODAL -->
    <div id="imagePreviewModal" class="modal" style="z-index: 3500;" onclick="closeModal('imagePreviewModal')">
        <div style="max-width: 90%; max-height: 90%; text-align: center;">
            <img id="fullImagePreviewSrc" src="" style="max-width: 100%; max-height: 85vh; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <p style="color:white; margin-top:8px;">क्लिक गरेर बन्द गर्नुहोस्</p>
        </div>
    </div>

    <!-- FOOTER -->
    <footer id="contact">
        <h3>Connect & Contact</h3>
        <p style="margin-top:4px;">WhatsApp / Phone: +977 9857069058 | Email: info@arunadhikari.com.np</p>
        <div class="social-links">
            <a href="https://www.facebook.com/helloarunadhikari/" target="_blank" class="social-btn facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://youtube.com/@ArunAdhikari" target="_blank" class="social-btn youtube"><i class="fab fa-youtube"></i></a>
            <a href="https://wa.me/9779857069058" target="_blank" class="social-btn whatsapp"><i class="fab fa-whatsapp"></i></a>
        </div>
        <p style="font-size:0.85rem; margin-top:1rem; color:#64748b;">&copy; 2026 Arun Adhikari. All Rights Reserved.</p>
    </footer>

    <!-- EXTERNAL JS LINK -->
    <script src="sw.js"></script>
</body>
</html>
