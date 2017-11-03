 function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}   
//
//$('.selectall').click(function() {
//    if ($(this).is(':checked')) {
//        $('.all').attr('checked', true);
//    } else {
//        $('.all').attr('checked', false);
//    }
//});
//$('.selectmAll').click(function() {
//    if ($(this).is(':selected')) {
//        $('.mAll').attr('selected', true);
//    } else {
//        $('.mAll').attr('selected', false);
//    }
//});

//$("#mcategory15").is(':selected'){
//    
//}
var mq = window.matchMedia( "(max-width: 570px)" );
if (mq.matches) {
  $("#laptopScreen1").hide();
  $("#laptopScreen2").hide();
    // window width is at less than 500px
}
else {
  $("#mobileScreenOptions1").hide();
  $("#mobileScreenQuestion1").hide();
  $("#mobileScreenQuestion2").hide();
  $("#mobileScreenOptions2").hide();
    // window width is greater than 500px
}
 $(".messageCheckbox14").hide();

$('.messageCheckbox13').click(function() {
    if ($(this).is(':checked')) {
        $(".messageCheckbox14").fadeIn();
    }
    else{
       $(".messageCheckbox14").fadeOut(); 
    }
});

$("#background").hide();

function submit(){
   
//    console.log($(".paddingTopics").text());
    var checkedValue=[];
    var checkedValueState =[];
    for (var m = 1; m < 13 ; m++ ){
        if(typeof $('.messageCheckbox'+m+':checked').val()!=="undefined"){
//            console.log("chal gya");
     checkedValue.push($('.messageCheckbox'+m+':checked ').val()
                      );
//console.log(checkedValue);
        }
    }
    
    if ($('.messageCheckbox13').is(':checked')) {
        checkedValue.push($(".messageCheckbox14").val());
//        console.log("hero" +checkedValue);
    }
  
    
    for(var i = 0 ; i < 15 ; i ++ ){
        if(typeof $('#mcategory'+i+':selected').val()!=="undefined"){
           checkedValue.push($('#mcategory'+i+':selected ').val()
                      ); 
//            console.log(checkedValue);
        }
    }
    
   
    var category = {};
     for(var i = 0 ; i <checkedValue.length; i++ ){
            category[i]= checkedValue[i];
        }
    for (var n = 1; n < 35 ; n++ ){
        if(typeof $('#checkbox'+n+':checked').val()!=="undefined"){
//            console.log("chal gya");
     checkedValueState.push($('#checkbox'+n+':checked ').val()
                      );
//console.log(checkedValueState);
        }
    }

    for(var i = 0 ; i < 34 ; i ++ ){
        if(typeof $('#mstate'+i+':selected').val()!=="undefined"){
           checkedValueState.push($('#mstate'+i+':selected ').val()
                      ); 
//            console.log(checkedValueState);
        }
    }
   
        var state = {};
        for(var j = 0 ; j < checkedValueState.length ; j++){
            state[j] = checkedValueState[j];
        }
//    console.log(checkedValue);
    var valueName = $('#ngoName').val();
    var searchname = valueName.toLowerCase();
    var websiteLink = $('#websiteLink').val();
    var contactPeople = $('#contactPeople').val();
    var email = $('#email').val();
    
    
//    var radioyes1 = document.getElementById('yes1').checked;
//        var radiono1 = document.getElementById('no1').checked;
//        var radioyes2 = document.getElementById('yes2').checked;
//        var radiono2 = document.getElementById('no2').checked;
    var checked = $('#laptopScreen1,#laptopScreen2 ').find(':checked').length;
    var checkedMobile = $("#exampleFormControlSelect2,#exampleFormControlSelect1").find(":selected").length;
//    console.log(checkedMobile);
    var terms = document.getElementById('terms').checked;
    if ( valueName == 0 || websiteLink == 0 || contactPeople == 0 || email == 0 ){
        alert("Please fill the text");
    }
    else if (!validateEmail(email)){
        alert("Please enter a valid email address! ");
    }
    else if(radioyes1 == false && radiono1 == false || radioyes2 == false && radiono2 == false){
            alert("Please select atleast one option 1");
        }

    else if (checked == 0 && checkedMobile == 0){
        alert("Please select atleast one option");
    }   
    else if(terms == false){
        alert("Please carefully read all the terms and conditions");
    }
    else{
         $("#form").fadeOut(function(){
       $("#background").fadeIn(); 
    });
        
        
        }
            
}


function signUp(){
    var rootRefForm = firebase.database().ref().child("NgoList").push();
    rootRef.set({mOrgname: valueName, mImage: "https://ak.picdn.net/assets/cms/97e1dd3f8a3ecb81356fe754a1a113f31b6dbfd4-stock-photo-photo-of-a-common-kingfisher-alcedo-atthis-adult-male-perched-on-a-lichen-covered-branch-107647640.jpg", mCategory:"testing",mState:state,
                 mCategoryNew:category,
                 mOrginfo: "This is also test",searchName:searchname}).then(function() {
    console.log('Synchronization succeeded');
//        window.location.href = "signUp.html";
  })
  .catch(function(error) {
    console.log('Synchronization failed');
    });
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
 

