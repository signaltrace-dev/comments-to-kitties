$(document).ready(function(){
  var hideComments = function(){
    var urls = [];

    $.get("http://thecatapi.com/api/images/get?format=xml&size=small&results_per_page=10&api_key=ODM5Mjg", function(data){
      var images = $(data).find("image");
      $(images).each(function(){
        var image = this;
        $(image).find('url').each(function(){
          var url = this.textContent;
          urls.push(url);
        });
        $('#disqus_thread, .fb-comments').each(function(){
          var elem = this;
          var content = '<div id="comment-kitties">';

          var count = images.length;
          $(urls).each(function(index, value){
            var url = value;
            content += "<a href='" + url + "'><img src='" + url + "'/></a>";
            if(!--count){
              content += '</div>';
              $(elem).replaceWith(content);
            }
          });
        });
      });
    });
  };

  var prevStyle,
  count = 1,
  poll = window.setInterval(function(){
    var commentsElem = $('#disqus_thread, .fb-comments');

    if(commentsElem.length > 0){
      window.clearInterval(poll);
      hideComments();
    }
  }, 1000);

});
