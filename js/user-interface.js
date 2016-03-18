var getRepos = require('../js/user.js').getRepos;

$(document).ready(function() {
  $('#repoFind').click(function() {
    //get username from user
    var user = $('#userName').val();
    //clear out username field
    $('#userName').val("");
    //run api call
    getRepos(user);

    event.preventDefault();
  });
});
