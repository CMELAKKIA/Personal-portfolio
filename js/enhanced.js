/* ============================================================
   ENHANCED JAVASCRIPT - Animations, Observer, and Interactivity
   ============================================================ */

(function ($) {
    "use strict";

    // Initialize Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                entry.target.classList.add('fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe achievement cards
    document.querySelectorAll('.achievement-card').forEach(el => {
        observer.observe(el);
    });

    // Observe service items
    document.querySelectorAll('.service-item').forEach(el => {
        observer.observe(el);
    });

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(el => {
        observer.observe(el);
    });

    // Observe portfolio items
    document.querySelectorAll('.portfolio-wrap').forEach(el => {
        observer.observe(el);
    });

    // Observe blog items
    document.querySelectorAll('.blog-item').forEach(el => {
        observer.observe(el);
    });

    // Update active nav link on scroll
    $(window).on('scroll', function () {
        var scrollPos = $(document).scrollTop();
        $('.navbar-nav a').each(function () {
            var refElement = $($(this).attr('href'));
            if (refElement.length > 0) {
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.navbar-nav a').removeClass('active');
                    $(this).addClass('active');
                }
            }
        });
    });

    // Close mobile menu on link click
    $(".navbar-nav a").on('click', function (event) {
        // Close mobile menu if open
        if ($('#navbarCollapse').hasClass('show')) {
            $('.navbar-toggler').click();
        }
    });

    // Smooth scroll offset for sticky navbar
    $(document).on('click', 'a[href^="#"]', function(e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            var navbar = $('.navbar');
            var navHeight = navbar.height() || 0;
            var scrollPos = target.offset().top - navHeight - 20;
            
            $('html, body').animate({
                scrollTop: scrollPos
            }, 1000, 'easeInOutExpo');
        }
    });

})(jQuery);
