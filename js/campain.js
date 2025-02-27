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

/*con02(실제 con01)*/
$(function () {
  $(".con02 li:nth-child(1)").on("mouseenter", function () {
    $(this).css({ filter: "opacity(0.8)" });
    $(this).addClass("on");
  });
  $(".con02 li:nth-child(1)").on("mouseleave", function () {
    $(this).css({ filter: "opacity(1)" });
    $(this).removeClass("on");
  });
  $(".con02 li:nth-child(2)").on("mouseenter", function () {
    $(this).css({ filter: "opacity(0.8)" });
    $(this).addClass("on");
  });
  $(".con02 li:nth-child(2)").on("mouseleave", function () {
    $(this).css({ filter: "opacity(1)" });
    $(this).removeClass("on");
  });
  $(".con02 li:nth-child(3)").on("mouseenter", function () {
    $(this).css({ filter: "opacity(0.8)" });
    $(this).addClass("on");
  });
  $(".con02 li:nth-child(3)").on("mouseleave", function () {
    $(this).css({ filter: "opacity(1)" });
    $(this).removeClass("on");
  });
});

/*con04*/
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
