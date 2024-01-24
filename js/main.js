"use strict";

$(document).ready(function () {
  //Sidebar
  $(".sidebar-icon").on("click", function () {
    if ($(".sidebar").css("left") == `0px`) {
      $(".sidebar").animate(
        { left: `-${$(".sidebar-box").innerWidth()}px` },
        500
      );
      $(".sidebar-icon i")
        .eq(1)
        .fadeOut(200, function () {
          $(".sidebar-icon i").eq(0).fadeIn(200);
        });
    } else {
      $(".sidebar").animate({ left: 0 }, 500);
      $(".sidebar-icon i")
        .eq(0)
        .fadeOut(200, function () {
          $(".sidebar-icon i").eq(1).fadeIn(200);
        });
    }
  });

  //Sidebar Links
  $(".sidebar a").on("click", function (e) {
    let target = $(e.target).attr("href");
    let targetSection = $(target).offset().top;
    $("html,body").animate({ scrollTop: targetSection }, 1500);
  });

  //Accordion List
  $(".singer h3").on("click", function (e) {
    let target = $(e.target).attr("id");
    if (
      target === "singerFour" &&
      !$(`.singer div#${target}`).hasClass("active")
    ) {
      $(".singer:last-of-type h3").css("border-radius", "0px");
    } else {
      $(".singer:last-of-type h3").css("border-radius", "0 0 10px 10px");
    }
    if ($(`.singer div#${target}`).hasClass("active")) {
      $(`.singer div#${target}`).slideUp(500).removeClass("active");
    } else {
      $(`.singer div#${target}`)
        .slideDown(500)
        .addClass("active")
        .parent()
        .siblings()
        .children("div")
        .slideUp(500)
        .removeClass("active");
    }
  });

  //Count Down
  setInterval(function () {
    let eventDate = new Date("22 january 2022 19:00:00");
    eventDate = eventDate.getTime() / 1000;
    let dateNow = new Date();
    dateNow = dateNow.getTime() / 1000;
    let dateDifference = eventDate - dateNow;
    setCountDown(dateDifference);
  }, 1000);

  function setCountDown(time) {
    let days = Math.floor(time / (24 * 60 * 60));
    let hours = Math.floor((time - days * (24 * 60 * 60)) / 3600);
    let mins = Math.floor((time - days * (24 * 60 * 60) - hours * 3600) / 60);
    let secs = Math.floor(
      time - days * (24 * 60 * 60) - hours * 3600 - mins * 60
    );

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} H`);
    $(".minutes").html(`${mins} M`);
    $(".seconds").html(`${secs} S`);
  }

  //Remaining Characters
  const maxVal = 100;
  $("textarea").on("input", function () {
    const inputVal = $("textarea").val().length;
    const charRemaining = maxVal - inputVal;
    if (charRemaining == 0) {
      $("#chars span:eq(0)").html("Your available character finished");
      $("#chars span:eq(1)").addClass("d-none");
    } else {
      $("#chars span:eq(0)").html(charRemaining);
      $("#chars span:eq(1)").removeClass("d-none");
    }
  });

  //Form
  $("form").on("click", function (e) {
    e.preventDefault();
  });
});
