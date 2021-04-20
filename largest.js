let a=[1,9,4,7,3,0];
function largest(param){
    let max=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>=max){
            max=a[i];
        }
    }
return max;
}
let value=largest(a);
console.log(value);
