(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "bac70d7be9967d99cee99e98b74fa884556e12f0";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"../js/user.js":2}]},{},[3]);
