document.addEventListener('DOMContentLoaded', function() {
    // Responsive Navigation Toggle
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Dynamic Product List
    const products = [
        { name: 'Railway Track', image: 'track.jpg' },
        { name: 'Railway Sleeper', image: 'sleeper.jpg' },
        { name: 'Railway Fastener', image: 'fastener.jpg' }
    ];

    const productGallery = document.querySelector('.product-gallery');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productGallery.appendChild(productItem);
    });
});
