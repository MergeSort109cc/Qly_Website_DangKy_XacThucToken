document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const body = document.body; // Chúng ta sẽ toggle class trên body

    if (sidebarToggle && body) {
        sidebarToggle.addEventListener('click', function() {
            body.classList.toggle('sidebar-collapsed');
        });
    }
});