// Xenobill / Xeno POS - Active TOC Highlight & Smooth Scroll

document.addEventListener('DOMContentLoaded', () => {
    const tocItems = document.querySelectorAll('.toc-item');
    const sections = document.querySelectorAll('.content-block');

    function setActive(id) {
        tocItems.forEach(item => {
            if (item.getAttribute('href') === `#${id}`) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Scroll Handler for robust active state tracking (including page bottom)
    function onScroll() {
        const scrollPosition = window.scrollY + 120;
        const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60);

        if (isAtBottom) {
            // Force last section to be active when at the bottom of the page
            const lastSectionId = sections[sections.length - 1].getAttribute('id');
            setActive(lastSectionId);
            return;
        }

        // Find current visible section
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollPosition >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            setActive(currentSectionId);
        }
    }

    // Attach scroll listener with passive performance flag
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Run once on initial load

    // Smooth scroll offset adjustment on TOC click
    tocItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetEl = document.querySelector(targetId);

            if (targetEl) {
                const headerOffset = 80;
                const elementPosition = targetEl.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                setActive(targetId.replace('#', ''));

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
