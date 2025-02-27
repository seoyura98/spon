$(function () {
  //headerjs//
  $(".bar").on("click", function () {
    $(".wrap01").show();
    $(this).hide();
    $(".close").show();
    $(".wrap02").show();
  });
  $(".close").on("click", function () {
    $(".wrap01").hide();
    $(this).hide();
    $(".bar").show();
    $(".wrap02").hide();
  });

  //con03 js//
  $(".right02 li").on("mouseenter", function () {
    let i = $(this).index();
    $(".left02 li").eq(i).show();
    $(this).addClass("on");
  });
  $(".right02 li").on("mouseleave", function () {
    $(".left02 li").hide();
    $(".left02 li").eq(0).show();
    $(this).removeClass("on");
  });
});
