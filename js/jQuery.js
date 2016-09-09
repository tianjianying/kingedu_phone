 $(function(){
    $(".curriculum_btn li").click(function(){
      $(this).addClass("cur").siblings(".curriculum_btn li").removeClass("cur");
      var sum=$(this).index();
      $(".conten_box").eq(sum).show().siblings(".conten_box").hide();
    });

  })