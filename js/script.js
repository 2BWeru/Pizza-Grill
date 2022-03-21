

    // business logic
   
      

    let totalPriceArray=[];
     function Order(flavours,size,number,crust,toppings){
      this.flavours = flavours;
      this.size = size;
      this.number = quantity;
      this.crust = crust;
      this.toppings = toppings;

    }
    //  let Order= document.querySelectorAll(".form");g

    priceBySize = function(){
        if (this.size == "large"){
            return 1000;
        } else if (this.size == "medium"){
          return 700;
        }
        else if(this.size == "small"){
          return 700;
        }

    priceByCrust = function(){
        if (this.crust == "Crispy"){
            return 300;
          } else if (this.crust == "Gluten free"){
            return 300;
          } else if (this.crust == "stuffed"){
            return 300;
          } else if (this.crust == "Thin"){
            return 300;
          } else if (this.crust == "normal"){
            return 300;
          }

    priceByToppings = function(){
          if (this.toppings == "Mushroom"){
            return 100;
          }
          else if (this.toppings == "sausages"){
            return 100;
          }
          else if (this.toppings == "Bacon"){
            return 100;
          }
          else if (this.toppings == "Cheese"){
            return 100;
          }
          else if (this.toppings == "Peperoni"){
            return 100;
          }
        }

    deliveryPrice = function(){
          if(delivery == "true"){
           return 200;
          }else {
            return 0;
          }}
        
    totalPriceMinusDelivery();{
          let priceA = priceBySize;
          let priceB = priceByCrust;
          let priceC = priceByToppings;
            return priceA + priceB + priceC;
            }}
    pricePerQuantity();{
          let numPrice = this.totalPriceMinusDelivery();
            return numPrice * this.quantity;
            }
          }

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
         let pizzaToppings = $("#toppings-input").val();
         let pizzaQuantity = Number($("#number-slector").val());

         let newPizzaInfoOrder = new Order(size,crust,toppings,number, false);
         $("#size").text(newPizzaInfoOrder.size + " " + newPizzaInfoOrder.flavour + ": " + "Ksh. " + newPizzaInfoOrder.priceBySize());
         $("#crust).text(PizzaInfoOrder.crust + ":" +  "Ksh." + PizzaInfoOrder.crustPrice());
         $("#toppings").text(newPizzaInfoOrder.toppings + " " + 'toppings' +":" + "Ksh. " + newPizzaInfoOrder.priceByToppings());
         $("#delivery").text("Delivery:" + newPizzaInfoOrder.DeliveryPrice());
         $("#order-total").text("Total: " + "Ksh. " + newPizzaInfoOrder.totalPlusDelivery());
      });
        //  $("#orderTotal").text(newPizzaInfoOrder.totalCostPrice());
        // $("#order-info").append("<ul><li>" + pizzaDetails + "</li></ul>");
        
        
        $(document).ready(function(){
        
         $("#submit-btn").click(function() {
            $("#revealsOrder").show();
          });
         

        $("#checkout-btn").click(function() {
          $("#checkout-details").show();
        });

      });

     

















