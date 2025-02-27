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

  /*con1*/
  $(".con1 li").on("mouseenter", function () {
    $(this).stop().css({ border: "1px solid #ff6f09", color: "#ff6f09" });
  });
  $(".con1 li").on("mouseleave", function () {
    $(this).stop().css({ border: "1px solid #ccc", color: "#222" });
  });

  /*con03*/
  $(".con03 li:nth-child(1)").on("mouseenter", function () {
    $(this).children("img").stop().animate({ "border-radius": "30px" });
  });
  $(".con03 li:nth-child(1)").on("mouseleave", function () {
    $(this).children("img").stop().animate({ "border-radius": "0px" });
  });
  $(".con03 li:nth-child(3)").on("mouseenter", function () {
    $(this).children("img").stop().animate({ "border-radius": "30px" });
  });
  $(".con03 li:nth-child(3)").on("mouseleave", function () {
    $(this).children("img").stop().animate({ "border-radius": "0px" });
  });
});
