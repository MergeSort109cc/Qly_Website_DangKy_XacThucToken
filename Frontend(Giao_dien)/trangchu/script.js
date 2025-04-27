const sections = document.querySelectorAll('section');

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