        // browser window scroll (in pixels) after which the "back to bottom" link is shown
        offsetTop = 300,
           //offsetBtm = 0,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,

        //duration of the top scrolling animation (in ms)
        scroll_duration = 700,

        //grab the "back to top" link
        $scrollToTop = $('.btn-invi');

        //hide or show the "back to bottom" link
        $(window).scroll(function () {
            //for bottom
            ($(this).scrollTop() > offsetTop) ? $scrollToTop.addClass('btn-visi') : $scrollToTop.removeClass('btn-visi cd-fade-out');
        });

        /*initialize when refresh or first run*/
        $(function () {
            ($(this).scrollTop() > offsetTop) ? $scrollToTop.addClass('btn-visi') : $scrollToTop.removeClass('btn-visi cd-fade-out');
            if ($(this).scrollTop() > offset_opacity) {
                $scrollToTop.addClass('cd-fade-out');
            }
        });
        $('.scroll').click(function (event) {
            $('body, html').animate({
                scrollTop: $('#fields_fname').scrollTop()
            }, 500, "linear");
            event.preventDefault();
        });