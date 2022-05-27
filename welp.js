// NOTES//
// 21 march 2022  THIS KEYWORD
var mob_make ="Apple"
var mob_modal ="11 pro"
var price = 50000
function calculate_charging(){
    document.write("it supports wireless charging")
}
// In this case problem will arise when we have to save 100  diff mobiles. In that situation we have to use the same properties again and again for 100 diff mobiles and we can copy and paste thye same piece of code repeatedly and we have to change the values of these properties every time for a particular mobile. So this is the inefficient way for tackling such kind of a problem Here, the cocept of objests comes into the picture . These objects help us to bundle these properties for atributes intto a single entity.

var mob = {
    mob_make : "Apple",
    mob_model : "11 pro",
    price : 60000,
    wirelesscharging : function(){
        document.write(" it supports wireless charging")
    }

}

// Here, all thge properties and function are coupled in a single variable called mob.This mob variable is called as an object .
// var obj= new --- new keyword creates a new memory block of the new object in order to store the new values against their properties and function. 
 var myVar = 100;

 function Wholsthis(){
     this.myVar = 200;

 }
  var obj1 = new Wholsthis();

  var obj2 = new WholsThis ();
  obj2.myVar = 300;
 
  alert(obj1.myVar); // 200
  alert(obj2.myVar); // 300

// 22 march 2022
// compiler reads the source code file. Vriables, functions are hosted. (memory elocation) 
// function calling and declaration.
//case 1:
function catName(name){
    console.log("my cat name is " + name);
    }

catName("Tiger")


//case 2:(it'll run but a wrong practice)
catName("Chloe")
function catName(name){
    console.log("my cat name is " + name);
    }
//this result of code above is "My cat name is Chloe"

//ONLY DECLARATION ARE HOISTED
//java script only hoists the declaration, not initializations.If a variable is declared and initiated after using it , the value will be undefined. foe eg
//  console.log(num); returns undefined, as only declaration was hoisted, no initialization happens in this stage.

// if we perform function using expression that function won't be hoisted(type error)
// only normal functions are hoisted. 


//CONCLUSION
//Hoisting is not working in arrow function (refference error)
//Hoistiong is not working in function expression ( type error)
//Hoisting does not work when written with paranthesis (reference error)



/*<script>
        var gb="window";
        function a()
        {
            var local1="Hello";
            console.log(local1);
            b()
            console.log("students");

        } 

        function b()
        { console.log("B-tech CSE");
        c(); }

        
        function c()
        {console.log ("Group 02");}
        a();
        </script>


// FUNCTION CALLING STACK
object
var studentname = "abc"
var student roll no. = 101
var student class = BE

result = function()
{
    return 85;
}*/
 
/*let s1name = "Abhay aggarwal"
let s1rno =2110990034
let s1class = 'B.E.'
let result1 = function(){
    return 85
}


let s1name = "Abhijeet Sambharwal"
let s1rno =2110990040
let s1class = 'B.E.'
let result1 = function(){
    return 85
}
let s1name = "Aakriti Bahl"
let s1rno =2110990008
let s1class = 'B.E.'
let result1 = function(){
    return 85
    
    
    
//23 march


 <script>
     var data1= "hello students";
     function first()
     {
         var data2 = "how are you?";
         second();
         function second(){
             var data3 = "let's understand scope chain";
             console.log(data1+data2+data3);
         }
     }
     first();
 </script>   */

<script>
var data1= "hello students";
function first()
{
    var data2 = "how are you?";
    second();
    function second(){
        var data3 = "let's understand scope chain";
        console.log(data1+data2+data3);
        three();}
    }
    function three(){
        var data4 ="of Group-02";
        console.log(data1+data2+data3+data4;)
    }
first();
</script>



/*in this example-- this keyword reffers to the the owner object . therefore it will display the student object .
in a regular function in that case this keyword refers to a global object.
In a function in strict mode this keyword will reffer as undefined 

  eg--
      
  





  30th march 2022


  CLASS METHODS
   
  Static variable-- a static keyword is used to make a common memory space.

  >the static keyword defines a static method or property for a class.
  >static members are called without intantiating their clss and cannot be called through a class instance.
  >static methods are often used to create utility functions for ann application whereas ststic properties are useful for caches , fixed-configuration, or other data you dont need to be replicaed across instances.*/

  /*class point{
       constructor(x,y){
           this.x=x; this.y=y;
       }
       static displayName="Point";
       static distance(a,b){
           const dx=a.x -b.x;
           const dy=a.y - b.y;
           return Math.hypot(dot,dy)}}
           const p1= new Point(3,2);
           const p2= new Point(6,6);pl.displayName;
           console.log(Point.displayName);
           console.log(Point.distance(p1,p2));
           //7.0710678118654755 */


            




           static a=0;
           static objcount()
           {
               a=a+1;
           }

           objCount_Normal()
           {
               a=a+1;
           }
       
       constructor()
       {
           a=a+1
       }  
  




     class test 
       { static a=0;
        constructor()
        {

            a=a+1
        }
        static objCount()
        {

            a=a+1
        }
/* ilustration of on ready stage change function 
  

xhr.onreadystatechange = function () {
    console.log('ready stae is ', xhr.readyState);
}



