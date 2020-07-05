// var filterText = document.getElementById('filterText');
// var listing = document.getElementById('listing');

// function filterList() {
//     var filter = filterText.value.toLowerCase();
//     var listingText = listing.childNodes;

//     for (var i = 0; i < listingText.length; i++) {

//         if (listingText[i].nodeType === 1) {

//             var oneListTest = listingText[i].innerHTML.toLowerCase();

//             if (oneListTest.indexOf(filter) != -1) {
//                 listingText[i].style.display = '';
//             }
//             else {
//                 listingText[i].style.display = 'none';
//             }

//         }
//     }
// }
















var listing = document.getElementById('container');

function filterSelection(category) {
    var listingNode = listing.childNodes;

    for (var i = 0; i < listingNode.length; i++) {
        if (listingNode[i].nodeType === 1) {
            var elClassName = listingNode[i].className;
            if (category === 'all') {
                listingNode[i].style.display = '';
            }
            else {
                if (elClassName.indexOf(category) != -1) {
                    listingNode[i].style.display = '';
                }
                else {
                    listingNode[i].style.display = 'none';
                }
            }
        }
    }
}