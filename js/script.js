

    // business logic

    let totalPriceArray=[];
     function Order(flavours,size,number,crust,toppings){
      this.flavours = flavours;
      this.size = size;
      this.number = quantity;
      this.crust = crust;
      this.toppings = toppings;
      this.pizzaPrice = 0;

    }
    Order.prototype.costPrice = function(){
        if (this.size == "large"){
            this.pizzaPrice += 1000;
        } else if (this.size == "medium"){
            this.pizzaPrice += 700;
        }
        else if(this.size == "small"){
            this.pizzaPrice += 500;
        }
        if (this.crust == "Crispy"){
            this.pizzaPrice += 300;
          } else if (this.crust == "Gluten free"){
            this.pizzaPrice += 300;
          } else if (this.crust == "stuffed"){
            this.pizzaPrice += 300;
          } else if (this.crust == "Thin"){
            this.pizzaPrice += 300;
          } else if (this.crust == "normal"){
            this.pizzaPrice += 300;
          }

          if (this.toppings == "Mushroom"){
            this.pizzaPrice += 100;
          }
          else if (this.toppings == "sausages"){
            this.pizzaPrice += 100;
          }
          else if (this.toppings == "Bacon"){
            this.pizzaPrice += 100;
          }
          else if (this.toppings == "Cheese"){
            this.pizzaPrice += 100;
          }
          else if (this.toppings == "Peperoni"){
            this.pizzaPrice += 100;
          }
        };

     Order.prototype.totalCostPrice = function() {
         let totalPrice = [];
         for(let arrayelement = 0; arrayelement< totalPriceArray.length;arrayElement ++) {
          totalCostPrices += totalPriceArray[arrayElement ]};
     }
  $("form#pizzaCart").submit(function(event){
      event.preventDefault();
      let personName = $('#name-input').text();
        let pizzaSize = $("#size-selector").val();
        let pizzaCrust =$("#crust-selector").val();
        let pizzaFlavours = $("#flavours-selector").val();
         let pizzaTopping = $("#toppings-input").val();
         let pizzaQuantity = Number($("#number-slector").val());
        let pizzaDetails = (size + " - " + crust + " - " + toppings);
         let newPizzaInfoOrder = new Order(size,crust,toppings);
          
         newPizzaInfoOrder.pizzaCost();
         totalPriceArray.push(newPizzoInfoOrder.pizzaPrice);
        });
        $("#order-total").text(newPizzaInfoOrder.totalCostPrice());
        $("#order-info").append("<ul><li>" + pizzaDetails + "</li></ul>");
        
        
        $(document).ready(function(){
        
        $("#submit-btn").click(function() {
            $("#reveals-order").show();
          });
        });

        $("#checkout-btn").click(function() {
          $("#checkout-details").show();
        });

     


// frontend
// $(document).ready(() =>{
//     $("#order form").submit(event) =>{
//         event.preventDefault();
//         let personName = $('#name-input').text();
//         let pizzaSize = $("#size-selector").val();
//         let pizzaCrust =$("#crust-selector").val();
//         let pizzaFlavours = $("#flavours-selector").val();
//          let pizzaTopping = $("#toppings-input").val();
//          let pizzaQuantity = Number($("#number-slector").val());
//     }) 

//     let placeOrder = new Pizza (personName,pizzaSize.pizzaCrust,pizzaFlavours,pizzaToppings,false);
//     $("#size-price").text(placeOrder.size + " " + placeOrder.type + ": " + "Ksh. " + placeOrder.sizePrize());
//     $("#crust-price").text(placeOrder.crust + ": " +  "ksh." + placeOrder.type + ": " + "Ksh. " + placeOrder.crustPrice());
//     $("#toppings-price").text(chickenSupreme.toppings + " Toppings" + ": " + "Ksh. " + chickenSupreme.toppingsPrice());
//   $("#delivery-price").text("Delivery: " + chickenSupreme.deliveryPrice());
//   $("#total").text("Total: " + "Ksh. " + chickenSupreme.totalPlusDelivery());
// });
// });
// $(document).ready(function(){
//     $("#checkOut").onclick(function(event){
//         alert (name + ", We have received your order. Thank you for contacting us.");
//     });    
//   });

// });


































// // menu.html
// const order = document.querySelector('.order'),
//       form = document.querySelectorAll('.form'),
//       submitInput = form[0].querySelector('input[type="submit"]');


// //       function getDataForm(e){
// //           e.preventDefault();
// //     //   stop submit default behaviour by adding e' event
// //     //    create new form data variable that passes in all info in form iput fills 
// //        let formData = new FormData(form[0]);
// //        alert(`${formData.get('namefield')}-${formData.get("flavoursfield")}
// //        -${formData.get('sizefield')}-${formData.get("numberfield")}
// //        -${formData.get('crustfield')}
// //        -${formData.get('toppingsfield')}`);
// // }

// //   document.addEventListener("DOMContentLoaded",function(){
// //         submitInput.addEventListener('click'.getDataForm,false);

// // }, false); 

// // 
// // var size = $("#size").val();

// $(document).ready(function() {
//     $("#order form").submit(function(event) {
//         var nameInput = $("input#name").val();
//         var flavoursSelect = $("select#flavours").val();
//         var sizeSelect = $("select#size").val();
//         var  numberSelect= $("select#number").val();
//         var topping = $("input:radio[name=flavor]:checked").val();
//         $(".name").text(nameInput);
//         $(".flavours").text(flavoursSelect);
//         $(".size").text(sizeSelect);
//         $(".number").text(numberSelect);
//         $(".toppings").text(toppingsinput);

//         $("#story").show();

//         event.preventDefault();
//     });
// });

// // 
// var flavor = $("input:radio[name=flavor]:checked").val();