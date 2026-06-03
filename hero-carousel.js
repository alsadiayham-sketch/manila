(function () {
    var FALLBACK_LOGO = 'logo.png';
    var heroSlides = [];
    var currentSlideIndex = 0;
    var autoPlayHandle = null;
    var heroUnsubscribe = null;

    document.addEventListener('DOMContentLoaded', function () {
        renderSlides(window.DEFAULT_HERO_SLIDES || []);
        subscribeToHeroSlides();
    });

    window.addEventListener('beforeunload', function () {
        if (typeof heroUnsubscribe === 'function') heroUnsubscribe();
        stopAutoPlay();
    });

    function subscribeToHeroSlides() {
        if (!window.db || !window.db.collection) return;
        try {
            heroUnsubscribe = window.db.collection('heroSlides').orderBy('order').onSnapshot(function (snapshot) {
                var slidesFromDb = snapshot.docs.map(function (docSnap, index) {
                    var slide = docSnap.data() || {};
                    slide.id = docSnap.id;
                    return normalizeSlide(slide, index + 1);
                }).filter(function (slide) {
                    return !!slide.mediaUrl;
                });

                renderSlides(slidesFromDb.length ? slidesFromDb : (window.DEFAULT_HERO_SLIDES || []));
            }, function () {
                renderSlides(window.DEFAULT_HERO_SLIDES || []);
            });
        } catch (error) {
            console.error('Hero carousel error:', error);
            renderSlides(window.DEFAULT_HERO_SLIDES || []);
        }
    }

    function normalizeSlide(slide, index) {
        if (typeof window.normalizeHeroSlide === 'function') {
            return window.normalizeHeroSlide(slide, index);
        }
        return {
            id: String(slide.id || 'hero_' + index),
            mediaUrl: String(slide.mediaUrl || '').trim(),
            mediaType: String(slide.mediaType || 'image').toLowerCase(),
            title: String(slide.title || '').trim(),
            subtitle: String(slide.subtitle || '').trim(),
            order: Number(slide.order) || index,
            ctaText: String(slide.ctaText || 'تسوقي الآن').trim(),
            ctaLink: String(slide.ctaLink || '#products').trim() || '#products'
        };
    }

    function renderSlides(sourceSlides) {
        var slidesContainer = document.getElementById('heroSlidesContainer');
        var dotsContainer = document.getElementById('heroDots');
        if (!slidesContainer || !dotsContainer) return;

        heroSlides = (typeof window.normalizeHeroSlides === 'function'
            ? window.normalizeHeroSlides(sourceSlides)
            : (Array.isArray(sourceSlides) ? sourceSlides : []).map(normalizeSlide)
        );

        if (!heroSlides.length) return;
        currentSlideIndex = Math.min(currentSlideIndex, heroSlides.length - 1);

        slidesContainer.innerHTML = heroSlides.map(function (slide, index) {
            var media = slide.mediaType === 'video'
                ? '<video class="hero-media-element" src="' + escapeHtml(slide.mediaUrl) + '" autoplay muted loop playsinline preload="metadata"></video>'
                : '<img class="hero-media-element" src="' + escapeHtml(slide.mediaUrl) + '" alt="' + escapeHtml(slide.title || 'Manila Hero') + '">';
            var cta = slide.ctaText
                ? '<a href="' + escapeHtml(slide.ctaLink || '#products') + '" class="btn-primary">' + escapeHtml(slide.ctaText) + '</a>'
                : '';
            return '<article class="hero-slide' + (index == currentSlideIndex ? ' active' : '') + '" data-slide-index="' + index + '">' +
                '<div class="hero-slide-media">' + media + '</div>' +
                '<div class="hero-content">' +
                    '<div class="hero-logo"><img src="' + FALLBACK_LOGO + '" alt="Manila Perfume" class="hero-logo-img"></div>' +
                    '<h1>' + escapeHtml(slide.title || 'مانيلا') + '</h1>' +
                    (slide.subtitle ? '<p class="hero-subtitle">' + escapeHtml(slide.subtitle) + '</p>' : '') +
                    cta +
                '</div>' +
            '</article>';
        }).join('');

        dotsContainer.innerHTML = heroSlides.map(function (_, index) {
            return '<button class="hero-dot' + (index == currentSlideIndex ? ' active' : '') + '" type="button" aria-label="الانتقال إلى الشريحة ' + (index + 1) + '" aria-current="' + (index == currentSlideIndex ? 'true' : 'false') + '" data-slide-index="' + index + '"></button>';
        }).join('');

        Array.prototype.forEach.call(dotsContainer.querySelectorAll('.hero-dot'), function (dot) {
            dot.addEventListener('click', function () {
                goToSlide(parseInt(dot.getAttribute('data-slide-index'), 10) || 0, true);
            });
        });

        syncVideos();
        startAutoPlay();
    }

    function goToSlide(index, restartTimer) {
        if (!heroSlides.length) return;
        currentSlideIndex = (index + heroSlides.length) % heroSlides.length;
        Array.prototype.forEach.call(document.querySelectorAll('.hero-slide'), function (slide, slideIndex) {
            slide.classList.toggle('active', slideIndex === currentSlideIndex);
        });
        Array.prototype.forEach.call(document.querySelectorAll('.hero-dot'), function (dot, dotIndex) {
            var isActive = dotIndex === currentSlideIndex;
            dot.classList.toggle('active', isActive);
            dot.setAttribute('aria-current', isActive ? 'true' : 'false');
        });
        syncVideos();
        if (restartTimer) startAutoPlay();
    }

    function nextSlide() {
        goToSlide(currentSlideIndex + 1, false);
    }

    function startAutoPlay() {
        stopAutoPlay();
        if (heroSlides.length <= 1) return;
        autoPlayHandle = window.setInterval(nextSlide, 6000);
    }

    function stopAutoPlay() {
        if (autoPlayHandle) {
            window.clearInterval(autoPlayHandle);
            autoPlayHandle = null;
        }
    }

    function syncVideos() {
        Array.prototype.forEach.call(document.querySelectorAll('.hero-slide video'), function (video, index) {
            if (index === currentSlideIndex) {
                var playPromise = video.play();
                if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(function () {});
            } else if (typeof video.pause === 'function') {
                video.pause();
                video.currentTime = 0;
            }
        });
    }

    function escapeHtml(value) {
        if (typeof window.escapeHtml === 'function') return window.escapeHtml(value);
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
})();
