//functions executed immediately
setSearchBarVariable();
//setIdEventListener(elementLocation ,actionListener, payload);
setIdEventListener("submitSite" ,"click", bypassThisBlockedSite(acessValue("")));

//JQUERY DEPENDENT CODE IS HERE
//functions excecuted after the page loads
$(document).read(function(){
setIdEventListener("search1" ,"mousedown", showThisModal("machineLearningSearchEngine"));
setIdEventListener("demo" ,"click", submitThisDetailsFromEmailClient(["email","name","comment","website"]));
})();

function setSearchBarVariable(){
	var cx = '006471411703522520933:xii2ksrstcc';
	var gcse = document.createElement('script');
	gcse.type = 'text/javascript';
	gcse.async = true;
	gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gcse, s);
	setThisHTML('gsc-i-id1',"Placeholder",'search anywhere');
}  

//<script src="https://cse.google.com/cse.js?cx=006471411703522520933:xii2ksrstcc" type="text/javascript"></script>
	
//GLOBAL FUNCTIONS
function bypassBlockedSites(){
	var id;
	var msg;
	var starturl = "http://www.google.com/translate?langpair=ja|en&u=";
	var sitename = acessHTML(arguments[0]);
	var fullurl = "www."+sitename+".com" 
	var hackurl = starturl+fullurl;
	id = "results";
	msg = "ok";
	if(confirm("are you sure "+fullurl+" is blocked by your ISP?")){
		var win = window.open(hackurl, '_blank');
		win.focus();
	}
}

//modal master
function showThisModal(){
$("#"+arguments[0]).modal();
}
	
//set payload listeners
function setIdEventListener(elementLocation ,actionListener, payload){
document.getElementById(elementLocation).addEventListener(actionListener,payload);
}

//function to send form data to developers email address
function submitThisDetailsFromEmailClient(idFields){
	$.ajax({
		url: "https://formspree.io/evanslagat911@gmail.com",
		method: "POST",
		data:  getInnerHTMLValues(idFields),
		dataType: "json",
		success: function(response){
		if(response.status == "success"){
			alert(" submission sucessfull we will give you feedback as soon as possible");
		}else{
			alert(" submission failed please send error report to our beloved developers");
		}
		}
	}); 
     resetHTML(idFields);
}		
});

//function to implement html content getters and setters
var getThisHTML    = () =>  return document.getElementById(arguments[0]).arguments[1];
var setThisHTML    = () =>  document.getElementById(arguments[0]).arguments[2] = arguments[3];

//function to set the inner HTML of an elements to nothing
function resetHTML(fields) {
    for (var i=0; i < fields.length; i++) {
	setThisHTML(fields[i],"innerHTML",""); 
    }
}

//function to return the inner HTML of an elements in form of an array
function getInnerHTMLValues(fields) {
    valueBackPack=[];
    for (var i=0; i < fields.length; i++) {
	valueBackPack.push(getThisHTML(fields[i],'innerHTML')); 
    }
    return valueBackPack;
}
