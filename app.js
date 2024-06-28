let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "white T-Shirt.avif",
      },
      {
        productName: "Golden Rado Watch",
        category: "Watch",
        price: "99",
        image: "image 1.jpeg",
      },
      {
        productName: "Denim Jeans",
        category: "Bottomwear",
        price: "49",
        image: "Denim Jeans.jpg",
      },
      {
        productName: "Blue Swiss Watch",
        category: "Watch",
        price: "99",
        image: "image 2.jpeg",
      },
      {
        productName: "Green Women Jacket",
        category: "Jacket",
        price: "129",
        image: "Green Jacket.jpg",
      },
      {
        productName: "Elegant Belt Watch",
        category: "Watch",
        price: "99",
        image: "image 3.jpeg",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "Basic Knitted Top.jpeg",
      },
      {
        productName: "Blue Rolex Watch",
        category: "Watch",
        price: "99",
        image: "image 4.jpeg",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "Black Leather Jacket.webp",
      },
      {
        productName: "Swiss Belt Watch",
        category: "Watch",
        price: "99",
        image: "image 5.jpeg",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "Pink Trouser.avif",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "Brown Jacket.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "Comfy Pants.jpg",
      },
      {
        productName: "DL Blue Watch",
        category: "Watch",
        price: "99",
        image: "image 6.jpeg",
      },
      {
        productName: "Simple Black T-Shirt",
        category: "Topwear",
        price: "29",
        image: "Black T-Shirt.jpg",
      },
      {
        productName: "Denim Beats Jacket",
        category: "Jacket",
        price: "189",
        image: "Beats Jacket.jpg",
      },
      {
        productName: "Black Trouser",
        category: "Bottomwear",
        price: "49",
        image: "Black Trouser.jpg",
      },
      {
        productName: "Ghost Design T-Shirt",
        category: "Topwear",
        price: "39",
        image: "Ghost Design.jpg",
      },
      {
        productName: "Black Polo T-Shirt",
        category: "Topwear",
        price: "35",
        image: "Black Polo.webp",
      },
      {
        productName: "Olive Green Trouser",
        category: "Bottomwear",
        price: "49",
        image: "Olive Green Trouser.webp",
      },
      {
        productName: "Stylish Men Jacket",
        category: "Jacket",
        price: "189",
        image: "Stylish Men Jacket.jpg",
      },
      {
        productName: "Navy Blue Polo T-Shirt",
        category: "Topwear",
        price: "35",
        image: "Navy Blue Polo.webp",
      },
      {
        productName: "Grey Short",
        category: "Bottomwear",
        price: "39",
        image: "Grey Short.avif",
      },
      {
        productName: "Stylish Women Jacket",
        category: "Jacket",
        price: "189",
        image: "Stylish Women Jacket.jpg",
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