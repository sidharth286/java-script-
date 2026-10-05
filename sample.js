// let obj={
//     name:"sidharth",
//     lastname:"k"
// }
// function printname(state,age){
//     console.log(this.name,this.lastname,state,age)
// }
// printname.apply(obj,["kannur",21])

// let a=printname.bind(obj,"kannur",21)
// a()
// let a=[2,34,55,67]
// console.log(a.sort(()=>Math.random()-0.5))
// let a=-4.5,
// 33;
// console.log(Math.min(a))
// function addrress(place){
//     console.log("your place"+place)
// }
// function display(callback){
//     callback("kannur")
// }
// display(addrress)
// callback function
// function add(a,b){
//     return a+b;
// }
// console.log(add(20,30))
// console.log(add(20,30))
// pure function
// let add=function(a,b){
//     return a+b;
// }
// console.log(add(10,30))
// function expression

// (function (){
//     console.log("sidharth")

// })();
// iife
// function add(a,b,c){
//     return a+b+c;
// }
// console.log(add((1),(2),(3)))
// function createGreeting(greeting) {
//   return function(name) {
//     return greeting+","+name;
//   };
// }

// const sayHello = createGreeting("Hello");
// console.log(sayHello("Rahul"));

// let obj={
//     name:"sidharth",
//     age:21,
//     place:"kannur"
// }
// let{name:fullname,age,place}=obj
// console.log(fullname)