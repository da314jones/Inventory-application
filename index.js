const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.name.value)
  console.log(event.target.puppetType.value)
  console.log(event.target.puppetSize.value)
  console.log(event.target.quantity.value)
  console.log(event.target.price.value)
  console.log(event.target.imgUrl.value)
  console.log(event.target.inStock.checked)
  
  const puppetList = document.querySelector("ul");
  const puppetItem = document.createElement("li");
  const puppetImage = document.createElement("img");
  const puppetContainer = document.createElement("div");
  const puppetNameHeader = document.createElement("h2");
  const puppetType = document.createElement("li");
  const puppetSize =document.createElement("li");
  const quantity = document.createElement("li");
  const price =document.createElement("li");
  const inStock = document.createElement("li");
  const toggleButton = document.createElement("button");

  puppetImage.src = event.target.imgUrl.value;
  puppetContainer.classList.add("top-right", "box");
  puppetType.classList.add("type");
  puppetSize.classList.add("size");
  quantity.classList.add("quantity");
  price.classList.add("price");

  puppetNameHeader.textContent = "Model Name: " + event.target.name.value;
  puppetType.textContent = "Model Type: " + event.target.puppetType.value;
  puppetSize.textContent = "Model Size: " + event.target.puppetSize.value;
  quantity.textContent = "Quantity: " + event.target.quantity.value;
  price.textContent = "Price Per Unit: " + event.target.price.value;
  let stock = event.target.inStock.checked;
  inStock.textContent = stock ? "In Stock" : "Out Of Stock";

  toggleButton.textContent = stock ? "Out of Stock" : "In of Stock";
  toggleButton.addEventListener("click", () => {
    inStock.textContent = stock ? "Out Of Stock" : "In Stock";
    toggleButton.textContent = stock ? "In of Stock" : "Out of Stock";
    stock = !stock;
  });

  removeCard.textContent = "Remove";
  removeEventListener.addEventListener("click", () => {
    puppetList.removeChild(puppetItem)
  })

  puppetContainer.append(puppetNameHeader, puppetType, puppetSize, quantity, price, inStock, toggleButton, removeCard);
  puppetItem.append(puppetImage, puppetContainer);
  puppetList.append(puppetItem);

  
  form.reset();
})

const inStockButton = document.querySelector("button[type='inStock']");
inStockButton.addEventListener("click", () => {
  const inStockCheckbox = document.getElementById("in-stock");
  inStockCheckbox.checked = !inStockCheckbox.checked;
});
