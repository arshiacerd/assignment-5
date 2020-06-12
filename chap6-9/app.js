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