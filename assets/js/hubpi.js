/*!
 *
 * hubpi.js
 * ========
 * Its awesome and sexy written text to hubpear
 * version: 1.0.1
 * Date: 27/04/2014 
 *
 * Find the project on GitHub: 
 * https://github.com/jofpin/hubpi
 *
* ============================
* Copyright, MIT - 2014
* @author Jose Pino, @jofpin
* ============================
 *
 */
$(function() {

  "use-strict";
  /* hubpi plays to be boyfriend of json :) */

  var attrData    = $("[data-hp]");
  var tagCore     = "html, body";
  var tagStyle    = "style";
  var awepush     = "header, .btn-update, .btn-about";
  var valueDelay  = "0.2s"; 
  var valueNormal = "awepush_intro .4s ease both";
  var kf_awepush  = '<' + tagStyle + '>' + '@-webkit-keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @-moz-keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @-ms-keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @-o-keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } }' + '</' + tagStyle + '>';

    $(kf_awepush).appendTo(awepush);
    /* Intro animation sexy */    
    $(awepush).css({
      "-webkit-animation": valueNormal,
      "-moz-animation": valueNormal,
      "-ms-animation": valueNormal,
      "-o-animation": valueNormal,
      "animation": valueNormal,
      "-webkit-animation-delay": valueDelay,
      "-moz-animation-delay": valueDelay,
      "-ms-animation-delay": valueDelay,
      "-o-animation-delay": valueDelay,
      "animation-delay": valueDelay
  });


    if (typeof $.hubpi === "undefined") { /* data without reason hubpi */
      $.hubpi = {};
      GET = hubpi.get;
      //console.log(hubpi);
    }

  //$.hubpi = {};
  
      $.GET = {
      noDATA: function() {
        if (attrData) {
          this.ajaxHP();
        } 
        else {
          attrData.html("There is no data :(");
        }
      },

      ajaxHP: function() { /* data get json and ajax not cache :) */
        var self = this;
        $.ajaxSetup({
          cache: false
        });

      // loader of data content (JSON is revealed)
      attrData.html(
                  '<span class="' + "hp_loader" + '">' +
                  '<span class="' + "hp_loading" + '">' +
                  '</span>' +
                  '</span>'
                  );
      
      $.getJSON(attrData.data("hp"), function(data) { // dataURL ("hp")
        
        var hp = self.content_hubpers(); 
        
        $.each(data,function(_,_item) {  
          hp += self.template(_item);
        });

        attrData.html(hp);
        
      }).error(function(j,t,e) { // error load dataJSON :´(
        attrData.html('<span class="' + "error-json" + '">' + "Error" + " " + e + '</span>');
        console.error('Error : ' + e);
      });
    },
    
    // your div here here :)
    content_hubpers: function() {
      html = ('');
      return html;
    },

    template: function(data) {
      var id = data.id;
      var link = data.link;
      var title = data.title;
      var date = data.date;

      html = '<div class="' + "hubper-preview-content" + '">' + 
             '<li id="' + id + '">' +
             '<a href="' + link + '">' +
             '<h2 class="' + "hp_title" + '" title="' + title + '">' + title +
             '<span class="' + "hp_id" + '" data-hubper-id="' + '#' + id + '"></span>' + 
             '</h2>' +
             '<span class="' + "date-hubper" + '"> ' + date + '</span>' +
             '</a>' +
             '</li>' +
             '</div>';
             console.log('ID: ' + id + ' | Title post : ' + title + ' | Date : ' + date);
      return html;
    }
  };

    // update data hubpers 
    $('#update').click(function() {
      $.GET.noDATA();
      return false;
    });
    $(document).ready(function() {
      $.GET.noDATA();
    });

  /* config of user */
  var config = function() {
    $("#username").append($username);
    $("#description").append($description);
    $("#avatar").append("<img src=" + $avatar + " alt='" + $username + "'/>");
    $("#twitter-footer").append('<a href="https://twitter.com/' + $twitter + '" class="tw-footer" title="' + $twitter + '"></a>');
    $("#twitter").append('<a class="twitter fa fa-twitter" href="https://twitter.com/' + $twitter + '"></a>');
    $("#github").append('<a class="github fa fa-github" href="https://github.com/' + $github + '"></a>');
    $("#codepen").append('<a class="codepen fa fa-codepen" href="http://codepen.io/' + $codepen + '"></a>');
      console.log('User information:- ' + 'Username : ' + $username + ' | Description : ' + $description + ' | Twitter : ' + '@' + $twitter + ' | GitHub : ' + $github + ' | CodePen : ' + $codepen);
    bgImg = "linear-gradient(to bottom right, rgba(30, 1, 5, 0.30), rgba(41, 36, 132, 0.85)),url('" + $bgImg + "') no-repeat";
    bgColor = $bgColor;

    $('#hubpi').css({
    "background": bgImg,
    "background-color": bgColor,
    "background-position": "center center",
    "-webkit-background-size": "cover",
    "-moz-background-size": "cover",
    "-ms-background-size": "cover",
    "-o-background-size": "cover",
    "background-size": "cover",
    "background-attachment": "fixed"
   });
};

  $(document).on("click", "[data-scrolling]", function(h) {
    h.preventDefault();
    var scroller = $("#" + $(this).data("scrolling"));

    $(tagCore).animate({
      scrollTop: scroller.position().top
    }, 1000);
  });

  config();


});
