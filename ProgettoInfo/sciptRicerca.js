function search() {
           
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    
    
    var itemContainer = document.getElementById('itemContainer');

    
    var items = itemContainer.getElementsByClassName('item');

    
    for (var i = 0; i < items.length; i++) {
        var currentItem = items[i];
        var itemName = currentItem.querySelector('.name').textContent.toLowerCase();
        var itemDesc = currentItem.querySelector('.desc').textContent.toLowerCase();

        if (itemName.includes(searchInput) || itemDesc.includes(searchInput)) {
            currentItem.style.display = 'block'; 
        } else {
            currentItem.style.display = 'none'; 
        }
    }
}


document.getElementById('searchInput').addEventListener('input', search);