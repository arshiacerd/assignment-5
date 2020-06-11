
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
    function task3(){
    for(let i=1;i<=10;i++)
    {
        document.write(i+"<br>");
    }
    }
    function task4(){
       var tab=prompt("Enter table no");
       var len= prompt("Enter length of table");
       document.write("<b> Multiplication table of "+ tab+"<br>Length of "+len+ "</b><br><br><br>");
       for(let i=1;i<=len;i++){
           var tab2 = tab*i;
           document.write(tab + " X " + i + " = " + tab2 + "<br>");
       }

    }
    function task5(){
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
       function task6(){
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
       function task7()
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
       function task8(){
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
    function task9(){
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
      function task10(){
          for(let i =1 ;i<=100;i++)
          {
              if(i%5==0)
              {
                  document.write(i+", ");
              }
          }
      }