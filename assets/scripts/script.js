// // //Function for order button to go to login page 
var buttons = document.querySelectorAll(".button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Specify the URL of the new page you want to open
    var newPageUrl ="login.html";

    // Open the new page in a new browser window or tab
    window.open(newPageUrl);
   
  });
});
//End of order button that sends us to login page


// start login event to go in cart page
function validateAndSubmit(event) {
    event.preventDefault();

    var isValidated = true;

    document.getElementById("usernameSpn").innerHTML = "";
    document.getElementById("passwordSpn").innerHTML = "";


    const username = document.getElementById("username").value;
    console.log(username);
    if (username.length < 3) {
        document.getElementById("usernameSpn").innerHTML = "Username must be min 3 chars";
        isValidated = false;
    }

    const password = document.getElementById("password").value;
    console.log(password);
    if (password.length < 6) {
        document.getElementById("passwordSpn").innerHTML = "Password must be min 6 chars";
        isValidated = false;
    }

    console.log(isValidated);

    if (isValidated == false) {
        return;
    }

    var PageUrl = "cart.html";
    var closelog = "login.html"
    window.open(PageUrl);
    window.close(closelog)
}


document.addEventListener('DOMContentLoaded', (event) => {
    const loginButton = document.getElementById("loginBtn")
    if (loginButton) {
        loginButton.addEventListener("click", validateAndSubmit);
    }
})
//end login 

//show password
onclick = togglePassword;
function togglePassword()
{
 if(check.checked) password.type = "text";
 else password.type = "password"
};

//end show password

//make cart page button active for pop up

class Order{
    constructor(_id,_CarModel, _CarBrand, _Price){
  
        if(arguments.length != 4)
        {
            throw new Error("Please, provide 4 properties")
        }
        this.id= _id;
        this.CarModel = _CarModel;
        this.CarBrand = _CarBrand;
        this.Price = _Price;
        
    }
  }
  
  const orders = [
    new Order( 1,'M5 E60 V10','BMW ','$40,000'),
    new Order(2,'911 TURBO S', 'PORSCHE','$180,345'),
    new Order(3,'','','Total = $220,345')
  ];
  
  //Get Table -> <tbody>
  const ordersTableBody = $(".cart1 tbody");
  ordersTableBody.empty();
  
  function populateTable(){
    $.each(orders, function(index, order){
  
        console.log(`Index = ${index}. Order = ${order}`);
  
        if(index==2){
          const newRowHtml = `<tr>
            <td>${order.CarModel}</td>
            <td>${order.CarBrand}</td>
            <td>${order.Price}</td>
            <td>
                 <button id="confirmBtn" data-order-id="${order.id}">Continue</button>
            </td>
        </tr>`;
        ordersTableBody.append(newRowHtml);
        }
        else{
          const newRowHtml = `<tr>
          <td>${order.CarModel}</td>
          <td>${order.CarBrand}</td>
          <td>${order.Price}</td>
          <td>
              <button id="removeBtn" data-order-id="${order.id}">Remove</button>
          </td>
      </tr>`;
      ordersTableBody.append(newRowHtml);
        }
        
  
        
    });
  }
  
  populateTable();
  
  // $(ordersTableBody).on('click', "#editBtn", function(){
  //   const orderId = $(this).data('order-id');
  //   const order = orders.find(n => n.id === orderId);
  //   // editOrder(order);
  
  //   console.log($`Selected order = ${order}`);
  
  //   $("#CarModel").val(order.CarModel);
  //   $("#CarBrand").val(order.CarBrand);
  //   $("#Price").val(order.Price);
  
  //   $("#editModal").show();
  // })
  
  
  $(ordersTableBody).on('click', "#removeBtn", function(){
    const orderId = $(this).data('order-id');
    const order = orders.find(n => n.id === orderId);
    // editOrder(order);
  
    console.log($`Selected order = ${order}`);
    $("#remove-CarBrand").text(order.CarBrand);
    $("#remove-CarModel").text(order.CarModel);
    $("#remove-Price").text(order.Price);
  
    $("#removeModal").show();
  })
  
  $("#conBtn").click(function(){
    window.alert("Kur e pe ne fillim te pelqeu , tani ste pelqeu aaa!");
    $("#removeModal").hide();
  
  });
  
  $("#cancelRemoveBtn").click(function(){
    $("#removeModal").hide();
  
  });
  
  
  
  
  $(ordersTableBody).on('click', "#confirmBtn", function(){
    const orderId = $(this).data('order-id');
    const order = orders.find(n => n.id === orderId);
    // editOrder(order);
  
    //console.log($`Selected order = ${order}`);
    $("#continueModal").show();
  });
  
  
  
  $("#noBtn").click(function(){
    $("#continueModal").hide();
  })
  
  $("#yesBtn").click(function(){
  
    $("#continueModal").hide();
    
  alert("Thank you for choosing us !" );
});
  
  //end cart pop up