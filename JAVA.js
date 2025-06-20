let a = 2;
if(a%2 == 0){
    console.log("even");
}else{
    console.log("odd");
}
//...........................
 for(let a = 10;a>0;a--){
    console.log(a);
 }
 //.......................
 a = 5;
 let sum = 1;
 while(a>0){
    sum = sum*a
    a--;
 }
 console.log(sum);
 //........................
 let Thamizh ="";
 for(i=0;i<10;i++){
    Thamizh += i;
 }
 console.log(Thamizh);
 //......................
 function add(b,c){
    return(b+c);
 }
 let d = add(5,10);
 console.log(d);
 //...........................
 function string(a){
    a = "Hi " + a;
    console.log(a);
 }
 string("Thamizharasaan");
//..............................
let a1 = 10,b1 = 5;
let sub=(a1,b1)=>(console.log(a1-b1));
sub(a1,b1);
//........................
let v = [];
v.push(1);
v.push(6);
v.push(4);
v.push(0);
console.log(v);
//................................
let numbers = [1, 2, 3, 4, 5];
let k = numbers.map(j => j);
console.log(k);
numbers.push(100);
numbers.reverse();
console.log(numbers);
//...........................
let Student = {
    name: "Thamizh",
    marks: [80,90,97,100],       
}
console.log(Student.name);
//............................
let abc=new Set([1,2,3,4,2,4,6,4]);a
console.log(abc);
abc.add(100);
console.log(abc);
abc.delete(100);
let h = abc.has(5);
console.log(h);
console.log(abc.size);
abc.clear();
console.log(abc);
//.............................
let xyz = new Map();
xyz.set("name","Thamizh");
xyz.set(42,"Thamizh123");
xyz.set({id:1},"object");
console.log(xyz);
console.log(xyz.get(42));
console.log(xyz.has(42));
//.............................
let aa = ["Grape","Mango","Orange"];
let [a2,b,c] = aa
console.log(a2,b);
//................................
let q = [1,2,3,4,5];
let w = [...q,2,3,5,6];
console.log(w);
//..............................
function outer(){
   let name = "Thamizh";
   function inner(){
      console.log("hello "+name);
   }
   inner();// or return inner;
}
outer();
//...............................
console.log("THAMIZH");
setTimeout(function add1(){
   console.log("Second");
}  ,7000);                                                                                                                                     
console.log("End");
//...............................
let o = 1
df = setInterval(()=>{
   console.log(o);
   o++;
   if(o>5){
      clearInterval(df);
   }
},1000);
//................................
