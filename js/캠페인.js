$(function () {
  $(".q01").on("click", function () {
    $(".a01").slideToggle();
    $(".qna1").css({ color: "#222" });
    $(".qna1 span").css({ color: "#ff6f09" });
  });
  $(".q02").on("click", function () {
    $(".a02").slideToggle();
    $(".qna2").css({ color: "#222" });
    $(".qna2 span").css({ color: "#ff6f09" });
  });
  $(".q03").on("click", function () {
    $(".a03").slideToggle();
    $(".qna3").css({ color: "#222" });
    $(".qna3 span").css({ color: "#ff6f09" });
  });
});
