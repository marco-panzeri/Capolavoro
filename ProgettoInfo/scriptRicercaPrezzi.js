function search() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var itemContainer = document.getElementById('container');
    var items = itemContainer.getElementsByTagName('tr');

    for (var i = 1; i < items.length; i++) {
        var currentItem = items[i];
        var itemName = currentItem.cells[0].textContent.toLowerCase();

        if (itemName.includes(searchInput)) {
            currentItem.style.display = 'table-row';
        } else {
            currentItem.style.display = 'none';
        }
    }
}

document.getElementById('searchInput').addEventListener('input', search);