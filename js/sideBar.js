$(document).ready(function () {
    $(".nav-item a").click(function (event) {
      event.stopPropagation();
      $(this).parent().find(".sub-menu").slideToggle("fast");
      $(this).toggleClass("active-sub-menu");
    });
  });
  

$(document).click(function () {
  $(".sub-menu").hide();
});
