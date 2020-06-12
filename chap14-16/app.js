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