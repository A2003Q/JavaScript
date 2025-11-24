let monthNumber = prompt("Enter a month number (1-12):");
monthNumber=Number(monthNumber);

switch(monthNumber){
    
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;

    case 6:
        console.log("June");
        break;

    case 7:
        console.log("July");
        break;


    case 8:
        console.log("Augast");
        break;

    case 9:
        console.log("Septemper");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("Novmber");
        break;

    case 12:
        console.log("December");
        break;

    default:
        console.log("Undefind");
       


}
   console.log("------------------------------------------------------------------")
let count=1;
for(let i=1;i<=4;i++){
    let row="";
   for(let j=1;j<=i;j++){
        row +=count + " ";
        count++;
   }
   console.log(row.trim());
}
 
   console.log("------------------------------------------------------------------")

   for(let i=13;i<=1000;i++){
    if(i%13==0)
        console.log(i);
   }

   console.log("------------------------------------------------------------------")

   function Multiplication2(num1,num2){
    let sum=0;
    for(let i=1;i<=num2;i++)
        sum+=num1;

    return sum;
   }

   console.log(Multiplication2(5,4));

   console.log("------------------------------------------------------------------")

   function tringleArea(base,height){
    return 0.5 *base*height;
   }

    console.log(tringleArea(5,4));

   console.log("------------------------------------------------------------------")
   
function hasAllDigits(num) {
    let str = String(num);           
    for (let digit = 0; digit <= 9; digit++) {
        if (!str.includes(digit)) {  
            return false;    
        }
    }
    return true;       
}

// Test
console.log(hasAllDigits(98140723568910)); 
console.log(hasAllDigits(12345));     

console.log("------------------------------------------------------------------")

let FavDrink = prompt("Enter Your Favorite Drink ?");


switch(FavDrink){
    
    case "Banana":
        console.log("30$");
        break;

    case "Orange":
        console.log("8$");
        break;

    case "Coffee":
        console.log("50$");
        break;

    default:
        console.log("Undefind");
}

console.log("------------------------------------------------------------------")

function FullName(name ,name2){
    let firstname=String(name);
    let lastname=String(name2);
    return firstname.concat(" "+lastname);
}
console.log(FullName("Aisha","Qarout"));