

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
     let Order= document.querySelectorAll(".form");

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
         $("#orderTotal").text(newPizzaInfoOrder.totalCostPrice());
        $("#order-info").append("<ul><li>" + pizzaDetails + "</li></ul>");
        
        
        $(document).ready(function(){
        
         $("#submit-btn").click(function() {
            $("#revealsOrder").show();
          });
         

        $("#checkout-btn").click(function() {
          $("#checkout-details").show();
        });

      });

     

















