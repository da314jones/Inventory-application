const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.name.value)
  console.log(event.target.puppetType.value)
  console.log(event.target.puppetSize.value)
  console.log(event.target.quantity.value)
  console.log(event.target.moneyField.value)
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
  const moneyField =document.createElement("li");
  puppetImage.src = event.target.imgUrl.value;
  puppetContainer.classList.add("top-right", "box");
  puppetType.classList.add("type");
  puppetSize.classList.add("size");
  quantity.classList.add("quantity");
  moneyField.classList.add("price");
  puppetNameHeader.textContent = event.target.name.value;
  puppetType.textContent = event.target.puppetType.value;
  puppetSize.textContent = event.target.puppetSize.value;
  quantity.textContent = event.target.quantity.value;
  moneyField.textContent = event.target.moneyField.value;
  puppetContainer.append(puppetNameHeader, puppetType, puppetSize, quantity)
  puppetItem.append(puppetImage, puppetContainer);
  puppetList.append(puppetItem);

  
  form.reset();
})

/*set up html structure
select the elements from the dom
h1 
input
body
main
define variables
empty arrays for or objects to store data
this will hold inventory info for each item


set up header and create a container for resource list
ul form
write functions for form submission 
event listener for submit 
retrieve value entered in input field when form is submitted

 create function to generate  inventory cards
 iterate thru inventory for each item create card element
 set card to display info
 append card to container
 
 add delete button to each list item
 
 add event listeners to delete button
 
 add event listeners to click 
 
 add event listeners to submit 
 
 add event listeners to cancel 
 
 get value of input fields and log(event target)
 
 generate new list item

 write functions to generate a  new resource list
 initialize app
  call functions generate cards existing 
append fields and submit button to form 
append input type text
input placeholder
input name


 test 
append form
body



add event listeners to reset 
reset form
append form to body
*/
