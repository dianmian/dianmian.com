// ========================================
// 广东靛棉纺织有限公司 — 网站交互脚本
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Nav Toggle ---
    const navToggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');

    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('open');
        });

        // Close nav on link click
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
            });
        });

        // Close nav on click outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.header-inner')) {
                nav.classList.remove('open');
            }
        });
    }

    // --- Header scroll shadow ---
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Contact form (simple front-end only) ---
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = form.querySelector('.btn');
            const originalText = btn.textContent;

            btn.textContent = '提交中...';
            btn.disabled = true;

            // Simple form submission via mailto or formspree-style endpoint
            const name = document.getElementById('formName').value.trim();
            const company = document.getElementById('formCompany').value.trim();
            const email = document.getElementById('formEmail').value.trim();
            const message = document.getElementById('formMessage').value.trim();

            const body = `询盘信息：\n\n姓名：${name}\n公司：${company}\n邮箱：${email}\n需求：${message}`;

            // Attempt mailto as fallback
            window.location.href = `mailto:85700198@qq.com?subject=靛棉纺织_在线询盘&body=${encodeURIComponent(body)}`;

            setTimeout(() => {
                btn.textContent = '已发送 ✓';
                btn.style.background = '#2e7d32';
                btn.style.borderColor = '#2e7d32';

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style.background = '';
                    btn.style.borderColor = '';
                    form.reset();
                }, 3000);
            }, 800);
        });
    }

    // --- Scroll reveal animation (lightweight) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and items
    document.querySelectorAll('.product-card, .prod-item, .quality-item, .about-image-placeholder').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

});
