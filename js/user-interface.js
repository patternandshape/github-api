var apiKey = require('../.env').apiKey;
var getRepos = require ('../js/user.js').getRepos;

$(document).ready(function() {
  var user;
  $('#repoFind').click(function() {
    //get username from user
    var user = $('#userName').val();
    //clear out username field
    console.log(user);
    $('#userName').val("");
    //run api call
    getRepos(user);

    event.preventDefault();
});
});
