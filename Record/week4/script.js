let container = document.getElementById("container");

let total = 0;

function addProduct() {

    let product = document.getElementById("productName").value;

    let price = document.getElementById("productPrice").value;

    if (product == "" || price == "") {
        alert("Please enter product details");
        return;
    }

    let card = document.createElement("div");

    card.className = "card";

    card.innerHTML =
        "<h2>Dior</h2>" +
        "<h3>" + product + "</h3>" +
        "<p>Price : ₹" + price + "</p>";

    container.appendChild(card);

    total = total + Number(price);

    document.getElementById("total").innerHTML =
        "Total Price : ₹" + total;

    document.getElementById("productName").value = "";

    document.getElementById("productPrice").value = "";
}
