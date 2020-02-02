$(".nav__links a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;

    $("html,body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

$(document).ready(function() {
  $("#form").on("submit", function(e) {
    e.preventDefault();

    let regexName = /[^a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ ]+/g;
    let regexMail = /^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9]+)\.([a-z\.])+$/g;

    if ($("#name").val().length == 0) {
      $("#name").after("<span class='error'>Name is required</span>");
    }
    if (regexName.test($("#name").val())) {
      $("#name").after("<span class='error'>not working</span>");
    }
    if ($("#mail").val().length == 0) {
      $("#mail").after("<span class='error'>Mail is required</span>");
    } else if (!regexMail.test($("#mail").val())) {
      $("#mail").after("<span class='error'>incorrect email adress</span>");
    }

    $(".error").fadeOut(3000, function() {
      $(this).remove();
    });
  });
});

/* $(document).ready(function() {
  $("#form").on("submit", function(e) {
    e.preventDefault();

    if ($("#mail").val().length == 0) {
      $("#mail").after("<span class='error'>Mail is required</span>");
    }

    $(".error").fadeOut(3000, function() {
      $(this).remove();
    });
  });
}); */
$(document).ready(function() {
  $(".burger ").on("click", function() {
    $(".nav__links").toggleClass("nav__active");
  });

  $(".nav__links a ").on("click", function() {
    $(".nav__links").removeClass("nav__active");
  });
});
