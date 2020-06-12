 function myfunction1(){
alert("Welcome to my website");
}
function myfunction2(){
alert("Error! Please enter a valid password");}
function myfunction3(){
alert("Welcome to JS Land...\nHapping Coding!");}
function myfunction4(){
alert("Welcome to JS Land...");}
function myfunction5(){
alert("Happing Coding\n ");}
console.log("Hello...I can run Js through my web browsers console");
var username; //1
var myName="Arshia"; //2
//3
var message; //a
message="Hello World";  //b
alert(message); //c
function bioData(){
var name="Jhone Doe"; 
alert(name);
var age="15 years old";
alert(age);
var course="Mobile App Development";
alert(course);
}
function pattern(){
    var array=['A','Z','Z','I','P'];
    for(var i=0;i<=4;i++)
    {
        for(var j=array.length-1;j>=i;j--)
        {
            document.write(array[j]);
        }
        document.write("<br>");
        
        
    }
}
    function mail(){
        var email="ayanshah3001@gmail.com";
        alert("My email address is " + email);

    }

    function browserMsg(){
        document.write("Yah! I can write HTML content through JavaScript");
        }
        
function book(){
    var book="A smarter way to learn JavaScript";
    alert('I am trying to learn from the Book ' + book);
}
function design(){
    var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
    document.write(design);
    alert(design);
}
function age(){
    var age=20;
    alert("I am " + age + " years old");
}
function birth(){
    var birthYear=1999;
    document.write("My birth year is " + birthYear + "<br> Data type of my declared variable is number"  );
    
}
function store(){
    var name="John Doe";
    var product="shirts";
    var quantity=6;
    document.write( "<b>"+name  +"</b>"+ " ordered  " +"<b>"+quantity + " " + product +"</b> "+ "on XYZ Clothing Store");
}
var var1,var2,var3;
//illegal variables
// var 1name;
// var @a;
// var second variable;
// var var,iable;
// var illegal*;
//legal variables
var name, secondVariable,first_name,$dollar,name1;
document.write("<h1>Rules for naming JS variables</h1><br>");
document.write("Variable names can only contain , numbers, $, _.For Example:$my_1stVariable<br>");
document.write("Variables must begin with a letter, $ or _.For example: _name or name<br>");
document.write("Variables names are case sensitive<br>");
document.write("Variables names should not be JS keywords<br>");
 


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


    function task1Ch6(){
        var a = 14;
        document.write("<b>Result:</b> <br>");
        document.write("The value of a is: "+ a+ " <br>");
        document.write("<b>...........................</b> <br><br>");
        var a = ++a;
        document.write("The value of ++a is: "+ a + " <br>");
        document.write("Now the value of a is: "+a + " <br><br>");
        var a = a++;
        document.write("The value of a++ is: "+ a++ + " <br>");
        document.write("Now the value of a is: "+ a + " <br><br>");
        var a = --a;
        document.write("The value of --a is: "+ a + " <br>");
        document.write("Now the value of a is: "+a + " <br><br>");
        var a = a--;
        document.write("The value of a-- is: "+ a-- + " <br>");
        document.write("Now the value of a is: "+a + " <br><br>");
        
    }
    function task2Ch6(){
        var a=2 , b=1;
         var result= + --a - --b +  + ++b + +b--;
       
       
        document.write("<b>--a =</b> 1 <br> <b>--a - --b =</b> 1 <br><b>--a - --b + ++b =</b> 2 <br> <b>--a - --b + ++b + b-- =</b> 3 <br>")
    document.write("a is: 2<br>");
    document.write("b is: 1<br>");
    document.write("result is: "+result);
    }
    function task3Ch6(){
        var username = prompt("Enter your name");
        alert("Welcome "+ username);
    } 
    function task5Ch6(){
        var table = prompt("Enter table no:");
        if(table==""){
            document.write("<h3>Table of " +5+ " </h3>");
            for(var i =1 ;i<=10;i++)
            {
                var mul= 5 * i;
                document.write("<b>"+5+" X "+i+" = " + mul+"</b> <br>");
            }
    
        }
        else{
        document.write("<h3>Table of " +table+ " </h3>");
        for(var i =1 ;i<=10;i++)
        {
            var mul= table * i;
            document.write("<b>"+table+" X "+i+" = " + mul+"</b> <br>");
        }
    
    }
    }
    function task6Ch6(){
        var sub1 = prompt("Enter 1st subject name:");
        var sub2 = prompt("Enter 2nd subject name:");
        var sub3 = prompt("Enter 3rd subject name:");
        var total = 300;
        var obt1 = prompt("Enter obtained marks of 1st subject:");
        var obt2 = prompt("Enter obtained marks of 2nd subject:");
        var obt3 = prompt("Enter obtained marks of 3rd subject:");
        var per1 = (obt1*100)/100;
        var per2 = (obt2*100)/100;
        var per3 = (obt3*100)/100;
        var obt = +obt1 + +obt2 + +obt3;
        var per = (obt * 100)/300;
        document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
        document.write("<tr><td>" + sub1 + "</td><td>" + 100 + "</td><td>" + obt1 + "</td><td>" + per1 + "</td></tr>");
        document.write("<tr><td>" + sub2 + "</td><td>" + 100 + "</td><td>" + obt2 + "</td><td>" + per2 + "</td></tr>");
        document.write("<tr><td>" + sub3 + "</td><td>" + 100 + "</td><td>" + obt3 + "</td><td>" + per3 + "</td></tr>");
        document.write("<tr><th>" + " " + "</th><th>" + total + "</th><th>" + obt + "</th><th>" + per + "</th></tr></table>");
      
    
    
    
    }    



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
       


    var array=  []; //task1

let array2=new Array();//task2


var string;//task3
string=["Karchi","lahore","Islamabad"];

var number;//task4
number=[1,2,4,7,3,8,4];

var boolean;//task5
boolean=["True","False"];

var mixed;//task6
mixed=["hi",67,"Fasle"];

function task7Ch14()
{
    var qualification = [ "SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD" ];
    document.write("<h2>Qualifications</h2>");
    for(var i =0;i<=qualification.length-1;i++)
    {
        document.write(i+1 + ") " +qualification[i]+"<br>");
    }

}
function task8Ch14(){
    var stName=["Saba","Ali","faiza"];
    var score = [410,320,475];
    let per=[(410*100)/500,(320*100)/500,(475*100)/500];
    for(let i=0;i<=stName.length-1;i++)
    {
        document.write("<b>Score of " +stName[i] + " is " +score[i]+ " ." + " Percentage: " +per[i]+ "%<br>");
    }
}
function task9Ch14(){
    let color = ["red","green","blue","yellow","black"];
    document.write(color+"<br>");
}
 function AddColor(){   
    let color = ["red","green","blue","yellow","black"];
     let inputColor=prompt ( " Which color do u want to add in an array at the beginning");
       color.unshift(inputColor);
    document.write(color);
    let inputColor2=prompt ( " Which color do u want to add in an array at the end");
    color.push(inputColor2);
    document.write(color);
 }
function DeleteColor(){
    let color = ["red","green","blue","yellow","black"];
         color.shift();
   document.write("After Deleted First Color: "+color);
  
}
function DeletelastColor(){
    let color = ["red","green","blue","yellow","black"];
    
      color.pop();
   document.write("After Deleted Last Color: "+color);
  
}
function AddColor2(){   
    let color = ["red","green","blue","yellow","black"];
     let inputColor=prompt ( " Add color name ");
     let inputIndex=prompt ( " Add index no ");
     color.splice(inputIndex,"",inputColor)
      
    document.write(color);
    
 }
 function DeleteColor2(){   
    let color = ["red","green","blue","yellow","black"];
    
     let inputIndex=prompt ( " Add index no ");
     let userInput = prompt("How many colors do u want to delete");
     color.splice(inputIndex,userInput);
      
    document.write(color);
    
 }
 function task10Ch14(){
     let array = [210,450,100,367,420,505];
     document.write("<b>Scores of students: "+array + "<br>");
     document.write("Ordered Scores of students : "+array.sort());

 }
 function task11Ch14(){
     let cities =["Karachi","lahore","Islamabad","Peshawar","Quetta"];
     document.write("<b>Cities list:<br>"+cities+"<br>");
  document.write("Selected Cities list:<br>"  +cities.slice(0,3));
 }
 function task12Ch14(){
     let string = ["This" , "is" , "my" , "home"];
     document.write("Array:<br>"+string+"<br>");
     document.write("String:<br>"+string.join(" "));
 }
 function task13Ch14(){
     let array = ["keyboard","mouse","printer","monitor"+"<br>"];
     document.write("<b>Devices: <br>"+array);
     for(let i=0 ;i<=array.length-1;i++)
     {
         document.write("Out:<br>"+array[i]+"<br>");
     }
 }

 function task14Ch14(){
    let array = ["keyboard","mouse","printer","monitor"+"<br>"];
    document.write("<b>Devices: <br>"+array);
    for(let i=array.length-1 ;i>=0;i--)
    {
        document.write("Out:<br>" +array[i]+ "<br>");
    }
}
function task15Ch14(){
    let array = ["(Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
    document.write("<select name='phone' id='phone'><option value='Apple'>Apple</option><option value='Samsung'>Samsung</option><option value='Motorola'>Motorola</option><option value='Nokia>Nokia</option><option value='Sony'>Sony</option><option value=Haier>Haier</option></select>");
}




let array=[[1,2],[3,4],[5,6]]; //task1
function task2(){
    let array=[
        [0,1,2,3],
        [1,0,1,2],
        [2,1,0,1],
]
for(let i =0;i<=array.length;i++){
 for(let j=0;j<=array.length;j++)
 {
document.write("<b>"+array[i][j]);
}
document.write("<br>");
}

}
function task3Ch17(){
for(let i=1;i<=10;i++)
{
    document.write(i+"<br>");
}
}
function task4Ch17(){
   var tab=prompt("Enter table no");
   var len= prompt("Enter length of table");
   document.write("<b> Multiplication table of "+ tab+"<br>Length of "+len+ "</b><br><br><br>");
   for(let i=1;i<=len;i++){
       var tab2 = tab*i;
       document.write(tab + " X " + i + " = " + tab2 + "<br>");
   }

}
function task5Ch17(){
   var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
   for(var i=0;i<fruits.length;i++)
   {
       document.write(fruits[i] + "<br>");
       
   }
   document.write("<br>");
   for(var i=0;i<fruits.length;i++)
   {
       document.write("Element at index " + i + " is " + fruits[i] + "<br>");
       
   }
   }
   function task6Ch17(){
       document.write("<h2>Counting</h2>");
    for(let i = 1;i<=15;i++)
    {
        document.write("<b>"+ i + " , ");
    }
       document.write("<h2>Reverse Counting</h2>");
       for(var i=10;i>=1;i--){
        document.write(i + " , ");
       }

       document.write("<h2>Even</h2>");
       for(let i =0;i<=20;i++)
       {
           if(i%2==0){
           document.write(i + " , ");
        }
       }

       document.write("<h2>Odd</h2>");
       for(var i =1;i<=19;i++)
       {
           if(i%2!=0){
        document.write(i + " , ");
    }
       }
       document.write("<h2>Series</h2>");
       for(let i =2;i<=20;i++)
       {
           if(i%2==0){
           document.write(i + "k , ");
        }
       }

   }
   function task7Ch17()
   {
  var  A = ["cake", "apple pie", "cookie", "chips", "patties"];
  var input = prompt("Welcome to ABC Bakery. What do you want to order?");
  j=0;
  for(let i =0 ;i<=A.length;i++){
      if(input==A[i])
      {
          document.write( input + "<b> is available</b> at index "+ i +" in our bakery");
        ++j;
        
      }
     
  }
  if(j==0){
    document.write("We are sorry. "+input+ " is <b> not available</b> in our bakery");
    
}
   }
   function task8Ch17(){
  var  A = [24, 53, 78, 91, 12, 98];
  document.write("<h2>Array items</h2>");
  document.write(A +"<br>");
  
     
var  max = A[0];
    for (i=1; i<=A.length;i++){
        
        if (A[i]>max ){
             max=A[i];
            
        }
       
       }
       document.write("The largest number is " + max);
}
function task9Ch17(){
    var  A = [24, 53, 78, 91, 12, 98];
    document.write("<h2>Array items</h2>");
    document.write(A +"<br>");
    
       
  var  min = A[0];
      for (i=1; i<=A.length;i++){
          
          if (A[i]<min ){
               min=A[i];
              
          }
         
         }
         document.write("The smallest number is " + min);
  }
  function task10Ch17(){
      for(let i =1 ;i<=100;i++)
      {
          if(i%5==0)
          {
              document.write(i+", ");
          }
      }
  }
    