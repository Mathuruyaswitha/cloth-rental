document.addEventListener('DOMContentLoaded', function() {
    const items = [
        { id: 'item1', image: 'item1.jpg', price: '$5', availableSize: 'M', payment: 'PayPal' },
        { id: 'item2', image: 'item2.jpg', price: '$6', availableSize: 'L', payment: 'PayPal' },
        { id: 'item3', image: 'item3.jpg', price: '$7', availableSize: 'S', payment: 'PayPal' },
        { id: 'item4', image: 'item4.jpg', price: '$3', availableSize: 'M', payment: 'PayPal' },
        { id: 'item5', image: 'item5.jpg', price: '$4', availableSize: 'L', payment: 'PayPal' },
        { id: 'item6', image: 'item6.jpg', price: '$5', availableSize: 'S', payment: 'PayPal' }
    ];

    const gridContainer = document.getElementById('gridContainer');
    const itemDetailsContainer = document.getElementById('itemDetailsContainer');

    items.forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = 'Ethnic Wear';
        gridItem.appendChild(img);

        gridContainer.appendChild(gridItem);

        img.addEventListener('click', function() {
            const itemId = item.id;
            const itemDetails = document.querySelector('.item-details[data-item-id="' + itemId + '"]');
            if (itemDetails) {
                itemDetailsContainer.style.display = 'flex';
                itemDetails.style.display = 'block';
            } else {
                const details = document.createElement('div');
                details.classList.add('item-details');
                details.dataset.itemId = itemId;

                const largeImg = document.createElement('img');
                largeImg.src = item.image;
                largeImg.alt = 'Large Ethnic Wear';
                details.appendChild(largeImg);

                const price = document.createElement('p');
                price.textContent = 'Price: ' + item.price;
                details.appendChild(price);

                const sizeLabel = document.createElement('p');
                sizeLabel.textContent = 'Available Size: ' + item.availableSize;
                details.appendChild(sizeLabel);

                const paymentButton = document.createElement('button');
                paymentButton.textContent = 'Proceed to Payment (PayPal)';
                paymentButton.classList.add('payment-button');
                details.appendChild(paymentButton);

                itemDetailsContainer.appendChild(details);

                itemDetailsContainer.style.display = 'flex';
                details.style.display = 'block';
            }
        });
    });

    itemDetailsContainer.addEventListener('click', function(event) {
        if (!event.target.closest('.item-details')) {
            itemDetailsContainer.style.display = 'none';
            document.querySelectorAll('.item-details').forEach(detail => {
                detail.style.display = 'none';
            });
        }
    });
});
