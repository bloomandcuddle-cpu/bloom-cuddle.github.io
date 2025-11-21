// إدخال الهيدر
fetch('includes/header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('header').innerHTML = data;
        // بعد تحميل الهيدر، نشغل حدث القائمة
        setupMobileMenu();
    })
    .catch(error => console.error('Error loading header:', error));

// إدخال الفوتر
fetch('includes/footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));

// فتح/إغلاق القائمة على الهاتف
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
}

// تشغيل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    setupMobileMenu();
});
