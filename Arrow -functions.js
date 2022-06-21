//Do the below programs in arrow functions

//Print odd numbers in an array
var arr=[1,2,3,4,5,6,7,8];
var result=arr.filter((iteam)=>iteam%2!==0);
console.log(result);


//Convert all the strings to title caps in a string array
var arr1=["ram","kumar","vimal","anbu"];
var Captitle=arr1.filter((iteam)=>iteam[0].toUpperCase()+iteam.slice(1));
console.log(Captitle);


//Sum of all numbers in an array
var data=[1,2,3,4,5,6,7,8,9];
var resultsum=data.reduce((acc,iteam)=>acc+iteam);
console.log(resultsum);


//Return all the prime numbers in an array
var Arr=[1,2,3,4,5,6,7,8,9]
var resultprime=Arr.filter((iteam)=>{
        for(var l=2;l<iteam;l++){
        if(iteam%l===0)
            return false;
    }
    return true;
});
console.log(resultprime);


//Return all the palindromes in an array
var palarr=[121,211,12321,53221];
var result_pallindrome=palarr.filter((iteam)=>{
        let temp=iteam+"";
        if((temp.split('').reverse().join(''))===iteam+""){
        return true;
    }
    return false;
    });
    console.log(result_pallindrome);