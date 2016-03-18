exports.getRepos = function(userName){
  $('#repoList').empty();
  // $.get('https://api.github.com/users/daneden/repos?access_token=' + apiKey).then(function(response){
  $.get('https://api.github.com/users/:username/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for(var i = 0; i <= response.username.length; i++){
    $('#repoList').append("<li>" + response.username[i].repos + "</li>");
    }
  }).fail(function(error){
    $('#repoList').text(error.responseJSON.message);
    console.log(error.responseJSON.message);
  });
};

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
