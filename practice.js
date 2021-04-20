let fs=require('fs');
let path=require('path');
let extensions={
    "Image":[".jpg",".jpeg",".gif",".png"],
    "Audio":["mp3"],
    'Documents':['.pdf','.txt','.doc'],
    'Compressed':['.zip','.rar'],
    'Videos':['.mkv','.mp4']
}

let input=process.argv.slice(2);
let folderPath=input[0];
let extFolderPath=folderPath;

function createFolder(){
    fs.mkdirSync(extFolderPath);
}
function checkFolder(extension,folderPath){
for(let key in extensions){
    let arr=extension[key];
    let eon=arr.include(extension);
    if(eon==true){
        extFolderPath=path.join(folderPath,key);
        break;
    }

}
return fs.existsSync(extFolderPath);
}



//console.log(input[0]);
let content=fs.readdirSync(input[0]);
console.log(content);
for(let i=0;i<content.length;i++){
    let extensionName=path.extname(content[i]);
   // console.log(extensionName);
   let extensionFolderExist=checkFolder(extensionName,folderPath);
   if(extensionFolderExist==true){
       createFolder();
       //mode krvana hai
}
else {
//move krvana hai 
}
}


