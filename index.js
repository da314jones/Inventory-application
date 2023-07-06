const modeToggle = document.getElementById("dark-mode");
const body = document.body;

modeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
});

const form = document.querySelector("form");
const puppetList = document.querySelector("ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let errorMessage = "";

  const nameInput = document.querySelector("#name");
  const puppetTypeInput = document.querySelector("#puppetType");
  const puppetSizeInput = document.querySelector("#puppetSize");
  const quantityInput = document.querySelector("#quantity");
  const priceInput = document.querySelector("#price");
  const urlInput = document.querySelector("#imgUrl");
  const imageInput = document.querySelector("#imgUrl");

  if (!nameInput.value.trim()) {
    errorMessage += "Please enter a model name.\n";
  }

  if (
    puppetTypeInput.value.trim().toLowerCase() !== "metal" &&
    puppetTypeInput.value.trim().toLowerCase() !== "wire" &&
    puppetTypeInput.value.trim().toLowerCase() !== "ball & socket"
  ) {
    errorMessage +=
      "Please enter a valid type (Valid types include Metal, Wire, Ball & Socket).\n";
  }

  if (puppetSizeInput.value < 4 || puppetSizeInput.value.trim() > 18) {
    errorMessage += 'Please enter a size between 4" and 18".\n';
  }

  if (quantityInput.value % 100 !== 0) {
    errorMessage += "Please enter a quantity in multiples of 100.\n";
  }

  const priceIntegers = parseFloat(priceInput.value.trim());
  if (
    isNaN(priceIntegers) ||
    priceIntegers.toFixed(2) !== priceInput.value.trim()
  ) {
    errorMessage += "Please enter a valid price (e.g., 37.00).\n";
  }

  if (urlInput.value.slice(0, 4) !== "http") {
    errorMessage += "URL must start with http or https.\n";
  }

  if (errorMessage) {
    console.log("ERROR MESSAGES");
    const errorMessageElement = document.getElementById("error-message");
    errorMessageElement.textContent = errorMessage;
    errorMessageElement.style.display = "block";
    form.reset();
  } else {
    console.log(event.target.name.value);
    console.log(event.target.puppetType.value);
    console.log(event.target.puppetSize.value);
    console.log(event.target.quantity.value);
    console.log(event.target.price.value);
    console.log(event.target.imgUrl.value);
    console.log(event.target.inStock.checked);

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

    puppetImage.src = event.target.imgUrl.value;
    puppetImage.classList.add("updated-image");
    puppetContainer.classList.add("top-right", "box");
    puppetType.classList.add("type");
    puppetSize.classList.add("size");
    quantity.classList.add("quantity");
    price.classList.add("price");
    removeButton.classList.add("remove");
    toggleButton.classList.add("toggle");
    puppetContainer.appendChild(puppetImage);

    puppetNameHeader.textContent = "Model Name: " + event.target.name.value;
    puppetType.textContent = "Model Type: " + event.target.puppetType.value;
    puppetSize.textContent = "Model Size: " + event.target.puppetSize.value;
    quantity.textContent = "Quantity: " + event.target.quantity.value;
    price.textContent = "Price Per Unit: " + event.target.price.value;
    let stock = event.target.inStock.checked;
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

    puppetContainer.append(
      puppetImage,
      puppetNameHeader,
      puppetType,
      puppetSize,
      quantity,
      price,
      inStock,
      toggleButton,
      removeButton
    );
    puppetItem.append(puppetContainer);
    puppetList.append(puppetItem);

    form.reset();
  }
});
