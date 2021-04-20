let a=[7,4,7,8,3,3,46,5,3];
function fal(param){
    let first=-1;
    let last=-1;
for(let i=0;i<a.length;i++){
    if(a[i]==1){
        first=i;
        break;
    }
}
for(let i=a.length;i>=first;i--){
    if(a[i]==1){
        last=i;
        break;
    }
}
return first+" "+last;

}
let value=fal(a);
console.log(value);