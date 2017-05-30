var superHeros = [];
superHeros = [1, 2, 3];
//superHeros.push(4);
//superHeros.push(1);
//superHeros.pop();
//superHeros.shift();
//superHeros.unshift(1);
console.log(superHeros);
var superWomen = [];
superWomen = ["Gud", "Luck", "Divya"];
for (var index in superWomen) {
    console.log(index);
}
for (var _i = 0, superWomen_1 = superWomen; _i < superWomen_1.length; _i++) {
    var value = superWomen_1[_i];
    console.log(value);
}
console.log("**********people Details***********");
var people = [];
people.push({ name: "Deepu", city: "blr" });
people.push({ name: "Deepu1", city: "blr" });
people.push({ name: "Deepu2", city: "blr" });
people.push({ name: "Deepu3", city: "blr" });
people.push({ name: "Deepu4", city: "blr" });
console.log(people);
/*for (var i=0,i<=people.length;i++){
    console.log(people[i])
}
*/
/*for (var i=0;i<=people.length-1;i++){
    console.log(people[i])
}*/
var sum = 123;
if (true) {
    var sum = 456;
}
/*function sample{
    var sum=345;
}
let newSum=567;
if(true){
    let newSum=678;
}
*/
/*sample()*/
console.log(sum);
