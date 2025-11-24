function tellFortune(num,name,location,job){
let children=String(num);
let parent=String(name);
let loc=String(location);
let jobtitle=String(job);
let s="You will be a ";
let r="and married to";

    return  s.concat(jobtitle+" in "+loc+","+r+" "+name+" with "+num+" Kids .");
}

console.log(tellFortune("2","Aisha","Amman","Programmer"));

console.log("------------------------------------------------------------------")

function doggyAge(puppyAge){
    let doggyAge=puppyAge * 7;
    return "Your Doggie is "+doggyAge+" years old in dog years!";
}
console.log(doggyAge(3));