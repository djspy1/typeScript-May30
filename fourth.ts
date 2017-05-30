console.log("hel")

//functions

/*var addNumbers=function(num1:number,num2:number){
  return num1+num2
};
var total=addNumbers(4,5)
console.log(total)
*/
/*var addmoreNumbers=function(num1:number,num2:number=2){
	return num1+num2
}
var sum=addmoreNumbers(1,5)
console.log(sum)*/

/*var addmoreNumbers=function(num1:number,num2:number=2,num3?:number){
	console.log("num1:",num1);
	console.log("num2:",num2);
	console.log("num3:",num3)

if(num3!==null){
	return num1+num2+num3
}
return num1+num2
}
var sum=addmoreNumbers(1,2)
console.log(sum);*/

 myRestParms(first,second,...others){
	console.log("first:",first)
	console.log("second:",second)
	console.log("others:",others)
}
console.log("myRestParms:",myRestParms("Div","Div2","ass","swwws")

function sumNumber(...nums:number[]){
	for(var value of nums){
		console.log(value)
	}
}
sumNumber(1,2,3)function