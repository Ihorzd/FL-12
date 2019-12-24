// Your code goes here
var a=prompt("Pleas enter a ","");
var b=prompt("Pleas enter b ","");
var c=prompt("Pleas enter c ","");
if(isNaN(a) || isNaN(b) || isNaN(c)==true)
 {
     console.log("input values should be ONLY numbers ");
 }
 else if((a||b||c)=="" ){
     console.log("input values should be ONLY numbers " );
 }
 else if(a<=0|| b<=0||c<=0) {
     console.log("A triangle must have 3 sides with a positive definite length");
 }
 a=parseFloat(a);
 b=parseFloat(b);
 c=parseFloat(c);
 if((a+b>c)&&(b+c>a)&&(a+c>b)){
     if(a==b==c){
         console.log("Equilateral triangle");
     }
     else if(a===b || b===c ||c===a){
         console.log("Isosceles triangle");
     }
     else{
         console.log("Scalene triangle")
     }
   
 }
 else{
     console.log("Triangle doesn’t exist");
 }
