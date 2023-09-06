const itemList = document.getElementById('itemList');
const itemInput = document.getElementById('itemInput');

function addItem() {
  const itemName = itemInput.value.trim();
  if (itemName === '') {
    alert('Lütfen bir ürün adı girin.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `${itemName} <button onclick="removeItem(this)">Çıkar</button>`;
  itemList.appendChild(li);

  itemInput.value = '';
}

function removeItem(button) {
  const li = button.parentElement;
  itemList.removeChild(li);
}