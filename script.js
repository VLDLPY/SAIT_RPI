// Плавный скролл к разделам 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

menuItems.forEach(item => {
    item.addEventListener('click', function () {
        const productId = item.dataset.productId;
        const modalImg = document.querySelector('#productModal img');
        modalImg.src = `images/product${productId}.jpg`; // Путь к изображениям продуктов
        document.getElementById('productModal').style.display = 'block';
    });
});
document.querySelectorAll('.close, #productModal').forEach(element => {
    element.addEventListener('click', function () {
        document.getElementById('productModal').style.display = 'none';
    });
});
