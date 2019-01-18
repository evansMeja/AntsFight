
$(document).ready(function(){
$(".topLink0").attr('href' , '../importants-document-conversion-sites.html');
$(".topLink1").attr('href' , '../downloads.html');
$(".topLink2").attr('href' , '../forums.html');
$(".topLink3").attr('href' , '../message');
 styleLinks();
});

var activeLink = '';

function styleLinks(){
    activeLink=document.getElementById("page_desc").value;
    if(activeLink=="p0"){ 
        styleLink("l0");
    }else if(activeLink=="p1"){
        styleLink("l1");
    }else if(activeLink=="p2"){
        styleLink("l2");
    }else if(activeLink=="p3"){
        styleLink("l3");
    }  
}

function styleLink(linkID){
$(linkID).removeClass("animateLink").addClass("currentPage");
$(linkID).html="active -> ";
}


(function(){
    $(activeLink).click(function(e){
        e.preventDefault();
        alert("The page is currently active");
    });
})();

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever') 
   $(this).find('.modal-title').text('New message to ' + recipient)
})
