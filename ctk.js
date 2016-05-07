$(document).ready(function(){
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
        var content = '';

        var count = images.length;
        $(urls).each(function(index, value){
          var url = value;
          content += "<img src='" + url + "'/>";
          if(!--count){
            $(elem).replaceWith(content);
          }
        });
      });

      //urls.push(url[0].textContent);
    });
  });

});
