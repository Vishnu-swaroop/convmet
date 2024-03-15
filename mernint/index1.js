var mat=require('./p1');
var k=10,p=3000,n=400,a=600;
console.log("Converting cm to km "+mat.div(k,1000));
console.log("Converting km to cm "+mat.mult(p,1000));
console.log("Converting m to km "+mat.div(n,1000));
console.log("Converting m to cm "+mat.mult(a,1000));