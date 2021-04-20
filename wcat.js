//  input -> ??
let fs = require("fs");
let input = process.argv.slice(2);
console.log("input", input);
let options = [];
let filePaths = [];
for (let i = 0; i < input.length; i++) {
    // first character js string 
    if (input[i] == "-s" || input[i] == "-b" || input[i] == "-n") {
        options.push(input[i]);
    } else {
        filePaths.push(input[i]);
    }
}
// console.log("options", options);
// console.log("filePath", filePaths);
//for file path exist
for (let i = 0; i < filePaths.length; i++) {
    let isFilePresent = fs.existsSync(filePaths[i]);
    if (isFilePresent == false) {
        console.log("filepath", filePaths[i], "does not exist");
        return;
    }
}
//to read content from file path
let totalContent = "";
for (let i = 0; i < filePaths.length; i++) {
    let contentOFCurrent = fs.readFileSync(filePaths[i]);
    totalContent += contentOFCurrent + "\r\n";
}
// console.log(totalContent);
//  implements
//remove empty line breaks
let isSoption = options.includes("-s");
if (isSoption == true) {
    //   empty line break remove
    // console.log(totalContent);
    // idenitfy empty line breaks
    let contentArr = totalContent.split("\r\n");
    // console.log(contentArr);
    // remove 
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] !== "") {
            tempArr.push(contentArr[i]);
        }
    }
    totalContent = tempArr.join("\r\n");
}
let isN=options.includes("-n");
let isB=options.includes("-b");

let finalOption;
if(isN==true){
    if(isB==true){
        let idxB=options.indexOf("-b");
        let idxN=options.indexOf("-n");
        finalOption=idxB<idxN?"-b":"-n";
    }
    else{
        finalOption="-n";
    }
}
    else if(isB==true){
        finalOption="-b";
    }


if (finalOption="-n") {
    let count = 1;
    let contentArr = totalContent.split("\r\n");

    // console.log(contentArr);
    for (let i = 0; i < contentArr.length; i++) {
        contentArr[i] = count+". " + contentArr[i];
        count++;
    }
    totalContent = contentArr.join("\r\n");
}
//console.log(totalContent);

 if (finalOption="-b") {
    let count = 1;
    let contentArr = totalContent.split("\r\n");

    // console.log(contentArr);
    for (let i = 0; i < contentArr.length; i++) {
        if(contentArr!=0){
        contentArr[i] = count+". " + contentArr[i];
        count++;
    }
    }
    totalContent = contentArr.join("\r\n");
}
console.log(totalContent);
// let empArr=[];
// if(isB==true){let count=1;
// for(let i=0;i<totalContent; i++){
//     if(totalContent[i]==""){
//      empArr+=count+"."+ empArr.push(totalContent[i]);
//      count++;
// }
// }
// console.log(empArr);
// }

//  -s option implement
// console.log(totalContent);
//
//  node wcat.js -s -b -n "f1.txt" 
//  node wcat.js -s -b -n "f1.txt" "f2.txt" "f4.txt" 
