// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Sample data for items with images and prices
    const items = [
        { id: 'item1', image: 'item1.jpg', price: '$50', sizes: ['S', 'M', 'L'], payment: 'PayPal' },
        { id: 'item2', image: 'item2.jpg', price: '$60', sizes: ['S', 'M', 'L'], payment: 'Credit Card' },
        { id: 'item3', image: 'item3.jpg', price: '$70', sizes: ['S', 'M', 'L'], payment: 'Bank Transfer' },
        { id: 'item4', image: 'item4.jpg', price: '$30', sizes: ['S', 'M', 'L'], payment: 'PayPal' },
        { id: 'item5', image: 'item5.jpg', price: '$30', sizes: ['S', 'M', 'L'], payment: 'Credit Card' },
        { id: 'item6', image: 'item6.jpg', price: '$20', sizes: ['S', 'M', 'L'], payment: 'Bank Transfer' },
        // Add more items as needed
    ];

    const gridContainer = document.getElementById('gridContainer');

    // Dynamically create grid items with images and prices
    items.forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.dataset.itemId = item.id; // Set data attribute for item ID

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = 'Ethnic Wear';
        gridItem.appendChild(img);

        const price = document.createElement('p');
        price.textContent = 'Price: ' + item.price;
        gridItem.appendChild(price);

        gridContainer.appendChild(gridItem);
    });

    // Add event listener for grid items
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            // Get item ID
            const itemId = this.dataset.itemId;
            // Get item details
            const selectedItem = items.find(item => item.id === itemId);
            // Redirect to item details page with options
            window.location.href = 'item_details.html?id=' + itemId;
        });
    });
});
