$(document).ready(function () {
  const $tabContents = $(".tab-content");
  const $tab = $(".tab-list li");
  const $bottomTab = $(".bottom-tab-list li");
  const $bottomTabContents = $(".tab-content1");

  $(function () {
    $('input[name="daterange"]').daterangepicker({
      ssingleDatePicker: "true",
      showShortcuts: "false",
      showTopbar: "false",
    });
  });

  $(".offers-slider").slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
  });
  $(".common-slider2").slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
  });
  $(".trip-slider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
  });

  $(".common-slider").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  });

  $(".dot-list").slick({
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    variableWidth: false,
  });

  $tab.click(function () {
    const tab_id = $(this).attr("data-tab");

    $tab.removeClass("current");
    $tabContents.removeClass("current");
    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });

  $bottomTab.click(function () {
    const tab_id = $(this).attr("data-tab");

    $bottomTab.removeClass("current");
    $bottomTabContents.removeClass("current");
    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });

  // $(".list").click(function () {
  //   $(".list").removeClass("first")
  //   $(this).addClass("first");
  // });
});
