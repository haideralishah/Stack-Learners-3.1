
// for(var i = 0; i < 5; i++){
//     console.log('hello loops', i);
// }


// var count = +prompt('how many times you want hello world to be printed?');

// for (var i = 0; i < count; i++) {
//     console.log('Hello Word', i);
// }





// var countStart = +prompt('where counting will start from?');
// var countEnd = +prompt('where counting will end?');
// var iLapse = +prompt('how many lapse you want in each iteration'); // 5

// for(var i = countStart; i <= countEnd; i = i + iLapse){
//     console.log(i);
// }



















// var fruits = ['apple', 'banana', 'pineapple', 'mango', 'orange','Grapes'];
// var fruitsLength = fruits.length;

// for(var i=0; i < fruitsLength; i++){
//     console.log(fruits[i] + ' shake');
// }






























// var cleanestCities = ["Karachi", "Lahore", "Quetta", "Peshawar", "Islamabad"];
// var cityToCheck = prompt('where do you live?');


// var cityIndex = cleanestCities.indexOf(cityToCheck);

// if(cityIndex >= 0){
//     console.log('you live in a clean city')
// }
// else{
//     console.log('you dont live in clean city');
// }




































// var cleanestCities = ["Karachi", "Lahore", "Quetta", "Peshawar", "Islamabad"];
// var cleanestCitiesLength = cleanestCities.length;
// var cityToCheck = prompt('where do you live?');
// var isCleanCity = false;

// for (var i = 0; i < cleanestCitiesLength; i++) {
//     console.log(i);
//     if (cityToCheck === cleanestCities[i]) {
//         isCleanCity = true;
//         break;
//     }
// }

// if (isCleanCity) {
//     console.log('you live in a clean city')
// }
// else {
//     console.log('you dont live in a clean city')
// }









































var firstName = ['Aslam', 'Akram', 'Abdullah', 'Imran', 'Shoukat'];
var lastName = ['Khan', 'Ansari', 'Yousufzai', 'Shah', 'Naqvi'];

var firstNameLength = firstName.length;
var lastNameLength = lastName.length;

for (var i = 0; i < firstNameLength; i++) {
    for (var j = 0; j < lastNameLength; j++) {

        console.log(firstName[i], lastName[j]);

    }
}


