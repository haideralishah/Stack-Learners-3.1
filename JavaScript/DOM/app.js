/*

document.getElementById();

document.getElementsByTagName();

document.getElementsByClassName();

document.childNodes;


child.parentNode


parantNode.firstChild
parantNode.lastChild

.nextSibling
.previousSibling


nodeType 1  element
nodeType 3  text

nodeValue for text node

nodeName for elements name in capital



document.createElement();
document.createTextNode();
appendChild();




.hasAttribute()
.getAttribute()
.setAttribute()
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





















// document.childNodes[1].childNodes[2].childNodes[7].childNodes[2].nodeValue = '.';

// console.log(document.childNodes[1].childNodes[2].childNodes[7].childNodes[1].nodeName);
// document.childNodes[1].childNodes[2].childNodes[7].childNodes[1].innerHTML = 'this is emphesis'
// console.log(document.childNodes[1].childNodes[2].childNodes[7].childNodes);





























/*

    <p>
        This is
        <em>important</em>
        !
    </p>
*/

// var body = document.childNodes[1].childNodes[2];
// var p = document.createElement('p');

// var lastTextNode = document.createTextNode(' !');
// var firstTextNode = document.createTextNode('This is ');

// var em = document.createElement('em');
// var emTextNode = document.createTextNode('important');
// em.appendChild(emTextNode);


// p.appendChild(firstTextNode);
// p.appendChild(em);
// p.appendChild(lastTextNode);

// console.log(p)

// body.appendChild(p)































// var body = document.childNodes[1].childNodes[2];

// var h1 = document.createElement('h1');

// var hello = document.createTextNode('hello world!');

// h1.appendChild(hello);

// // console.log(h1, body)

// body.appendChild(h1);

// console.log(body.childNodes)


/*
1. h1 shopping card
2. create input form with add button
3. create empty ul
4. clicking on add button first check if input is filled or not
5. if not filled show message that field is empty
6. make li with text value of input and append that in UL.
*/




var item = document.getElementById('item');
var ul = document.childNodes[1].childNodes[2].childNodes[9]
var addButton = document.getElementById('add-btn');
var editItemNode;
function addItemToCart() {
    if (item.value === '') {
        console.log('Field is empty');
    }
    else {
        var li = document.createElement('li');
        var textNode = document.createTextNode(item.value);

        var button = document.createElement('button');
        var buttonTextNode = document.createTextNode("Delete");
        button.appendChild(buttonTextNode);
        button.setAttribute('onclick', 'deleteItem(this)')


        var buttonEdit = document.createElement('button');
        var buttonTextNodeEdit = document.createTextNode("Edit");
        buttonEdit.appendChild(buttonTextNodeEdit);
        buttonEdit.setAttribute('onclick', 'editItem(this)')


        li.appendChild(textNode);
        li.appendChild(button);
        li.appendChild(buttonEdit);

        ul.appendChild(li);
        item.value = '';
    }
}

function deleteItem(targetEl) {
    // console.log('delete is called', targetEl.parentNode.parentNode)
    var removeTarget = targetEl.parentNode;
    var parentUl = targetEl.parentNode.parentNode;
    parentUl.removeChild(removeTarget);
}

function editItem(targetEl) {
    console.log(targetEl.previousSibling.previousSibling.nodeValue);
    editItemNode = targetEl;
    item.value = targetEl.previousSibling.previousSibling.nodeValue;
    addButton.innerHTML = 'Save';
    addButton.setAttribute('onclick', 'saveItem()')

}

function saveItem() {
    console.log('hello editing', editItemNode);
    editItemNode.previousSibling.previousSibling.nodeValue = item.value;
    addButton.innerHTML = 'Add';
    addButton.setAttribute('onclick', 'addItemToCart()');
    item.value = '';
    editItemNode = undefined;
}






























// var h1 = document.childNodes[1].childNodes[2].childNodes[7];
// var h1ByID = document.getElementById('hello')




// var isID = h1.hasAttribute('id');
// var isClass = h1.hasAttribute('class');

// var titleValue = h1.getAttribute('title');
// var idValue = h1.getAttribute('id');
// console.log(h1, h1ByID)

// console.log(isID, isClass, titleValue, idValue);




// h1.setAttribute('title', 'We are learning attr.');
// h1.setAttribute('onclick', 'invokeFunc()');



































// var div1 = document.getElementById('div-1');
// var div2 = div1.childNodes[1];
// var firstP = div2.childNodes[1];



// console.log(firstP.nextSibling.nextSibling);
// console.log(div2.lastChild.previousSibling.previousSibling.previousSibling);


// console.log(div1.firstChild);

// console.log(div2.lastChild);
// console.log(div1.lastChild);















// var div1 = document.getElementById('div-1');
// var div2 = div1.childNodes[1];
// var firstP = div2.childNodes[1];


// var h1 = document.createElement('h1');
// var headingText = document.createTextNode("Hello DOM");

// h1.appendChild(headingText);


// div2.appendChild(h1);

// console.log(firstP.nextSibling.nextSibling.nextSibling.nextSibling)
// var targetNode = firstP.nextSibling.nextSibling.nextSibling.nextSibling

// div2.insertBefore(h1, targetNode);













// var specialPara = document.getElementById('special');

// console.log(specialPara.parentNode)



























// var div2 = document.getElementById('div-2');
// var specialPara = document.getElementById('special');

// div2.removeChild(specialPara);

