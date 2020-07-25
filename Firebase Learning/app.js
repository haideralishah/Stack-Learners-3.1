var emailEl = document.getElementById('email');
var passwordEl = document.getElementById('password');
var auth = firebase.auth();
var db = firebase.firestore();
var storage = firebase.storage();

function signupUser() {
    auth.createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
        .then(function (success) {
            console.log(success, 'user registerd successfully.');
            redirectToHome();
        })
        .catch(function (error) {
            console.log(error);
        });
}


function signin() {
    auth.signInWithEmailAndPassword(emailEl.value, passwordEl.value)
        .then(function (user) {
            console.log('user', user.user.uid);
            redirectToHome();
        })
        .catch(function (error) {
            console.log('error', error);
        })
}


function redirectToHome() {
    localStorage.setItem('userInfo', JSON.stringify(auth.currentUser));
    window.location.href = './home.html';
}


var todo = document.getElementById('todo-item');
var fileInput = document.getElementById('file-item');

function addTodoItem() {
    var imageFile = fileInput.files[0];
    // console.log(fileInput.files[0]);
    if (imageFile && todo.value) {
        var imagesRef = storage.ref().child('images/' + fileInput.files[0].name);
        var uploadTask = imagesRef.put(imageFile);
        uploadTask.snapshot.ref.getDownloadURL()
            .then(function (url) {
                console.log('URL => ', url);                
                db.collection("todo").add({
                    todo: todo.value,
                    uid: auth.currentUser.uid,
                    todoImage: url
                })
                    .then(function (docRef) {
                        console.log("Document written with ID: ", docRef.id);
                        todo.value = '';
                    })
                    .catch(function (error) {
                        console.error("Error adding document: ", error);
                    });
            })
    }
    else {
        alert('Image and Todo text both are required.');
    }

    // db.collection("todo").add({
    //     todo: todo.value,
    //     uid: auth.currentUser.uid
    // })
    //     .then(function (docRef) {
    //         console.log("Document written with ID: ", docRef.id);
    //         todo.value = '';
    //     })
    //     .catch(function (error) {
    //         console.error("Error adding document: ", error);
    //     });

}


// function getAllTodos() {
//     db.collection("todo").get()
//         .then((querySnapshot) => {            
//             querySnapshot.forEach((doc) => {
//                 console.log(doc.id, doc.data());
//             });
//         });
// }

// saveWithCustomeDocID();
// function saveWithCustomeDocID(){
//     db.collection('students').doc('javascript').set({
//         studentName:'haider',
//         roll: 2643,
//         subject:'JS'
//     })
// }



// function getCurrentUserTodos() {
//     var uid = JSON.parse(localStorage.getItem('userInfo')).uid;

//     db.collection("todo").where("uid", "==", uid)
//         .get()
//         .then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//                 console.log(doc.id, doc.data());
//             });
//         });
// }










var unsubscribe;

function getUserTodosRealtime() {
    var uid = JSON.parse(localStorage.getItem('userInfo')).uid;
    unsubscribe = db.collection("todo").where("uid", "==", uid)
        .onSnapshot(function (snapshot) {
            snapshot.docChanges().forEach(function (change) {
                if (change.type === "added") {
                    // console.log("New todo: ", change.doc.data());

                    makeListing(change.doc);

                }
                if (change.type === "modified") {

                    console.log("Modified todo: ", change.doc.id, change.doc.data());
                    updateFromDOM(change.doc);
                }
                if (change.type === "removed") {

                    // console.log("Removed todo: ", change.doc.id, change.doc.data());
                    deleteFromDOM(change.doc.id);
                }
            });
        })
}

var divListing = document.getElementById('listing');
function makeListing(todoItem) {
    var todoObject = todoItem.data();
    todoObject.id = todoItem.id
    console.log(todoObject, ' todoItem');
    var p = document.createElement('p');
    var paraText = document.createTextNode(todoObject.todo);
    p.setAttribute('id', todoObject.id)
    p.appendChild(paraText);
    var editBtn = document.createElement('button');
    var editTextNode = document.createTextNode('edit');
    editBtn.appendChild(editTextNode);
    editBtn.setAttribute('onclick', 'editItem(this)');

    var imgEl = document.createElement('img');
    imgEl.setAttribute('src', todoObject.todoImage)
    imgEl.setAttribute('width',"50");
    imgEl.setAttribute('height',"50");
    p.appendChild(imgEl);

    var deleteBtn = document.createElement('button');
    var deleteTextNode = document.createTextNode('delete');
    deleteBtn.appendChild(deleteTextNode);
    deleteBtn.setAttribute('onclick', 'deleteTodo(this)')
    p.appendChild(editBtn);
    p.appendChild(deleteBtn);
    divListing.appendChild(p);
}

function deleteTodo(itemToDelete) {
    console.log('item delete', itemToDelete.parentNode.id)
    var docId = itemToDelete.parentNode.id;
    db.collection("todo").doc(docId).delete()
        .then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });

}


function deleteFromDOM(id) {
    var itemToDelete = document.getElementById(id);
    divListing.removeChild(itemToDelete);
}

function updateFromDOM(doc) {
    var domUpdateLi = document.getElementById(doc.id);
    // console.log(domUpdateLi.childNodes[0].nodeValue);
    domUpdateLi.childNodes[0].nodeValue = doc.data().todo;
}

var todoBtn = document.getElementById('todo-btn');
var editKey;

function editItem(editTodo) {
    // console.log(editTodo.parentNode.childNodes[0].nodeValue);
    editKey = editTodo.parentNode.id;
    todo.value = editTodo.parentNode.childNodes[0].nodeValue
    todoBtn.innerHTML = 'Save Todo';

    todoBtn.setAttribute('onclick', 'updateTodo()');

}

function updateTodo() {
    console.log('****');
    db.collection("todo").doc(editKey).update({
        todo: todo.value
    })
        .then(function () {
            todoBtn.innerHTML = 'Add Todo';
            todoBtn.setAttribute('onclick', 'addTodoItem()');
            todo.value = '';
            editKey = undefined;

        })
}




function logoutUser() {
    unsubscribe();
    auth.signOut()
        .then(function () {
            localStorage.clear();
            window.location.href = './index.html';

        })
}



