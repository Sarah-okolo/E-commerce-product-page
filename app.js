const burgerMenuIcon = document.getElementById("burgerMenuIcon");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuBackgroundOverlay");
const menuContainer = document.getElementById("menuContainer");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const itemsToCartNumber = document.getElementById("numberOfItemsToCart");
const addToCartBtn = document.getElementById("addToCart");
const numberOfItemsInCart = document.getElementById("itemInCartAmount");
const largeImgView = document.getElementById("productLargeView");
const thumbnails = document.querySelectorAll(".thumbnails");
const nxtImgIcon = document.querySelector(".nextIcon");
const previousImgIcon = document.querySelector(".previousIcon");
const itemBoughtInfoTxt = document.getElementById("itemBoughtInfoTxt");
const totalAmountOfGoodsInCart = document.getElementById(
  "totalAmountOfGoodsInCart"
);
const timesItemsInCart = document.getElementById("timesItemsInCart");
const binIcon = document.getElementById("binIcon");
const checkoutBtn = document.getElementById("checkoutBtn");
const itemToCheckoutInfo = document.getElementById("itemToCheckoutInfo");
const cartIcon = document.getElementById("cartIcon");
const cartedItemsHolder = document.querySelector(".hidee");
const lightbox = document.getElementById("lightbox");
const lightboxContents = document.getElementById("lightboxContents");
const closeLightboxIcon = document.querySelector(".closeLightboxIcon");
const emptyCartTxt = document.getElementById("emptyCartTxt");
let defaultDigit = Number(itemsToCartNumber.innerHTML);
let itemsInCart = Number(numberOfItemsInCart.innerHTML);
const productsContainer = document.getElementById("productsContainer");
const imagesFilePath = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];
let indx = 1;

//FUNCTION FOR NEXT IMAGE VIEW ON MOBILE.
function nxt() {
  indx = (indx + 1) % imagesFilePath.length;
  if (window.innerWidth < 767) {
    largeImgView.src = imagesFilePath[indx];
  } else if (window.innerWidth >= 767) {
    lightboxContents.children[1].children[0].children[0].src =
      imagesFilePath[indx];
  }
  return imagesFilePath[indx];
}

nxtImgIcon.addEventListener("click", nxt);

//FUNCTION FOR PREVIOUS IMAGE VIEW ON MOBILE.
function previous() {
  if (indx === 0) {
    indx = imagesFilePath.length;
  }
  indx = indx - 1;
  if (window.innerWidth < 767) {
    largeImgView.src = imagesFilePath[indx];
  } else if (window.innerWidth >= 767) {
    lightboxContents.children[1].children[0].children[0].src =
      imagesFilePath[indx];
  }
  return imagesFilePath[indx];
}
previousImgIcon.addEventListener("click", previous);

//OPENS THE MOBILE MENU.
burgerMenuIcon.onclick = () => {
  menuOverlay.style.display = "block";
  menuContainer.style.width = "60%";
};

//CLOSES THE MOBILE MENU.
closeMenu.onclick = () => {
  menuOverlay.style.display = "none";
  menuContainer.style.width = "0%";
};

//TOGGLE CARTED ITEMS VIEW.
cartIcon.onclick = () => {
  cartedItemsHolder.classList.toggle("show");
};

// INCREMENTS THE NUMBER OF ITEMS TO CART.
plusBtn.onclick = () => {
  var increment = ++defaultDigit;
  itemsToCartNumber.innerHTML = increment;
};

// DECREMENTS THE NUMBER OF ITEMS TO CART.
minusBtn.onclick = () => {
  if (defaultDigit > 0) {
    let decrement = --defaultDigit;
    itemsToCartNumber.innerHTML = decrement;
  }
};

//DELETES ITEMS IN THE CART.
binIcon.onclick = () => {
  emptyCartTxt.style.display = "block";
  itemToCheckoutInfo.style.display = "none";
  checkoutBtn.style.display = "none";
  numberOfItemsInCart.style.display = "none";

  totalAmountOfGoodsInCart.innerHTML = 0;
  timesItemsInCart.innerHTML = 0;
};

// UPDATES THE NUMBER OF ITEMS IN CART.
addToCartBtn.onclick = () => {
  numberOfItemsInCart.style.display = "block";
  let itemsInCartNumber = (itemsInCart += defaultDigit);

  timesItemsInCart.innerHTML = itemsInCartNumber;
  let totalAmount = 125 * itemsInCart;
  totalAmountOfGoodsInCart.innerHTML = ` \$${totalAmount}`;
  emptyCartTxt.style.display = "none";
  itemToCheckoutInfo.style.display = "flex";
  checkoutBtn.style.display = "block";

  return (numberOfItemsInCart.innerHTML = itemsInCartNumber);
};

//FOR THUMBNAILS DISPLAY ON LARGE VIEW.
for (i = 0; i < thumbnails.length; i++) {
  thumbnails[i].onclick = (e) => {
    largeImgView.src = e.target.src;
  };
}

//FOR THE LIGHTBOX FUNCTIONS.
lightboxContents.onclick = (e) => {
  if (e.target.alt === "product") {
    let chk = (lightboxContents.children[1].children[0].children[0].src =
      e.target.src);
  } else if (e.target.id === "nxtt") {
    return nxt();
  } else if (e.target.id === "prev") {
    return previous();
  }
};

//CHECKS IF THE WINDOW'S WIDTH IS ABOVE OR EQUALS TO 767PX, IF THEN, IT CHANGES THE APPLYS THE STATEMENT IN THE BLOCK.
if (window.innerWidth >= 767) {
  itemBoughtInfoTxt.innerHTML = "Fall Limited Edition Sneakers";

  //LIGHTBOX CLONED CREATION.
  let cloneN = productsContainer.cloneNode(true);
  lightboxContents.appendChild(cloneN);

  largeImgView.onclick = () => {
    lightboxContents.children[1].children[0].children[0].src =
      imagesFilePath[0];
    lightbox.style.display = "grid";
  };
  closeLightboxIcon.onclick = () => {
    lightbox.style.display = "none";
  };
}
