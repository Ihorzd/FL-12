// Your code goes here
const a=prompt("Pleas enter a ",NaN);
const b=prompt("Pleas enter b ",NaN);
const c=prompt("Pleas enter c ",NaN);
const disk_B=4;
if(isNaN(a) || isNaN(b) || isNaN(c)===true){
     console.log("Invalid input data");
}else{
    var diskriminant=b*b-disk_B*a*c;
    console.log(diskriminant);
    if(diskriminant < 0){
    console.log("No Solution");
    
    }else if(diskriminant===0){
        var x=-b/2*a;
        console.log("x="+x);
    }else{
        var x1=-b+Math.sqrt(diskriminant)/2;
        var x2=-b-Math.sqrt(diskriminant)/2;
        console.log("x1="+x1+"x2="+x2);
    }
    

}
