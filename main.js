// This function takes the values of selected 
// ingredients and returns the order details

function orderNow() {
    // Hide Create Burger Form
    const landingPage = document.querySelector('div[id="landing-page"]');
    if (landingPage.style.display === "none") {
        landingPage.style.display = "grid";
        } else {
        landingPage.style.display = "none";
        }
    // Display ordering page
    const orderPage = document.querySelector('div[id="ordering-page"]');
    if (orderPage.style.display === "grid") {
        orderPage.style.display = "none";
    } else {
        orderPage.style.display = "grid";
    }
    // Display order form
    const orderForm = document.querySelector('div[id="order-form-page"]');
    if (orderForm.style.display === "grid") {
        orderForm.style.display = "none";
    } else {
        orderForm.style.display = "grid";
    }
}

// This function take the selected ingredients and displays them
// then Hides the Order form and display order details

function next () {
    // Get Bun
    let bun = document.querySelector('input[name="bun"]:checked').value;
    // Get Patty
    let patty = document.querySelector('input[name="patty"]:checked').value;
    // Get Salads
    let salads = [];
    let saladChoice = document.querySelectorAll('input[name="salad"]:checked')

    for (let i = 0; i < saladChoice.length; i++) {
        salads.push(saladChoice[i].value)
    }

    // Get Sauces
    let sauces = [];
    let sauceChoice = document.querySelectorAll('input[name="sauce"]:checked')

    for (let i = 0; i < sauceChoice.length; i++) {
        sauces.push(sauceChoice[i].value)
    }

    // Get Spice
    let spice = ""
    spice = document.querySelector('input[name="spice"]:checked').value;

    // Return Burger Ingredients
    document.querySelector('p[id="bun"]').innerHTML = bun;
    document.querySelector('p[id="patty"]').innerHTML = patty;
    document.querySelector('p[id="salads"]').innerHTML = salads.join(", ");
    document.querySelector('p[id="sauces"]').innerHTML = sauces.join(", ");
    document.querySelector('p[id="spice"]').innerHTML = spice;
    
    // Hide Create Burger Form
    orderForm = document.querySelector('div[id="order-form-page"]');
    if (orderForm.style.display === "none") {
        orderForm.style.display = "grid";
      } else {
        orderForm.style.display = "none";
      }

    // Display Order Details

    orderDetails = document.querySelector('div[id="order-details"]');
    if (orderDetails.style.display === "grid") {
        orderDetails.style.display = "none";
      } else {
        orderDetails.style.display = "grid";
      }
}

// This function take the selected ingredients and calculates the cost of the burger

function total () {
    // Get Bun
    let bun = document.querySelector('input[name="bun"]:checked').id;
    // Get Patty
    let patty = document.querySelector('input[name="patty"]:checked').id;
    // Get Spice
    let spice = document.querySelector('input[name="spice"]:checked').id;

    let bunCost;
    let pattyCost;
    let spiceCost;

    if(bun === "gluten-free") {
        bunCost = 2;
    } else {
        bunCost = 0;
    }

    switch(patty) {
        case "angus-beef":
            pattyCost = 10;
            break;
        case "impossible-beef":
            pattyCost = 12;
            break;
        case "vegeterian":
            pattyCost = 8;
            break;
        case "crunchy-chicken":
            pattyCost = 12;
            break;
        default:
    }

    if(spice === "no-spice") {
        spiceCost = 0;
    } else {
        spiceCost = 2;
    }

    burgerCost = bunCost + pattyCost + spiceCost;
    document.querySelector('p[id="total"]').innerHTML = "The total is: $" + burgerCost.toFixed(2);

}

// This function returns back to the Create Burger form

function backToCreate () {

    // Hide Order Details
    orderDetails = document.querySelector('div[id="order-details"]');
    if (orderDetails.style.display === "none") {
        orderDetails.style.display = "grid";
      } else {
        orderDetails.style.display = "none";
      }
    // Displays Order Form
    orderForm = document.querySelector('div[id="order-form-page"]');
    if (orderForm.style.display === "grid") {
        orderForm.style.display = "none";
    } else {
        orderForm.style.display = "grid";
    }
}


// This function takes the order name and returns the order confirmation with a random order number

function confirmOrder () {
    // Get Name
    let userName = document.querySelector('input[id="get-user-name"]').value;

    // Get Random Order Number
    let orderNum = Math.floor(Math.random() * 100);
    
    // Return Name and Order Number
    document.querySelector('span[id="user-name-output"]').innerHTML = userName;
    document.querySelector('span[id="order-number"]').innerHTML = orderNum;
    
    // Name required for confirmation 
    
    if(userName !== "") {

        // Hide Order Details
        orderDetails = document.querySelector('div[id="order-details"]');
        if (orderDetails.style.display === "none" && userName !== "") {
            orderDetails.style.display = "grid";
        } else {
            orderDetails.style.display = "none";
        }

        // Display Order Confirmation
        orderForm = document.querySelector('div[id="order-confirmation"]');
        if (orderForm.style.display === "grid") {
            orderForm.style.display = "none";
        } else {
            orderForm.style.display = "grid";
        }
    } else {
        document.querySelector('p[id="name-alert"]').innerHTML = "Please enter a name for your order"
    }

  

    
}




