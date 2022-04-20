// lightbox.option({
//   alwaysShowNavOnTouchDevices: true,
// });

var qcounter = 0;

function openNav() {
  document.getElementById("myCart").style.width = "350px";
}

function closeNav() {
  document.getElementById("myCart").style.width = "0";
}

// function quantityChanged() {
//   var input = document.getElementsByClassName(qtext);
//   if (isNaN(input.value) || input.value <= 0) {
//     input.value = 1;
//   }
//   updateCartTotal();
// }

function quantityChangedPlus() {
  qcounter++;
  document.getElementById("qCounterText").innerHTML = qcounter;
}

function quantityChangedMinus() {
  if (
    isNaN(document.getElementById("qCounterText")).innerHTML ||
    document.getElementById("qCounterText").innerHTML < 0
  )
    qcounter = 0;
  else qcounter--;
  document.getElementById("qCounterText").innerHTML = qcounter;
}

function addToCart() {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");

  var cartRowContents = `
        <div class="cart-item cart-column">
        <img class="cart-item-image" src="./images/image-product-1-thumbnail.jpg" width="100" height="100">
        <p class="cart-item-title">Fall Limited Edition Sneakers</p>
        <p class="cart-price">${qcounter} x $125</p>
        </div>

        <div class="cart-quantity cart-column">
        <button class="btn btnRem" onclick="removeItem()" style="background-color: transparent;" type="button"><img src="./images/icon-delete.svg" alt="icon-delete"></button>
        </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btnRem")[0]
    .addEventListener("click", removeItem);
  updateCartTotal();
}

function removeItem(event) {
  buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  updateCartTotal();
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var counter = parseInt(document.getElementById("qCounterText").innerHTML);
    total = total + 125 * qcounter;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerHTML =
    "$" + total;
}

//SG.LmHG1hKLSI-J1iXcIhFlpA.y0asL63m-ItClK1whlOAJttY8QAmuemXGbKbm8XsIMM
