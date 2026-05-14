// Sticky header
const header = document.getElementById('header');
if (header && !header.classList.contains('solid')) {
    const onScroll = () => {
        if (window.scrollY > 60) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// Mobile menu drawer
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
if (toggle && nav) {
    const close = () => {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        document.body.classList.remove('menu-open');
    };
    toggle.addEventListener('click', () => {
        const opening = !nav.classList.contains('open');
        nav.classList.toggle('open', opening);
        toggle.classList.toggle('open', opening);
        document.body.classList.toggle('menu-open', opening);
    });
    // Close when a nav link is clicked
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    // Close on backdrop click
    document.body.addEventListener('click', e => {
        if (document.body.classList.contains('menu-open') &&
            !nav.contains(e.target) &&
            !toggle.contains(e.target)) {
            close();
        }
    });
}

// Smooth-scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (id.length > 1) {
            const el = document.querySelector(id);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});
