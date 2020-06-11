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
