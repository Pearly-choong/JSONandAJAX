console.log('json & ajax');

$(document).ready(function(){

//accessing key from json file
var myKey = JSON.parse(apiKey);
console.log(myKey[0]);
myKey = myKey[0].key;


var endPoint;
var size;

//reading users choice
document.getElementById('submit').addEventListener('click', function(){
endPoint = document.getElementById('endpoints').value;
size = document.getElementById('sizes').value;
console.log(endPoint, size);
displayData(endPoint, size);
});
//
//
// });

function displayData(ep, si){
  console.log(ep, si);


//ajax method
$.ajax({
  // url:'https://api.unsplash.com/search/collections?page=1&query=office&client_id=bb780e16ef58132ea59a6beae18cf0f0917c20802cd4def27699e9939eb3b1b1',
  url:`https://api.unsplash.com/${ep}/?client_id=${myKey}`,
  type: 'GET',
  data: 'json',
  success: function(data){
    console.log(data);
    // if (ep === 'collections'){
    //   collections(data,ep, si);
    // } else if (ep === 'photos'){
    //   photos(data, ep, si);
    // }
    // function collections(d, e,s){
    //   var k;
    //   var userSize;
    //
    //     document.getElementById('result').innerHTML = '';
    //   for(k = 0; k < d.length; k++ ){
    //     if (s === 'full') {
    //       userSize = d[k].cover_photo.urls.full;
    //     } else if (s === 'raw') {
    //       userSize = d[k].cover_photo.urls.raw;
    //     } else if (s === 'regular') {
    //       userSize = d[k].cover_photo.urls.regular;
    //     }else if (s === 'small') {
    //       userSize = d[k].cover_photo.urls.small;
    //     } else if (s === 'thumb') {
    //       userSize = d[k].cover_photo.urls.thumb;
    //     }
    //
    //
    //     document.getElementById('result').innerHTML +=
    //     '<div class="col">' +
    //       '<img class="img-thumbnail" alt="Image" src="' + userSize + '">' +
    //     '</div>';
    //   }
    // }
    //
    //
    //   function photos(d, e,s){
    //       var j;
    //     var photoSize;
    //       document.getElementById('result').innerHTML = '';
    //   for(j = 0; j < d.length; j++ ){
    //     if (s === 'full') {
    //       photoSize = d[j].urls.full;
    //     } else if (s === 'raw') {
    //       photoSize = d[j].urls.raw;
    //     } else if (s === 'regular') {
    //       photoSize = d[j].urls.regular;
    //     }else if (s === 'small') {
    //       photoSize = d[j].urls.small;
    //     } else if (s === 'thumb') {
    //       photoSize = d[j].urls.thumb;
    //     }
    //
    //
    //     document.getElementById('result').innerHTML +=
    //     '<div class="col">' +
    //       '<img class="img-thumbnail" alt="Image" src="' + photoSize + '">' +
    //     '</div>';
    //   }
    // }





  }, //success
  error: function(){
    console.log('error!');
  } //error

}); //ajax

}; // function displayData ends here

}); //document.ready
