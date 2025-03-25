const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
});
document.querySelectorAll('.dropdown').forEach(dropdown => {
    let timeout;

    // Hover edildikdə dropdown açılsın
    dropdown.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        dropdown.querySelector('.dropdown-menu').classList.remove('hidden');
    });

    // Hover-dən çıxdıqdan sonra 2 saniyə bağlı qalmasın
    dropdown.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            dropdown.querySelector('.dropdown-menu').classList.add('hidden');
        }, 2000); // 2 saniyə sonra bağlanır
    });
});

// Mobil üçün kliklənəndə açılsın
document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        let dropdown = item.parentElement.querySelector('.dropdown-menu');
        dropdown.classList.toggle('hidden');

        // Başqa dropdown-ları bağla
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu !== dropdown) {
                menu.classList.add('hidden');
            }
        });
    });
});

// Ekrana kliklədikdə dropdown-ları bağla (mobil üçün)
document.addEventListener('click', event => {
    if (!event.target.closest('.dropdown-toggle')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.add('hidden');
        });
    }
});