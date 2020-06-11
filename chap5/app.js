function task1(){
var num1, num2, sum;
num1 = prompt("input 1st numbers");
num2 = prompt("input second number");
sum = +num1 + +num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");
if(num1>num2)
{
var sub = num1 - num2;
}
else{
    var sub = num2 - num1;
}
document.write("Subtration of " + num1 + " and " + num2 + " is " + sub + "<br>");
var mul = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is " + mul + "<br>");
var div = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is " + div + "<br>");
var mod = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is " + mod + "<br>");
}
function task3(){
var var1;
document.write("Value after variable decalaration is " + var1 + "<br>");
var1 = 7;
document.write("Initial value: " + var1 +"<br>");
document.write("Value after Increment is: " +  ++var1 +"<br>");
var1 = +var1 + +7;
document.write("Value after Addition is: " +  var1 +"<br>");
var2 = --var1; 
document.write("Value after Decrement is: " +  var2 +"<br>");
var2 = var2 % 3;
document.write("The remainder is: " +  var2 +"<br>");

}
function task4(){
    ticket = 600;
    ticket = ticket*5;
    document.write("Total Cost to buy 5 tickets to a movie is " + ticket + "PKR");
}
function task5(){
    document.write("<h2> Table of 7 </h2>");
    for(var i=1; i<=10; i++)
    {
        table = 7*i;
        document.write("<b>7 X " + i +" =" + table + "<br>");
    }

}
function task6(){
    var temp = 35;
     temp = +(temp * 9/5) +  +32;
     document.write("35<span>&#176;</span>C  is " + temp + "<span>&#176;</span>F <br>");
     var temp2 = 89;
     temp2 = (temp2 - 32) * 5/9;
     document.write("89<span>&#176;</span>F  is " + temp2 + "<span>&#176;</span>C <br>");
}
function task7(){
    document.write("<h1>Shopping Cart</h1>");
    var price1 = 478;
    var price2 = 270;
    var quantity1 = 3;
    var quantity2 = 5;
    var shipping = 200;
    total = +(price1*quantity1) +  +(price2*quantity2) +  +shipping;
    document.write("Price of item 1 is "+ price1 + "<br>");
    document.write("Quantity of item 1 is "+ quantity1 + "<br>");
    document.write("Price of item 2 is "+ price2 + "<br>");
    document.write("Quantity of item 2 is "+ quantity2 + "<br>");
    document.write("Shipping Charges "+ shipping + "<br><br>");
    document.write("Total Cost of your order is "+ total + "<br>");

}
function task8(){
    document.write("<h1>Marks Sheet</h1><br><br>")
    var total = 700;
    var obt = 634;
    var per = (obt*100)/700 ;
    document.write('Total marks: ' + total + "<br>" + "Marks Obtained: " + obt +"<br>" +"Percentage: " +per);
}
function task9(){
    document.write("<h1>Currency in PKR</h1><br>");
    total = +(10*104.80) +  +(25*28);
    document.write("Total Currency in PKR: " + total);
}
function task10(){
    var num = 6;
    num = ((+num + +5)*10)/2;
    document.write("Total Calculation : " +num);
}
function task11(){
    var currentYear = 2020;
    var birthYear = 1986;
    var age = currentYear - birthYear;
document.write("<h1>Age Calculator</h1> <br> Current Year: " + currentYear + "<br>" + "Birth Year: " + birthYear + "<br>" +"Your Age is: " + age);
}
function task12(){
    var radius = 4.5;
    var circumference = 2 * 3.142 *radius;
    document.write("<h1>The Geometrizer</h1> <br> The radius of circle is: " +radius +"<br>The Circumference is: "+ circumference +"<br>");
    var area = 3.142 * (radius*radius);
    document.write("The area is: " + area);
}
function task13(){
    var snack = "Chocolato Biscuit";
    var currentAge = 20;
    
    var maxAge= 55;
    var amount= 2;
    var age= maxAge-currentAge;
    var total = age*amount;
    document.write("<h1>The Lifetime Supply Calculator</h1>");
    document.write("favourite Snack: "+snack + "<br>");
    document.write("Current age: "+ currentAge + "<br> Estimated Maximum Age: " + maxAge +"<br> Amount of snacks per day: "+amount);
    document.write("<br> You will need "+total + " " +snack+ " to last you until the ripe old age of " + maxAge );
}