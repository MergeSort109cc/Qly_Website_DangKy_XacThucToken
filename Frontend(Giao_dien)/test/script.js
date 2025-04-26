const sections = document.querySelectorAll('section');
const header = document.querySelector('header'); // Assuming you have a <header> element for your navigation

const titleMap = {
    hero: 'Trang Chủ',
    services: 'Dịch vụ',
    about: 'Giới thiệu',
    contact: 'Liên hệ',
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            const sectionId = entry.target.id;
            const newTitle = `${titleMap[sectionId]}`;
            document.title = newTitle;

            history.replaceState(null, '', `#${sectionId}`);
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    observer.observe(section);
});

// Smooth scrolling for navigation links (optional, but improves user experience)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Update the URL and title after scrolling
            const newTitle = `${titleMap[targetId]}`;
            document.title = newTitle;
            history.replaceState(null, '', `#${targetId}`);
        }
    });
});

// Adjust scroll position on hash change (for direct navigation via URL)
window.addEventListener('hashchange', () => {
    const targetId = window.location.hash.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'instant' // No need for smooth scrolling here as the browser already jumped
        });

        const newTitle = `${titleMap[targetId]}`;
        document.title = newTitle;
    }
});