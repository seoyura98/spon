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
