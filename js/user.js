// exports.displayMissingBike = function(city){
//   $('#bikeList').empty();
//   $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&proximity=' + city + '&proximity_square=100', function(response){
//     for(var i = 0; i <= response.bikes.length; i++){
//     $('#bikeList').append("<li>" + response.bikes[i].title + "</li>");
//     }
//   }).fail(function(error) {
//     $('#bikeList').text("NOT WORKING");
//     });
// };
