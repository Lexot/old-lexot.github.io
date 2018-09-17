$(document).ready(function() {
  //AOS.init();
  $(".ti-1").hover(
    function() {
      toggleImage(1);
    },
    function() {
      toggleImage(1);
    }
  );
  $(".ti-2").hover(
    function() {
      toggleImage(2);
    },
    function() {
      toggleImage(2);
    }
  );
  $(".ti-3").hover(
    function() {
      toggleImage(3);
    },
    function() {
      toggleImage(3);
    }
  );
  $(".ti-4").hover(
    function() {
      toggleImage(4);
    },
    function() {
      toggleImage(4);
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
