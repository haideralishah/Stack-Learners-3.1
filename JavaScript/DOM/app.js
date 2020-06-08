/*
document.getElementById();

document.getElementsByTagName();

document.getElementsByClassName();

document.childNodes;
*/





// var secondLastP = document.getElementById('second-last');

// console.log(secondLastP)

// secondLastP.innerHTML = 'short text'




// var allParagraphs = document.getElementsByTagName('p');

// console.log(allParagraphs);


// console.log(allParagraphs[5].id);

// for (var i = 0; i < allParagraphs.length; i++) {
//     // console.log(allParagraphs[i]);
//     // var paraInput = prompt('what do you want to show in this para?');

//     allParagraphs[i].innerHTML = 'This is ' + i + " paragraph."


//     // allParagraphs[i].innerHTML = paraInput;
// }











// var divEl = document.getElementById('other-para');

// var allParagraphsInDiv = divEl.getElementsByTagName('p');

// console.log(allParagraphsInDiv);

// allParagraphsInDiv[1].style.backgroundColor = 'grey';
// allParagraphsInDiv[1].style.color = 'yellow';
// allParagraphsInDiv[1].innerHTML = 'A quick brown fox jumps over the lazy dog.'









// var specialEl = document.getElementsByClassName('special');

// console.log(specialEl);

// specialEl[0].innerHTML = 'hello DOM'














// console.log(document.childNodes[1].childNodes[2].childNodes[3].childNodes[2]);

// console.log(document.childNodes[1].childNodes[2].childNodes[3].childNodes[1].childNodes[0]);







// var div1 = document.getElementById('div-1');
// var div2 = div1.childNodes[1].childNodes;
// console.log(div2)
// var pCounter = 0;
// for (var i = 0; i < div2.length; i++) {
//     // to changing all para

//     // if (div2[i].nodeType == 1) {
//     //     div2[i].innerHTML = 'new text ' + i;
//     // }



//     // to changing second para
//     if (div2[i].nodeType == 1) {
//         pCounter++;

//     }
//     if (pCounter == 2) {
//         div2[i].innerHTML = 'only second para is changed.'
//         break;
//     }

// }


// console.log(div1.childNodes[1].childNodes)

// console.log(div1.childNodes[1].childNodes[3])

// div1.childNodes[1].childNodes[3].innerHTML =  'New Text'











// var div1 = document.childNodes[1].childNodes[2].childNodes[5];

// console.log(div1.childNodes[0].nodeType)

// console.log(div1.nodeType)





















document.childNodes[1].childNodes[2].childNodes[7].childNodes[2].nodeValue = '.';

// console.log(document.childNodes[1].childNodes[2].childNodes[7].childNodes[1].nodeName);


console.log(document.childNodes[1].childNodes[2].childNodes[7].childNodes);