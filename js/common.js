/*トップへ戻る*/
  $(window).scroll(function () {
    if($(this).scrollTop() >= 500) {
      $(".topLink").fadeIn();
    } else {
      $(".topLink").fadeOut();
    }
  });

/*カレント*/
$(function(){
	var url = location.pathname;
	$('nav a[href="'+url+'"]').addClass('current');
});

/*トグルメニュー*/
$(function(){
  $('.menu-trigger').click(function() {
    $(this).toggleClass('active');
    $('menu').toggle("slow");
    $('nav').toggle("slow");{
      /*windowサイズが840以下の時*/
      var w = $(window).width();
      var x = 840;
      if (w <= x) {
          $('nav').css({
              display:"none"
          });
      }
	}
    return false;
  });
});



/*スムーススクロール*/
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
