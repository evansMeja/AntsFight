var CLOUDINARY_URL= ' https://api.cloudinary.com/v1_1/decc6gd2d/upload';
var CLOUDINARY_UPOAD_PRESET= 'aj1oabrg';


var imgPreview=document.getElementById('img-preview');
var fileUpload=document.getElementById('file-upload');


fileUpload.addEventListener('change',function(event){
var file = event.target.files[0];
var formData=new FormData();
formData.append('file',file);
formData.append('upload_preset',CLOUDINARY_UPOAD_PRESET);

axios({
url: CLOUDINARY_URL,
method: 'POST',
headers:{
'Content-Type':'application/x-www-form-urlencoded'
},
data:formData
}).then(function(res){
console.log(res);
imgPreview.src= res.data.secure_url;
}).catch(function(err){
console.log(err);
});

});
