var cx = '006471411703522520933:xii2ksrstcc';
var gcse = document.createElement('script');
gcse.type = 'text/javascript';
gcse.async = true;
gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(gcse, s);

document.getElementById("everythingIsSet").addEventListener("click",function () {
alert("We are working on it  currently please hold");
 sendMail();
});

function sendMail(){
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'baf944f4342495b15705b39f27c0da26-us18',
      'message': {
        'from_email': 'evanslagat911@gmail.com',
        'to': [
          {
            'email': 'evanslagat910@gmail.com',
            'name': 'Tricky Programmer',
            'type': 'to'
          }
        ],
        'subject': 'title',
        'html': 'html can be used'
      }
    }
  });
}
