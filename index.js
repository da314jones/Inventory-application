const form = document.querySelector("form");
const puppetList = document.querySelector("ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let errorMessage = "";

  const nameInput = document.querySelector("#name");
  const puppetTypeInput = document.querySelector("#puppetType") ;
  const puppetSizeInput = document.querySelector("#puppetSize");
  const quantityInput = document.querySelector("#quantity");
  const priceInput = document.querySelector("#price");
  const urlInput = document.querySelector("#imgUrl");
  const imageInput = document.querySelector("#imgUrl");

  if (!nameInput.value.trim()) {
    errorMessage += "Please enter a name./n";
  }
  if (!puppetTypeInput.value.trim()) {
    errorMessage += "Please enter a name./n";
  }
  if (!puppetSizeInput.value.trim()) {
    errorMessage += "Please enter a name./n";
  }
  if (!quantityInput.value.trim()) {
    errorMessage += "Please enter a name./n";
  }
  if (!priceInput.value.trim()) {
    errorMessage += "Please enter a name./n";
  }
  if (!urlInput.value.trim()) {
    errorMessage += "Please enter a name./n";
  }
  if (!imageInput.value.trim()) {
    errorMessage += "Please enter a name./n";
  }
  if (errorMessage !== "") {
    alert(errorMessage);
    form.reset();
    return;
  }

  console.log(event.target.name.value);
  console.log(event.target.puppetType.value);
  console.log(event.target.puppetSize.value);
  console.log(event.target.quantity.value);
  console.log(event.target.price.value);
  console.log(event.target.imgUrl.value);
  console.log(event.target.inStock.checked);

  const puppetList = document.querySelector("ul");
  const puppetItem = document.createElement("li");
  const puppetImage = document.createElement("img");
  const puppetContainer = document.createElement("div");
  const puppetNameHeader = document.createElement("h2");
  const puppetType = document.createElement("li");
  const puppetSize = document.createElement("li");
  const quantity = document.createElement("li");
  const price = document.createElement("li");
  const inStock = document.createElement("li");
  const toggleButton = document.createElement("button");
  const removeButton = document.createElement("button");

  puppetImage.src = event.target.elements.imgUrl.value;
  puppetContainer.classList.add("top-right", "box");
  puppetType.classList.add("type");
  puppetSize.classList.add("size");
  quantity.classList.add("quantity");
  price.classList.add("price");

  puppetNameHeader.textContent = "Model Name: " + event.target.elements.name.value;
  puppetType.textContent = "Model Type: " + event.target.elements.puppetType.value;
  puppetSize.textContent = "Model Size: " + event.target.elements.puppetSize.value;
  quantity.textContent = "Quantity: " + event.target.elements.quantity.value;
  price.textContent = "Price Per Unit: " + event.target.elements.price.value;
  let stock = event.target.elements.inStock.checked;
  inStock.textContent = stock ? "In Stock" : "Out of Stock";

  toggleButton.textContent = stock ? "Out of Stock" : "In Stock";
  toggleButton.addEventListener("click", () => {
    inStock.textContent = stock ? "Out of Stock" : "In Stock";
    toggleButton.textContent = stock ? "In Stock" : "Out of Stock";
    stock = !stock;
  });

  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    puppetList.removeChild(puppetItem);
  });

  puppetContainer.append(puppetNameHeader, puppetType, puppetSize, quantity, price, inStock, toggleButton, removeButton);
  puppetItem.append(puppetImage, puppetContainer);
  puppetList.append(puppetItem);

  form.reset();
});

const inStockButton = document.querySelector("button[type='inStock']");
inStockButton.addEventListener("click", () => {
  const inStockCheckbox = document.getElementById("in-stock");
  inStockCheckbox.checked = !inStockCheckbox.checked;
});
// stack overflow show error using javascript
const handleError = (message) => {
  const errorMessageElement = document.getElementById("error-message");
  errorMessageElement.textContent = message;
  errorMessageElement.style.display = "block";
  setTimeout(() => {
    errorMessageElement.textContent = "";
    errorMessageElement.style.direction = "none";
  }, 3000);
} 