function task1Ch12(){
    var ch = prompt("Input a character");
   var index =0;
   var i =ch.charCodeAt(index);
//   document.write(i);
   for(var j =97;j<=122;j++)
   {
       if(i==j){
           document.write(ch + " is lower case letter");
       }
       
}
for(var k=65;k<=95;k++)
{
    if(i==k)
    {
        document.write(ch + " is Upper  case letter");
    }
}

}
function task2Ch12(){
    var number1 = prompt("Input 1st integer");
    var number2 = prompt("Input 2nd integer");
    if(number1>number2)
    {
        document.write(number1+ " is larger");

    }
    else if(number1==number2){
        document.write(number1+" "+number2+" are equal");
    }
else{
    document.write(number2+" is larger");
}

}
function task3Ch12(){
    var num = prompt("input a number");
    if(num==0)
    {
        document.write("number is zero");
    }
    else if(num>0)
    {
        document.write("number is positive");
    }
    else{
        document.write("number is negative");
    }
}
function task4Ch12(){
    var character = prompt("input a charcter");
    
    if(character.length==1)
    {
    if(character=='a' || character=='e' || character=='i' || character=='o' || character=='u')
    {
        document.write(character+" is a vowel");
    }
    else{
        document.write(character+" is  not a vowel");
 
    }
}
else{
    var character = prompt("input one charcter only");
}

}
function task5Ch12(){
    var Password = "pakistan";
    var password =   prompt("enter password");
    if(password ==""){
      password=  prompt("Please enter your password");
        var i =0;
    while(password=="")
    {
      password =  prompt("Please enter your password");
       i++;
    }
    
        if(password==Password)
        {
            document.write("\"Correct!The passwod you entered matches the original password\"");
        }
        else{
            document.write("\"Incorrect password\"");
        }
    
}
function task6Ch12()
{
    var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

}
}
function task7Ch12(){
    var time= prompt("input time in 24 hours format");
    if(time>=0000 && time<1200)
    {
        document.write("\"Good Morning!\"");

    }
   else if(time>=0000 && time<1200)
    {
        document.write("\"Good Morning!\"");

    }
   else if(time>=1200 && time<1700)
    {
        document.write("\"Good Afternoon!\"");

    }
  else  if(time>=1700 && time<2100)
    {
        document.write("\"Good Evening!\"");

    }
    else  if(time>=2100 && time<2359)
    {
        document.write("\"Good Night!\"");

    }
}
   
