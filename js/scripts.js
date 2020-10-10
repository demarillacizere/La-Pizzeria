//businees logic

function Order(size,crust,topping){
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaTopping = topping;
}
Order.prototype.totalPrice=function(){
    return this.pizzaSize + this.pizzaCrust + this.pizzaTopping ;
}
var sum=0;
Order.prototype.ordersPrice=function(){
    sum +=this.totalPrice();
    return sum;
}

//user-interface logic

$(document).ready(function(){
    $('#new-orders').on('change','#size',function(){
        if($('#size').val()=='1500'){
            $('#small-toppings').show();
            $('#medium-toppings').hide();
            $('#large-toppings').hide();
       }
       else if($('#size').val()=='2000'){
        $('#small-toppings').hide();   
        $('#medium-toppings').show();
        $('#large-toppings').hide();
       }
       else if($('#size').val()=='3000'){
        $('#small-toppings').hide();
        $('#medium-toppings').hide();   
        $('#large-toppings').show();
       }
    });
    $('#new-orders').on('submit','form',function(event){
        event.preventDefault();
        var grandTotal=[];
        let sizePrice=parseInt($('#size').val());
        let crustPrice=parseInt($('input:radio[name=crust]:checked').val());
        let toppingPrices=$('input:checkbox[name="topping"]:checked').map(function(){
            return $(this).val();
        }).get();
        var totalTopping=0;
        toppingPrices.forEach(function(toppingPrice){
            totalTopping += parseInt(toppingPrice);
        });
        if (totalTopping==0){
            alert("Please do select the topping(s) you prefer");
        }
        else{
            newOrder = new Order(sizePrice,crustPrice,totalTopping)
        $(this).last().text('Total price for your order: ' + newOrder.totalPrice());
        }
    });
    $('.container').on('click','#checkout',function(){
        $('this').last().text(newOrder.ordersPrice());
    });
})