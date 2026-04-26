document.getElementById('searchInput').addEventListener('input', function() {
    var searchValue = this.value.toLowerCase();
    var items = document.querySelectorAll('.item'); // Select all items to search within
    items.forEach(function(item) {
        var text = item.textContent.toLowerCase();
        if (text.includes(searchValue)) {
            item.style.display = 'block'; // Show matching items
        } else {
            item.style.display = 'none'; // Hide non-matching items
        }
    });
});
