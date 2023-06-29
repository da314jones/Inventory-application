const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.name.value)
  console.log(event.target.armaturePart.value)
  console.log(event.target.quantity.value)
  console.log(event.target.armatureSize.value)
  console.log(event.target.price.value)
  console.log(event.target.imgUrl.value)
  console.log(event.target.inStock.checked)
  // console.log(event.target.tiedown.value)
  // console.log(event.target.eyeColor.value)
  // console.log(event.target.threadSize.value)
  // console.log(event.target.hands.value)
  
  const puppetList = document.querySelector("ul");
  const puppetItem = document.createElement("li");
  const puppetImage = document.createElement("img");
  const puppetContainer = document.createElement("div");
  const puppetNameHeader = document.createElement("h2")
  puppetImage.src = event.target.imgUrl.value;
  puppetContainer.classList.add("top-right", "box");
  puppetNameHeader.textContent = event.target.name.value;
  puppetContainer.append(puppetNameHeader)
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
