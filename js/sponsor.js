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

  /*con2*/

  $(".con2 li").on("mouseenter", function () {
    let i = $(this).index();
    $(".con2 li")
      .eq(i)
      .children("p")
      .css({ color: "#ff6f09", "font-weight": "bold" });
  });
  $(".con2 li").on("mouseleave", function () {
    let i = $(this).index();
    $(".con2 li")
      .eq(i)
      .children("p")
      .css({ color: "#222", "font-weight": "nomal" });
  });
  $(".con2 li").on("mouseenter", function () {
    $(".con2 div").children("img").addClass("in");
  });
  $(".con2 li").on("mouseleave", function () {
    $(".con2 div").children("img").removeClass("in");
  });
});
