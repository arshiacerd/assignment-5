function task1(){
    var city = prompt("Input city name in lowercase:");
    if(city=="karachi")
    {
        document.write(" \"Welcome to the city of lights\" ");
    }
}
function task2(){
    var gender = prompt("Input gender");
    if(gender=="male" || gender=="Male" || gender=="MALE")
    {
        document.write("Good Morning Sir");
    }
    else if(gender=="female" || gender=="Female" || gender=="FEMALE")
    {
        document.write("Good Morning Ma'am");
    }
}
function task3(){
    var color= prompt("Input  traffic signal color");
    document.write("<table><tr><th>Signal Color</th><th>Message</th></</tr>");
    if(color=="red")
    {
        document.write("<tr><td>Red</td><td>Must Stop</td></</tr>");
    }
    else if(color=="green")
    {
        document.write("<tr><td>Green</td><td>Move Now</td></</tr>");

    }
    else if(color=="yellow")
    {
        document.write("<tr><td>Yellow</td><td>Ready to move</td></</tr>");

    }
    
}
function task4(){
    var fuel = prompt("Enter remaining fuel of car in liters")
    if(fuel<0.25)
    {
        document.write("Please refill the fuel in your car");

    }
    else{
        document.write("You can move on");
    }
}
function task5(){
    var a = 4;
    if (++a === 5){
    alert("given condition for variable a is true");
    }
     var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
    }
    var c = 12;
    if (c++ === 13){
    alert("condition 1 is true");}
    if (c === 13){
        alert("condition 2 is true");
        }
        if (++c < 14){
        alert("condition 3 is true");
        }
        if(c === 14){
        alert("condition 4 is true");
        }
         var materialCost = 20000;
        var laborCost = 2000;
        var totalCost = materialCost + laborCost;
        if (totalCost === laborCost + materialCost){
            alert("The cost equals");
            }
             if (true){
            alert("True");
            }
            if (false){
            alert("False");
            }
            if (totalCost === laborCost + materialCost){
                alert("The cost equals");
                }
                 if (true){
                alert("True");
                }
                if (false){
                alert("False");
                }
}
function task6(){
    var total = 300;
    var obt1 = prompt("Enter obtained marks of 1st subject:");
    var obt2 = prompt("Enter obtained marks of 2nd subject:");
    var obt3 = prompt("Enter obtained marks of 3rd subject:");
  
    var obt = +obt1 + +obt2 + +obt3;
    var per = (obt * 100)/300;
    document.write("<h1>Marks Sheet</h1><br>")
    document.write("Total Marks: "+total+"<br>");
    document.write("Marks Obtained: "+obt+"<br>");
    document.write("Percentage: "+per+"<br>");
 
    if(per>=80){
        document.write("Grade: A-one <br>");
        document.write("Remarks: Excellent <br>");
    }
    
    if(per>=70){
        document.write("Grade: A <br>");
        document.write("Remarks: Good");
    }
    if(per>=60){
        document.write("Grade: B <br>");
        document.write("Remarks: You need to improve");
    }
    if(per<60){
        document.write("Grade: Fail <br>");
        document.write("Remarks: Sorry");
    }
}
function task7(){
    var num =  6;
    var guess = prompt("Guess the secret number ranging 1-10");
    if(guess==num){
        document.write("\"Bingo! Correct Answer\"");
    }
    else if(guess==++num)
    {
        document.write("\"Close enough to the correct answer\"");
    }
    else{
        document.write("Your guess is incorrect");
    }
}
function task8(){
    var num = prompt("Input number to check that number is divisble by 3");
    if(num%3==0)
    {
        document.write("Given number is divisible by 3");
    
    }
    else{
        document.write("Given number is not divisible by 3");
    }

}
function task9()
{
    var num = prompt("Input number ");
    if(num%2==0)
    {
        document.write("Given number is <strong>Even</strong>");
    
    }
    else{
        document.write("Given number is <strong>Odd</strong> ");
    }
}
function task10(){
    var temp=prompt("Input temperature");
    if(temp>40)
    {
        document.write("\"It is too hot outside\"");
    }
   else if(temp>30)
    {
        document.write("\"The Weather today is Normal\"");
    }
    else if(temp>20)
    {
        document.write("\"Today's Weather is Cold\"");
    }
  else  if(temp>10)
    {
        document.write("\"OMG! Today's Weather is so Cool\"");
    }
}
function task11(){
    var num1 = prompt("Input 1st number");
    var num2 = prompt("Input 2nd number");
    var operator = prompt("Input Operator wheather +,-,/,*,%");
    if(operator=='+')
    {
        add = +num1 + +num2;
        document.write("Result is: "+add);
    }
    if(operator=='-')
    {
        sub = num1 - num2;
        document.write("Result is: "+sub);
    }
    if(operator=='*')
    {
        mul = num1 * num2;
        document.write("Result is: "+mul);
    }
    if(operator=='/')
    {
        div = num1  / num2;
        document.write("Result is: "+div);
    }
    if(operator=='%')
    {
        mod = num1 % num2;
        document.write("Result is: "+mod);
    }
   

}