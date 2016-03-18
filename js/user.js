var apiKey = require('../.env').apiKey;

exports.getRepos = function(user){
  $('#repoList').empty();
  // $.get('https://api.github.com/users/daneden/repos?access_token=' + apiKey).then(function(response){
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
  console.log(response);
    for(var i = 0; i < response.length; i++){
    $('#repoList').append("<li>" + response[i].name + "</li>");
  }
  }).fail(function(error){
    $('#repoList').text("Username not found");
    console.log(error.responseJSON.message);
  });
};
