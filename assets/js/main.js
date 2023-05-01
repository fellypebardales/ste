function abrir(e) {
  window.open(
    e,
    "janela",
    "width=600, height=550, top=99, left=99, scrollbars=yes, status=no, toolbar=no, location=no, directories=no, menubar=no, resizable=no, fullscreen=no"
  );
}



$(document).ready(function() {

  

  "use strict";
  var e = $("#empreendimento").offset().top - 100,
    // a = $("#videos").offset().top - 100,
    o = $("#perspectivas").offset().top - 100,
    t = $("#plantas").offset().top - 100,
    l = $("#ficha-tecnica").offset().top - 100,
    i = $("#localizacao").offset().top - 100,
    c = $("#contato").offset().top - 100;

  var rInit = $(window).scrollTop();

  if (rInit > 120) {
    $("header").addClass("menor");}

  if (rInit < 120) {
    $("header").removeClass("menor");}

  if (rInit < e) {
    $("header nav li a").removeClass("active");
    $(".bt-home").addClass("active");}

  if (rInit >= e) {
    $("header nav li a").removeClass("active");
    $(".bt-empreendimento").addClass("active");}

  // if (rInit >= a) {
  //   $("header nav li a").removeClass("active");
  //   $(".bt-videos").addClass("active");}

  if (rInit >= o) {
    $("header nav li a").removeClass("active");
    $(".bt-perspectivas").addClass("active");}

  if (rInit >= t) {
    $("header nav li a").removeClass("active");
    $(".bt-plantas").addClass("active");}

  if (rInit >= i) {
    $("header nav li a").removeClass("active");
    $(".bt-localizacao").addClass("active");}

  if (rInit >= l) {
    $("header nav li a").removeClass("active");
    $(".bt-ficha-tecnica").addClass("active");}

  if (rInit >= c) {
    $("header nav li a").removeClass("active");
    $(".bt-contato").addClass("active");}

  var heightRow = $(".teste").height();
  $(".ft-predio").css("height", heightRow * 2 - 14);

  $(window).resize(function() {
    var heightRow = $(".teste").height();
    $(".ft-predio").css("height", heightRow * 2 - 14);
  });
  $("#msgForm").validate({
    rules: {
      nome: { required: !0 },
      telefone: { required: !0, digits: !0 },
      email: { required: !0 },
      msg: { required: !0 }
    }
  }),
    jQuery.extend(jQuery.validator.messages, {
      required: "Campo obrigatório...",
      email: "E-mail inválido..."
    }),
    $(window).scroll(function() {
      var r = $(window).scrollTop();

      if (r > 120) {
        $("header").addClass("menor");}

      if (r < 120) {
        $("header").removeClass("menor");}

      if (r < e) {
        $("header nav li a").removeClass("active");
        $(".bt-home").addClass("active");}

      if (r >= e) {
        $("header nav li a").removeClass("active");
        $(".bt-empreendimento").addClass("active");}

      // if (r >= a) {
      //   $("header nav li a").removeClass("active");
      //   $(".bt-videos").addClass("active");}

      if (r >= o) {
        $("header nav li a").removeClass("active");
        $(".bt-perspectivas").addClass("active");}

      if (r >= t) {
        $("header nav li a").removeClass("active");
        $(".bt-plantas").addClass("active");}

      if (r >= l) {
        $("header nav li a").removeClass("active");
        $(".bt-ficha-tecnica").addClass("active");}

      if (r >= i) {
        $("header nav li a").removeClass("active");
        $(".bt-localizacao").addClass("active");}

      
      if (r >= c) {
        $("header nav li a").removeClass("active");
        $(".bt-contato").addClass("active");}
    }),
    
    $(".js-modal-btn").modalVideo(),
    $(".bg-modal button").click(function() {
      $(".bg-modal").fadeOut();
    }),
    $(".open-form").click(function() {
      $(".modal-form").fadeIn();
    }),
    $(".btclose").click(function() {
      return $(".modal-form").fadeOut(), !1;
    }),
    $("header nav li a").click(function() {
      var e = $(this).attr("data-anc");

      if (e == "perspectivas") {
        $("html,body").animate({ scrollTop: $("#" + e).offset().top - 80 });
      } else {
        $("html,body").animate({ scrollTop: $("#" + e).offset().top - 0 });
      }
    }),
    $(".materias").slick({
      dots: !0,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: !0,
      autoplaySpeed: 6e3,
      responsive: [
        { breakpoint: 900, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
      ]
    }),
    $("#perspectivas .row a").click(function() {
      var e = $(this).attr("data-img"),
        a = "assets/images/galeria/" + e + ".jpg";
      $("#recebe-foto").attr("src", a), $(".bg-modal").fadeIn();
    }),
    // $("#perspectivas .row a").click(function() {
    //   var z = $(this).parent().attr("data-name");
    //   alert(z);
    // }),
    $(".combo").click(function() {
      $(".comboBox").slideToggle();
    }),
    $(".comboBox p").click(function() {
      var e = $(this).html(),
        a = $(this).attr("data-acItem");
      console.log(a),
        $("#recebe-op").html(e),
        $(".thumbs .item").removeClass("active"),
        $(".thumbs .item.item-" + a).addClass("active");
    });
});

$("header nav ul li a").click(function() {
  $("nav").toggleClass("openNav");
  $(".open-menu").toggleClass("cross");
});

$(".open-menu").on("click", function(event) {
  event.preventDefault();
  $(this).toggleClass("cross");
  $("nav").toggleClass("openNav");
});

$(".bt-todas a").click(function() {
  $("#perspectivas ul li a").removeClass("active");
  $(this).addClass("active");
  $(".ft-perspectiva").fadeIn(300);
  $(".ft-decorado").fadeIn(300);
});

$(".bt-decorado a").click(function() {
  $("#perspectivas ul li a").removeClass("active");
  $(this).addClass("active");
  $(".ft-perspectiva").fadeOut(300, function() {
    $(".ft-decorado").fadeIn(300);
  });
});

$(".bt-perspectiva a").click(function() {
  $("#perspectivas ul li a").removeClass("active");
  $(this).addClass("active");
  $(".ft-decorado").fadeOut(300, function() {
    $(".ft-perspectiva").fadeIn(300);
  });
});

$(".open-telefone").click(function() {
  $(".modal-contact").fadeIn(500, function() {
    $(".item.item-telefone").fadeIn();
  });
});

$(".item-telefone .btclose").click(function() {
  $(".item.item-telefone").fadeOut(function() {
    $(".modal-contact").fadeOut();
  });
});

$(".open-zap").click(function() {
  $(".modal-contact").fadeIn(500, function() {
    $(".item.item-zap").fadeIn();
  });
});

$(".item-zap .btclose").click(function() {
  $(".item.item-zap").fadeOut(function() {
    $(".modal-contact").fadeOut();
  });
});

$(".open-corretor").click(function() {
  $(".modal-contact").fadeIn(500, function() {
    $(".item.item-corretor").fadeIn();
  });
});

$(".item-corretor .btclose").click(function() {
  $(".item.item-corretor").fadeOut(function() {
    $(".modal-contact").fadeOut();
  });
});

$("#wrapper-videos").slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:"<img class='a-left control-c prev slick-prev' src='assets/images/prev.svg'>",
  nextArrow:"<img class='a-right control-c next slick-next' src='assets/images/next.svg'>"
});

$("#wrapper-status").slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:"<img class='a-left control-c prev slick-prev' src='assets/images/prev.svg'>",
  nextArrow:"<img class='a-right control-c next slick-next' src='assets/images/next.svg'>"
});