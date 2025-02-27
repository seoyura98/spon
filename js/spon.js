/*header*/
$(function () {
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

  /*con4*/

  $(".con4 li").on("mouseenter", function () {
    let i = $(this).index();
    $(".con4 li").eq(i).children("div").stop().slideDown(1000);
  });
  $(".con4 li").on("mouseleave", function () {
    $(".con4 li div").stop().slideUp(1000);
  });
});
