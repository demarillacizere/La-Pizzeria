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