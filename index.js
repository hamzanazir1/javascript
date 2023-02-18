let arr=[1,2,3,4,5,6,7,8,9]
let counter=0;
let arry=[1,1,2,2,3]
let largest=1
let counter1 =largest;
let type=0
arry.sort()
for(let i=0;i<arry.length;i++){
    largest=(arry.lastIndexOf(arry[i])-arry.indexOf(arry[i]))+1
    if(largest=counter1)
    counter1=largest
    type=arry[i]
}
return type;

