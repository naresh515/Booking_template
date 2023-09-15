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
    responsive: [
      {
        breakpoint: 800,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".common-slider2").slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".trip-slider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".common-slider").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".dot-list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    variableWidth: false,
  });

  $(".list").click(function () {
    $(".list").removeClass("first");
    $(this).addClass("first");
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

  $(".plus").click(function () {
    var textValue = $(this).parent().find(".button-text");
    var currentValue = parseInt(textValue.text());
    currentValue++;
    textValue.text(currentValue);
    updateDropValue();
  });

  $(".minus").click(function () {
    var textValue = $(this).parent().find(".button-text");
    var currentValue = parseInt(textValue.text());
    if (currentValue > 0) {
      currentValue--;
    }
    textValue.text(currentValue);
    updateDropValue();
  });

  function updateDropValue() {
    var adultValue = parseInt($(".adult .button-text").text());
    var childrenValue = parseInt($(".children .button-text").text());
    var roomValue = parseInt($(".rooms .button-text").text());

    $(".text-svg").text(
      adultValue +
        " adults . " +
        childrenValue +
        " children . " +
        roomValue +
        " room"
    );
  }
  $(".box").click(function () {
    $(".deop-item").toggleClass("on");
  });

  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("is-active");
    $(".list-item").toggleClass("list-item-display");
  });
});
