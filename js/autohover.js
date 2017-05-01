$('document').ready(function () {

    // SCROLLING ANIMATION
    wow = new WOW(
      {
          boxClass: 'wow',      // default
          animateClass: 'animated', // default
          offset: 180,          // default
          mobile: false,       // default
          live: true        // default
      }
    )
    wow.init();

    //TOOLTIPS

    $('.icon-box').tooltipster({
        maxWidth: 200,
        touchDevices: false,
        animation: "fade",
        speed: 700,
        onlyOne: true,
        touchDevices: false,
        delay: 0,
        trigger: "click"
    });



    //CUSTOM JS GOES HERE

    //ingredients js

    $('#ingr1').click(function () {
        $('#ingr-name-cont').removeClass("fadeIn");
        $('#ingr-name-cont').addClass("fadeIn");
        setTimeout(function () { $('#ingr-name-cont').removeClass("fadeIn"); }, 1000);
        $('.ingr-name').text("Fenugreek");
        $('.ingr-description').text("Among the most sought after herbs for breast enhancement. It contains Phytoestrogens to stimulate natural estrogen production in your body.");
        $('.ingr').removeClass("ingr-active");
        $(this).addClass("ingr-active");
    });

    $('#ingr2').click(function () {
        $('#ingr-name-cont').removeClass("fadeIn");
        $('#ingr-name-cont').addClass("fadeIn");
        setTimeout(function () { $('#ingr-name-cont').removeClass("fadeIn"); }, 1000);
        $('.ingr-name').text("Saw Palmetto");
        $('.ingr-description').text("This herb contains phytonutrients that can stimulate growth of breast tissue. Additionally, it offers many other health benefits; nutritive tonic for smooth digestion and healthy appetite and helps support healthy urinary function.");
        $('.ingr').removeClass("ingr-active");
        $(this).addClass("ingr-active");
    });

    $('#ingr3').click(function () {
        $('#ingr-name-cont').removeClass("fadeIn");
        $('#ingr-name-cont').addClass("fadeIn");
        setTimeout(function () { $('#ingr-name-cont').removeClass("fadeIn"); }, 1000);
        $('.ingr-name').text("Fennel Seeds");
        $('.ingr-description').text("Fennel seeds contain estrogenic compounds. They also have flavonoids that can boost estrogen levels in the body.");
        $('.ingr').removeClass("ingr-active");
        $(this).addClass("ingr-active");
    });

    $('#ingr4').click(function () {
        $('#ingr-name-cont').removeClass("fadeIn");
        $('#ingr-name-cont').addClass("fadeIn");
        setTimeout(function () { $('#ingr-name-cont').removeClass("fadeIn"); }, 1000);
        $('.ingr-name').text("Wild Yam");
        $('.ingr-description').text("Contains phytoestrogen - diosgenin. It is capable of chemically converting itself into progesterone. It also has potential benefits on women's reproduction health.");
        $('.ingr').removeClass("ingr-active");
        $(this).addClass("ingr-active");
    });

    //carousel js

    var owl1 = $("#owl-01");

    owl1.owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 1000,
        paginationSpeed: 1000,
        items: 2,
        autoPlay: false,
        responsive: true
    });




    $('#link-1').click(function (e) {
        e.preventDefault();
        $('#link-2').removeClass("hovered-btn");
        $('#link-3').removeClass("hovered-btn");
        $('.illustration').attr("src", "/templates/v1.03/img/a.png");
        $('.illustration').removeClass("fadeIn");
        $('.illustration').addClass("fadeIn");
        setTimeout(function () { $('.illustration').removeClass("fadeIn"); }, 51);

        $(this).addClass("hovered-btn");
    });
    $('#link-2').click(function (e) {
        e.preventDefault();
        $('#link-1').removeClass("hovered-btn");
        $('#link-3').removeClass("hovered-btn");
        $('.illustration').attr("src", "/templates/v1.03/img/b.png");
        $('.illustration').removeClass("fadeIn");
        $('.illustration').addClass("fadeIn");
        setTimeout(function () { $('.illustration').removeClass("fadeIn"); }, 51);

        $(this).addClass("hovered-btn");
    });
    $('#link-3').click(function (e) {
        e.preventDefault();
        $('#link-1').removeClass("hovered-btn");
        $('#link-2').removeClass("hovered-btn");
        $('.illustration').attr("src", "/templates/v1.03/img/c.png");
        $('.illustration').removeClass("fadeIn");
        $('.illustration').addClass("fadeIn");
        setTimeout(function () { $('.illustration').removeClass("fadeIn"); }, 51);

        $(this).addClass("hovered-btn");
    });



    var next = 1;
    setInterval(function () {
        if ($('.icon-container').is(":visible")) {
            $('.icon-box').removeClass("hovered");
            $('.icon' + next).addClass("hovered");
            $('.icon' + next).tooltipster('show');
            next += 1;
            if (next === 4) {
                next = 1;
            }
        }
    }, 4000);


    var next2 = 1;
    setInterval(function () {
        next2 += 1;
        $('#ingr' + next2).trigger("click");
        if (next2 === 5) {
            next2 = 0;
        }
    }, 8000);

    $('.icon-box').click(function () {
        $('.icon-box').removeClass("hovered");
        $(this).addClass("hovered");
    });

    var next3 = 1;
    setInterval(function () {
        next3 += 1;
        $('#link-' + next3).trigger("click");
        if (next3 === 4) {
            next3 = 0;
        }
    }, 4000);


    $(window).scroll(function () {
        if (screen.width >= 480) {
            $("#stickyfooter").hide();
        } else {
            $('#form-button,.footer-links').bind('inview', function (event, visible) {
                if (visible == false) {
                    $("#stickyfooter").slideDown();
                } else {
                    $("#stickyfooter").slideUp();
                }
            });
        }
    });
    

}); //end of ready function

