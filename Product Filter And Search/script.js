let products = {
  data: [
    {
      productName: "lorem",
      category: "1",
      price: "30",
      image: "../image/images/1.jfif",
    },
    {
      productName: "lorem",
      category: "2",
      price: "49",
      image: "../image/images/2.jfif",
    },
    {
      productName: "lorem",
      category: "3",
      price: "99",
      image: "../image/images/3.jfif",
    },
    {
      productName: "lorem",
      category: "1",
      price: "29",
      image: "../image/images/4.jfif",
    },
    {
      productName: "lorem",
      category: "1",
      price: "129",
      image: "../image/images/5.jfif",
    },
    {
      productName: "lorem",
      category: "2",
      price: "89",
      image: "../image/images/6.jfif",
    },
    {
      productName: "lorem",
      category: "3",
      price: "189",
      image: "../image/images/7.jfif",
    },
    {
      productName: "lorem",
      category: "1",
      price: "49",
      image: "../image/images/8.jfif",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
