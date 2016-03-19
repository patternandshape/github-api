var apiKey = require('./../.env').apiKey;

exports.getRepos = function(user) {
  $('#repoList').empty();
  //list first 100 repos in descending order with username entered by user
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey + '&sort=created&order=desc&per_page=9999').then(function(response) {
    for (var i = 0; i <= response.length; i++) {
      var lastUpdate = moment(response[i].updated_at).format('l');
      $('#repoList').append("<li>" + "<span class='repo'>" + response[i].name + "</span>" + "<i class='fa fa-cloud-upload'></i>" + "<span class='updated'>" + lastUpdate + "</span>" + "</li>");
    }
  }).fail(function(error) {
    $('#repoList').text("Username not found");
  });
};


// moment().format("MMM Do YY"); what to do with you?
// var expires = moment.utc(date).format();

moment().format('l');
