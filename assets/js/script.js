$(document).ready(function() {
  $(".about").click(function() {
    $("html,body").animate(
      {
        scrollTop: $(".banner").offset().top
      },
      "slow"
    );
  });

  $(".portfolio-link").click(function() {
    $("html,body").animate(
      {
        scrollTop: $(".portfolio").offset().top
      },
      "slow"
    );
  });

  $(".contact-link").click(function() {
    $("html,body").animate(
      {
        scrollTop: $(".contact").offset().top
      },
      "slow"
    );
  });
});
