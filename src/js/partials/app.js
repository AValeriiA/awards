;(function($) {
    // $('#rigth__menu').scrollToFixed();
})(jQuery);


$(document).ready(function() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        var $mobile = true;
    }
    else {
        var $mobile = false;
    }

    $('.blank__nav').height($('#rigth__menu').outerHeight(true));

    // $(document).on('touchmove', function() { //touchmove works for iOS, I don't know if Android supports it
    //     $(document).trigger('wheel');
    // });

    $(window).scroll( function() {
        var $header = $('.w-header');

        if($(window).scrollTop() > $header.outerHeight()) {
            $('body').css('overflow', 'hidden');
            $('.w-section').addClass('scrolling');

            var menu__width = $('.w-section .right').width();

            $('.w-nav').addClass('active');
            $('.w-nav').css('width', (menu__width - 140));
        }
    });

    $('.w-section').scroll( function() {
        if($(this).scrollTop() <= 0) {
            $('body').css('overflow', 'auto');
            $('.w-section').removeClass('scrolling');
            $('.w-nav').removeClass('active');
            // $('.w-section').scrollTop(0);
        }
    });



    $('.scroller').click(function() {
        var target = $(this.hash);
        var topHeight = parseInt($('main').css('top'));
        var topPadding = parseInt($('main section article').css('padding-top'));
        var parsedTopHeight = topHeight + topPadding - 50;
        var place = $(this).data('place');
        var section = 'section#' + place;

        $('.b-dropdown__menu').dropdown('toggle');

        if (target.length) {
            // console.log($('main section article:first-of-type').css('padding-top'));
            var top = $(section).scrollTop() + $(target).offset().top - parsedTopHeight;
            console.log(top);

            $(section).animate({
                scrollTop: top
            }, 800);
            return false;
        }
    });

    // $('#apply a').click(function() {
    //     var targetNY = $('#new-york-apply');
    //     var targetLondon = $('#london-apply');
    //     var topHeight = parseInt($('main').css('top'));
    //     var topPadding = parseInt($('main section article:nth-of-type(2)').css('padding-top'));
    //     var parsedTopHeight = topHeight + topPadding * 5;
    //     var title = $('#title').height();
    //
    //     // var school = $(this).data('school');
    //     var sectionNY = 'section#new-york';
    //     var sectionLondon = 'section#london';
    //     if (targetNY.length || targetLondon.length) {
    //         // console.log(topNY, topLondon, parsedTopHeight);
    //         $('html, body').animate({
    //             scrollTop: title + 100
    //         }, 800);
    //         setTimeout( function() {
    //             var topNY = $(sectionNY).scrollTop() + $(targetNY).offset().top - parsedTopHeight;
    //             $(sectionNY).animate({
    //                 scrollTop: topNY
    //             }, 800);
    //         }, 1200);
    //         setTimeout( function() {
    //             var topLondon = $(sectionLondon).scrollTop() + $(targetLondon).offset().top - parsedTopHeight;
    //             $(sectionLondon).animate({
    //                 scrollTop: topLondon
    //             }, 800);
    //         }, 1200);
    //         return false;
    //     }
    // });


    // $(function() {
    //     $("menu li a:contains('past')").html('past years');
    //     $("menu#new-york li a:contains('programme')").html('program');
    //     $("section#new-york .label:contains('programme')").html('program');
    //     $("section .label:contains('past')").html('past years');
    // });



});

// $(window).resize(function(){
//     $("#title .line").each( function() {
//         height = $(this).offset().top;
//         $(this).attr('data-height', height);
//     });
// });
