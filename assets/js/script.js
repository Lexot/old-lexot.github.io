$(document).ready(function() {
  //AOS.init();
  $(".ti-1").hover(
    function() {
      $(".img-1").fadeIn();
    },
    function() {
      $(".img-1").hide();
    }
  );
  $(".ti-2").hover(
    function() {
      $(".img-2").fadeIn();
    },
    function() {
      $(".img-2").hide();
    }
  );
  $(".ti-3").hover(
    function() {
      $(".img-3").fadeIn();
    },
    function() {
      $(".img-3").hide();
    }
  );
  $(".ti-4").hover(
    function() {
      $(".img-4").fadeIn();
    },
    function() {
      $(".img-4").hide();
    }
  );

  $(".ti-1b").click(function() {
    toggleImage(1);
  });
  $(".ti-2b").click(function() {
    toggleImage(2);
  });
  $(".ti-3b").click(function() {
    toggleImage(3);
  });
  $(".ti-4b").click(function() {
    toggleImage(4);
  });
});

function toggleImage(index) {
  for (let i = 0; i < 4; i++) {
    if (index !== i + 1) $(".img-" + (i + 1)).removeClass("show");
    else $(".img-" + (i + 1)).toggleClass("show");
  }
}
