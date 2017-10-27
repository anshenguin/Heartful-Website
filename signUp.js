
function signUp(){
var email=document.getElementById("formEmail").value;
//    window.alert(email);
  //  window.location.href ="signin.html" ;
    var password=document.getElementById("formPassword").value;
//    console.log(email);
//    console.log(password);
firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
//    var user = result.user;
    var rootRef = firebase.database().ref().child("Users").child(firebase.auth().currentUser.uid);
    var can_post = true;
    var userName ="";
    var imageLink="";
    rootRef.set({canPost: can_post, profilePicLink: imageLink, userName: userName}).then(function() {
    console.log('Synchronization succeeded');
        window.location.href = "heartful.html";
  })
  .catch(function(error) {
    console.log('Synchronization failed');
    });
   
//  });
    
}).catch(function(error) {
  // Handle Errors here.
    console.log('test');
  var errorCode = error.code;
  var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
    alert(errorMessage);
    }
        if (errorCode == 'auth/email-already-in-use') {
    alert(errorMessage);
        }
            if (errorCode == 'auth/invalid-email') {
    alert(errorMessage);
            }
                if (errorCode == 'auth/operation-not-allowed') {
    alert(errorMessage);
                }
  // ...
});
 
    
}
 