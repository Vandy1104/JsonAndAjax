console.log('Json and Ajax working');

//Test jquery
$(document).ready(function(){
  $('body').click(function(){
    $(this).css('color','blue');
  });


//Javascript data array of objects
// var jsData = [
//   {
//     name : 'Peter',
//     age  :  50
//   },
//   {
//     name : 'John',
//     age  :  25
//   }
// ];
//
// console.log(jsData);

//Displaying js objects in browser
// var i;
// for(i = 0; i < jsData.length; i++){
// document.getElementById('result').innerHTML +=
// '<h1>' + jsData[i].name + ' is ' + jsData[i].age + ' years old</h1>';
// }
//
// var jsonData = [
//   {
//     "name" : "Lucy",
//     age  :  12
//   },
//   {
//     "name" : "Mark",
//     age  :  77
//   }
// ];
//
// console.log(jsonData);

//Displaying json objects in browser
// var j;
// for(j = 0; j < jsonData.length; j++){
// document.getElementById('result').innerHTML +=
// '<h1>' + jsonData[j].name + ' is ' + jsonData[j].age + ' years old </h1>';
// }
//
// //Retrieving json data from external file.
//
// var person = JSON.parse(myData);
// console.log(person);
//
// var k;
// for(k = 0; k < person.length; k++){
// document.getElementById('result').innerHTML +=
// '<h1>' + person[k].name + ' is ' + person[k].age + ' years old </h1>';
// }


//Ajax method

$.ajax({
  url: 'js/mock_data.json',
  type: 'GET',
  data: 'json',
  success: function(data){
    console.log(data);
    var i;
    for (i = 0; i<data.length; i++){
      document.getElementById('result').innerHTML +=
      '<div class="col col-sm-6 col-md-4 col-lg-4 mx-2 border border-primary">' +
      '<h1>' + data[i].first_name +
      data[i].last_name + '</h1>' +
      '<h2>' + data[i].gender + '</h2>' +
      '<h3>' + data[i].email + '</h3>' +
      '<img class="img-thumbnail" src="' + data[i].avatar + '"alt="Avatar">'
      '</div>';
    }
  }, //Success ends
  error: function(){
    console.log('error');
  }
}); // Ajax ending





}); // Document .ready
