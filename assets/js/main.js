// إدخال الهيدر
fetch('includes/header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('header').innerHTML = data;
    });

// إدخال الفوتر
fetch('includes/footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('footer').innerHTML = data;
    });

// فتح/إغلاق القائمة على الهاتف
document.addEventListener('click', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }
});
