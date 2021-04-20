//let obj={};
//console.log(obj);
// let obj={name:"Arzoo",lastName:"Rani",age:20};
// console.log(obj);
let tony={
    name:"tony",lastName:"stark",friends:["bruce","peter","stave"],
    age:35,
    isAvenger:true,abc:undefined,address:{
        street:"new york",city:"long island"
    },
    sayshi:function fn(){
        console.log("hello world");
        return true;
    }
}
//console.log(tony);
//1
// console.log(tony.name);
// console.log(tony.lastName);
// console.log(tony.friends[0]);
// console.log(tony.address.city);
//2
// console.log(tony['name']
// );
// console.log(tony['lastName']
// );
// console.log(tony['friends'][1]
// );
// console.log(tony['address']['city']
// );
// console.log(tony["sayshi"]()
// );
// console.log(tony['lastName']);
//for all keys to print
for(let key in tony){
    console.log(key);
}
//for all keys to get print in array
 let karr=Object.keys(tony);
console.log(karr);
//for all values to get printed
for(let i=0;i<karr.length;i++){
    let key=karr[i];
    console.log(tony[key]);
}