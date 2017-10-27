
    $('.selectall').click(function() {
    if ($(this).is(':checked')) {
        $('.all').attr('checked', true);
    } else {
        $('.all').attr('checked', false);
    }
});
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



function submit(){
//    console.log($(".paddingTopics").text());
    var checkedValue=[];
    for (var m = 1; m < 14 ; m++ ){
        if(typeof $('.messageCheckbox'+m+':checked').val()!=="undefined"){
//            console.log("chal gya");
     checkedValue.push($('.messageCheckbox'+m+':checked ').val()
                      );
//console.log(checkedValue);
        }
    }
    console.log(checkedValue);
    var valueName = $('#ngoName').val();
    var searchname = valueName.toLowerCase();
    var websiteLink = $('#websiteLink').val();
    var contactPeople = $('#contactPeople').val();
    var email = $('#email').val();
    
    var radioyes1 = document.getElementById('yes1').checked;
        var radiono1 = document.getElementById('no1').checked;
        var radioyes2 = document.getElementById('yes2').checked;
        var radiono2 = document.getElementById('no2').checked;
    var checked = $('#laptopScreen1,#laptopScreen2 ').find(':checked').length;
    var terms = document.getElementById('terms').checked;
    if ( valueName == 0 || websiteLink == 0 || contactPeople == 0 || email == 0 ){
        alert("Please fill the text")
    }   
    else if(radioyes1 == false && radiono1 == false || radioyes2 == false && radiono2 == false){
            alert("Please select atleast one option 1");
        }

    else if (checked == 0){
        alert("Please select atleast one option");
    }   
    else if(terms == false){
        alert("Please carefully read all the terms and conditions");
    }
    else{
        var obj = {};
        for(var i = 0 ; i <checkedValue.length; i++ ){
            obj[i]= checkedValue[i];
        }
        var rootRef = firebase.database().ref().child("NgoList").push();
    rootRef.set({mOrgname: valueName, mImage: "https://ak.picdn.net/assets/cms/97e1dd3f8a3ecb81356fe754a1a113f31b6dbfd4-stock-photo-photo-of-a-common-kingfisher-alcedo-atthis-adult-male-perched-on-a-lichen-covered-branch-107647640.jpg", mCategory:"testing",
                 mCategoryNew:obj,
                 mOrginfo: "This is also test",searchName:searchname}).then(function() {
    console.log('Synchronization succeeded');
        window.location.href = "signUp.html";
  })
  .catch(function(error) {
    console.log('Synchronization failed');
    });
        
        }
            
}

