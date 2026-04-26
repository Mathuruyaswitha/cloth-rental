// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Sample data for items with images and prices
    const items = [
        { image: 'ite1.jpg', price: '$50' },
        { image: 'ite2.jpg', price: '$60' },
        { image: 'ite3.jpg', price: '$70' },
        { image: 'ite4.jpg', price: '$30' },
        { image: 'ite5.jpg', price: '$30' },
        { image: 'ite6.jpg', price: '$20' },

        // Add more items as needed
    ];

    const gridContainer = document.getElementById('gridContainer');

    // Dynamically create grid items with images and prices
    items.forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = 'Accessories';
        gridItem.appendChild(img);

        const price = document.createElement('p');
        price.textContent = 'Price: ' + item.price;
        gridItem.appendChild(price);

        gridContainer.appendChild(gridItem);
    });
});
