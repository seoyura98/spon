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
});

/*con4*/
$(function () {
  $(".q01").on("click", function () {
    $(".a01").slideToggle();
    $(".qna1 span").css({ color: "#ff6f09" });
  });
  $(".q02").on("click", function () {
    $(".a02").slideToggle();
    $(".qna2 span").css({ color: "#ff6f09" });
  });
  $(".q03").on("click", function () {
    $(".a03").slideToggle();
    $(".qna3 span").css({ color: "#ff6f09" });
  });
});
