
$(document).ready(function(){
alert("taking care of javascript bullshit");
$(".topLink0").attr('href' , 'home.html');
$(".topLink1").attr('href' , './');
$(".topLink2").attr('href' , './');
$(".topLink3").attr('href' , './');
alert("converted all the links");
});

var canDisplayPopUpText=false;
var message="";
var activeLink="";
var activeSeeAlsoId="";
(function(){
    var pageId=document.getElementById("page_desc").value;
    if(pageId=="file_boot_configuration_page"){ 
        activeLink="#m2";
        activeSeeAlsoId="s2";
        setDialogMessage();
        canDisplayPopUpText=true;
    }else if(pageId=="xassembly_stack_instruction_page"){
      activeLink="#m3";
      activeSeeAlsoId="s3";
      setDialogMessage();  
      canDisplayPopUpText=true; 
    }else if(pageId=="xinitrc_instruction_page"){
      activeLink="#m1";
      activeSeeAlsoId="s1";
      setDialogMessage(); 
      canDisplayPopUpText=true;
    }else if(pageId=="concept_of_multiplexers_configuration_page"){
      activeLink="#m4";
      activeSeeAlsoId="s4";
      setDialogMessage(); 
      canDisplayPopUpText=true;
    }  
    displayPopUp();
})();


function setDialogMessage(){
$(activeLink).removeClass("animateLink").addClass("currentPage");
document.getElementById(activeSeeAlsoId).innerHTML="active -> ";
}

function displayPopUp(){
  if(canDisplayPopUpText){
}  
}

(function(){
    $(activeLink).click(function(e){
        e.preventDefault();
        alert("The page is currently active");
    });
})();

function makeThisLinkActive(elem){
    alert(document.getElementById(elem).innerHTML);
}

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
})
