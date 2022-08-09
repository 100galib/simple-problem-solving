// Practice Problem 1
const herryMomGive = 1000;
const priceOfApple = 300;
const priceOfOranges = 400;

function calculationOfThePrice (haveHarry, applePrice, orangePrice){
    const totalPriceOfTheItem = applePrice + orangePrice;
    const shopKeeperWillGive = haveHarry - totalPriceOfTheItem;
    return shopKeeperWillGive;
}

const totalGetMoney = calculationOfThePrice(herryMomGive, priceOfApple, priceOfOranges);
// console.log(totalGetMoney);

// Practice Problem 2

const math = 88;
const biology = 78;
const chemistry = 85;
const physics = 77;
const bangla = 82;

function averageMarks(ma, bio, che, phy, ban){
    const totalMarks = ma + bio + che + phy + ban;
    const getAverageMarks = totalMarks / 5;
    
    return getAverageMarks;
}

const showAverageMarks = averageMarks(math, biology, chemistry, physics, bangla);

// console.log(showAverageMarks);

// Practice Problem 3

const str1 = 'I am goin to be ';
const str2 = 'an awesome web developer';

function concatString (st1, st2){
    const addAllString = st1 + st2;

    return addAllString;
}

const showconCateString = concatString(str1, str2);

// console.log(showconCateString)

// Practice problem 4

function reminderFuntion(){
    const sarahMotherGive = 119;
    const divitionNumber = 5;
    
    const calculation = 119 % 5;

    return calculation;
}

const getresult = reminderFuntion();
// console.log(getresult);

// Practice problem 5

var price = 33;
var name = 'Shabana';
var boxName = 'Cocola';
var price_88 = 34;
var enoom = Math.abs(-1);
var box78 = 'Monika';
var home_address = 'Kochu Khet';

// Practice problem 6

var fruits = ['Apple', 'Banana', 'Orange'];

function arrayFruits (frutsArray) {
    var indexOfBanana = frutsArray.indexOf('Banana');
    // console.log(indexOfBanana);
    frutsArray[1] = 'Mango';
    // console.log(frutsArray);
    frutsArray.pop();
    // console.log(frutsArray);
    frutsArray.push('Water Melon');
    // console.log(frutsArray);
}

arrayFruits(fruits);

// Practice problem 7

// var myScore = 80;
// var tomScore = 66;
// var janesScore = 95;
// var PetersScore = 56;
// var johnsScore = 40;

// function getEveryScore (person1, person2, person3, person4, person5) {
//     if(person1 > 80){
//         console.log('I get A');
//     } else if( person1 > 60){
//         console.log('I get B');
//     } else if( person1 > 50){
//         console.log('I get C');
//     } else if( person1 > 40){
//         console.log('I get D');
//     } else if(person1 <= 39){
//         console.log('I failed The Exam');
//     }

//     if(person2 > 80){
//         console.log('Tom get A');
//     } else if( person2 > 60){
//         console.log('Tom get B');
//     } else if( person2 > 50){
//         console.log('Tom get C');
//     } else if( person2 > 40){
//         console.log('Tom get D');
//     } else if(person2 <= 39){
//         console.log('Tom failed The Exam');
//     }

//     if(person3 > 80){
//         console.log('Janes get A');
//     } else if( person3 > 60){
//         console.log('Janes get B');
//     } else if( person3 > 50){
//         console.log('Janes get C');
//     } else if( person3 > 40){
//         console.log('Janes get D');
//     } else if(person3 <= 39){
//         console.log('Janes failed The Exam');
//     }

//     if(person4 > 80){
//         console.log('Peter get A');
//     } else if( person4 > 60){
//         console.log('Peter get B');
//     } else if( person4 > 50){
//         console.log('Peter get C');
//     } else if( person4 > 40){
//         console.log('Peter get D');
//     } else if(person4 <= 39){
//         console.log('Peter failed The Exam');
//     }

//     if(person5 > 80){
//         console.log('Johns get A');
//     } else if( person5 > 60){
//         console.log('Johns get B');
//     } else if( person5 > 50){
//         console.log('Johns get C');
//     } else if( person5 > 40){
//         console.log('Johns get D');
//     } else if(person5 <= 39){
//         console.log('Johns failed The Exam');
//     }
// }

// getEveryScore(myScore, tomScore, janesScore, PetersScore, johnsScore);

// Practice problem 8

var number1 = 13;
var number2 = 79;
var number3 = 45;
let largerNumber = 0;

if(number1 > number2 && number1 > number3){
    largerNumber = number1;
} else if (number2 > number1 && number2 > number3){
    largerNumber = number2;
} else {
    largerNumber = number3;
}

// console.log(largerNumber);

// Practice problem 9

const angle1 = 9;
const angle2 = 8;
const angle3 = 9;

if(angle1 === angle2 || angle2 === angle3 || angle3 === angle1){
    // console.log('triangle is Isosceles');
}

// Practice problem 10

// var aliaScore = 95;
// var daliaScore = 66;
// var saliaScore = 80;
// var maliaScore = 59;
// var liliaScore = 47;
// var jaliaScore = 77;

// function getEveryOneScore (person1, person2, person3, person4, person5, person6) {
//     if(person1 > 90){
//         console.log('Alia get A+');
//     } else if( person1 > 80 && person1 < 90 ){
//         console.log('Alia get A');
//     } else if( person1 > 70 && person1 < 80 ){
//         console.log('Alia get B');
//     } else if( person1 > 60 && person1 < 70 ){
//         console.log('Alia get C');
//     } else if( person1 > 50 && person1 < 60 ){
//         console.log('Alia get D');
//     } else if(person1 < 50){
//         console.log('Alia get F');
//     }

//     if(person2 > 90){
//         console.log('Dalia get A+');
//     } else if( person2 > 80 && person2 < 90 ){
//         console.log('Dalia get A');
//     } else if( person2 > 70 && person2 < 80 ){
//         console.log('Dalia get B');
//     } else if( person2 > 60 && person2 < 70 ){
//         console.log('Dalia get C');
//     } else if( person2 > 50 && person2 < 60 ){
//         console.log('Dalia get D');
//     } else if(person2 < 50){
//         console.log('Dalia get F');
//     }

//     if(person3 > 90){
//         console.log('Salia get A+');
//     } else if( person3 > 80 && person3 < 90 ){
//         console.log('Salia get A');
//     } else if( person3 > 70 && person3 < 80 ){
//         console.log('Salia get B');
//     } else if( person3 > 60 && person3 < 70 ){
//         console.log('Salia get C');
//     } else if( person3 > 50 && person3 < 60 ){
//         console.log('Salia get D');
//     } else if(person3 < 50){
//         console.log('Salia get F');
//     }

//     if(person4 > 90){
//         console.log('Malia get A+');
//     } else if( person4 > 80 && person4 < 90 ){
//         console.log('Malia get A');
//     } else if( person4 > 70 && person4 < 80 ){
//         console.log('Malia get B');
//     } else if( person4 > 60 && person4 < 70 ){
//         console.log('Malia get C');
//     } else if( person4 > 50 && person4 < 60 ){
//         console.log('Malia get D');
//     } else if(person4 < 50){
//         console.log('Malia get F');
//     }

//     if(person5 > 90){
//         console.log('Lalia get A+');
//     } else if( person5 > 80 && person5 < 90 ){
//         console.log('Lalia get A');
//     } else if( person5 > 70 && person5 < 80 ){
//         console.log('Lalia get B');
//     } else if( person5 > 60 && person5 < 70 ){
//         console.log('Lalia get C');
//     } else if( person5 > 50 && person5 < 60 ){
//         console.log('Lalia get D');
//     } else if(person5 < 50){
//         console.log('Lalia get F');
//     }

//     if(person6 > 90){
//         console.log('Jalia get A+');
//     } else if( person6 > 80 && person6 < 90 ){
//         console.log('Jalia get A');
//     } else if( person6 > 70 && person6 < 80 ){
//         console.log('Jalia get B');
//     } else if( person6 > 60 && person6 < 70 ){
//         console.log('Jalia get C');
//     } else if( person6 > 50 && person6 < 60 ){
//         console.log('Jalia get D');
//     } else if(person6 < 50){
//         console.log('Jalia get F');
//     }
// }

// getEveryOneScore(aliaScore, daliaScore, saliaScore, maliaScore, liliaScore, jaliaScore);

// Practice problem 11

// var signal = 'red'; // this variable can also be yellow or green.

// function rodSignal(signal){
//     switch (signal){
//         case 'green':
//             console.log('You can cross the road');
//             break;
//         case 'Yellow':
//             console.log('You may stop');
//             break;
//         case 'red':
//             console.log('Danger Ahed');
//             break;
//         default :
//             console.log('see the signal');
//             break;
//     }
// }

// rodSignal(signal);

// Practice Problem 12

var support = ['At 8pm unlock the module', 'Swiftly see the vedio', 'Take notes at the time of seeing vedion', 'After compliting the module practice by yourself', 'When you dont understand join with the support session', ''];

for (var i = 0; i < 10; i++){
    for( var j = 0; j < support.length; j++){
       var showresult = support[j];
    //    console.log('#', showresult);
    }
}

// Practice Problem 13

var routine = ['At 8pm unlock the module', 'Swiftly see the vedio', 'Take notes at the time of seeing vedion', 'After compliting the module practice by yourself', 'When you dont understand join with the support session', ''];
var i = 0;
while(i < 10){
    var j = 0;
    while(j<routine.length){
        var showRoutine = routine[j];
        // console.log('$', showRoutine);
        j++;
    }
    i++;
}

// Practice Problem 14

var routine = ['At 8pm unlock the module', 'Swiftly see the vedio', 'Take notes at the time of seeing vedion', 'After compliting the module practice by yourself', 'When you dont understand join with the support session', ''];
var i = 0;
while(i < 10){
    var j = routine.length -1;
    while(j >= 0){
        var showRoutine1 = routine[j];
        // console.log('$', showRoutine1);
        j--;
    }
    i++;
}

// Practice Problem 15

var support = ['At 8pm unlock the module', 'Swiftly see the vedio', 'Take notes at the time of seeing vedion', 'After compliting the module practice by yourself', 'When you dont understand join with the support session', ''];

for (var i = 0; i < 10; i++){
    for( var j = support.length -1; j >= 0; j--){
       var showresult1 = support[j];
    //    console.log('#', showresult1);
    }
}

// Practice Problem 16;

// var computerPrice = 15000;

// function getComputer(comPrice){
//     if(comPrice > 80000){
//         console.log('I will Buy Mac');
//     } else if(comPrice > 60000){
//         console.log('I will buy Gaming Laptop');
//     } else if(comPrice > 40000){
//         console.log('I will buy lenevo youga');
//     } else if(comPrice > 20000){
//         console.log('I will buy old laptop');
//     } else {
//         console.log('I will go with the mobile');
//     }
// }

// getComputer(computerPrice);

// Practice Problem 17

for(var i = 1; i <= 39; i++){
    // console.log('Today i am not feeling well');
}

// Practice Problem 18

for(var i = 581; i <= 623; i+=2){
    // console.log(i);
}

// Practice Problem 22

const whatILearn = ['HTMl', 'CSS', 'Javascript', 'BootStarp', 'Tailwind', 'Git & Github'];

for(var i = 0; i < whatILearn.length; i++){
    var showlearnArray = whatILearn[i];
    // console.log(showlearnArray);
}

// Practice Problem 23

var useMobile = ['Nokia 1600', 'Chinese Lowed', 'Chinese Touchscreen', 'Walton Premio F12', 'Nokia', 'Walton E13', 'Samphony D12', 'Xhawmi Note Pro 7', 'Walton Button', 'Samsung'];

var i = 0;
while(i < useMobile.length){
    var showModel = useMobile[i];
    // console.log(showModel);
    i++;
}

// Pracitce Problem 24

for(let i = 30; i <= 86; i++){
    // console.log(i);
    if(i === 44){
        break;
    }
}

// Practice Problem 25

const bookArray = [150, 180, 140, 220, 230, 150, 400, 310, 180, 140];

for(let i = 0; i < bookArray.length; i++){
    const printArray = bookArray[i];
    if(printArray > 200){
        continue;
    }
    // console.log(printArray);
}

// Practice Problem 26

// function foo(){
//     console.log('foo');
//     function bar(){
//         console.log('bar');
//     }
//     bar();
// }

// foo();

//Practice Problem 27

let firstNumber = 16;
let secondNumber = 30;
let thirdNumber = 26;

function make_avg(num1, num2, num3){
    const totalNumber = num1 + num2 + num3;
    const getAverage = totalNumber / 3;
    // console.log(getAverage);
}

make_avg(firstNumber, secondNumber, thirdNumber);

//Practice Problem 28

const averageArray = [10, 20, 30, 80, 50, 100];
function make_average (aray){
    let getAverageNumber = 0;
    for(let i = 0; i < aray.length; i++){
        getAverageNumber += averageArray[i]
    }
    let finalAverage = getAverageNumber / averageArray.length;
    // console.log(finalAverage);
}

make_average(averageArray);

// Practice Problem 29

function odd_even(number){
    if(number % 2 === 0){
        var massage = 'This is Even number'
       return massage;
    } else{
        var massage1 = 'This is ood number'
        return massage1;
    }
}

const giveEvenOdd = odd_even(4)

// console.log(giveEvenOdd);

// function even_odd(number){
//     if(number % 2 === 0){
//        return console.log('This even Number');
//     } else{
//         return console.log('This is Odd Number')
//     }
// }

// even_odd(13)

// Practice Problem 30 (already Solved)

// Practice Problem 31


function muliplicationFunction () {
    let muliPli = 0;
    for(let i = 1; i <= 10; i++){
        muliPli =13*i;
        // console.log('13 ' + 'X ' + i + ' =', muliPli );
    }
}

muliplicationFunction();

// Practice Problem 32

let upperName = "Ahamme Fahim Galib";

function toLowerCase(giveUpper){
    const giverLowerCase = giveUpper.toLowerCase();
    // console.log(giverLowerCase);
}

toLowerCase(upperName);

// Practice Problem 33;
let firstName = "Ahammed Fahim ";
let lastName = "Galib";

function fullName(fiName, laName){
    const giveFullName = fiName + laName;
    // console.log(giveFullName);
}

fullName(firstName, lastName);

//  Practice Problem 34

function scuireNumber(num22){
    const squireNumber = Math.pow(num22, num22);
    // console.log(squireNumber);
}

scuireNumber(6);

// Practice Problem 35

function hourToMinute(hour){
    const hourDisplay = hour + ' Hours is converted to :';
    console.log(hourDisplay);
    const converted = hour * 60;

    console.log("The Hours converted into-"+ converted + " Minutes");
}

hourToMinute(3)