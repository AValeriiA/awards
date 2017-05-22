var right__sections = [
    {
        title: 'about',
        hash: 'about'
    },
    {
        title: 'categories & prizes',
        hash: 'categories'
    },
    {
        title: 'entry requirements',
        hash: 'entry'
    },
    {
        title: 'jury',
        hash: 'jury'
    },
    {
        title: 'exhibition',
        hash: 'exhibition'
    },
    {
        title: 'press & news',
        hash: 'press'
    },
    {
        title: 'organisers',
        hash: 'organisers'
    },
    {
        title: 'sponsors',
        hash: '_sponsors'
    },
    {
        title: 'contact',
        hash: 'contact'
    },
    {
        title: 'frequently asked questions',
        hash: 'faq'
    }
];
var currentSection = 0;

function initLink() {
    renderLink();
}

function renderLink() {
    if (currentSection < right__sections.length) {
        $('#right__link .text').text(right__sections[currentSection].title);
        $('#right__link').attr('href', '#' + right__sections[currentSection].hash);
    }
}

function nextSection() {
    currentSection++;
    renderLink();
}
initLink();

function checkArticleName(columnName) {
    var name = $('#' + columnName + ' article')
        .filter(":onScreen")
        .attr('id');

    return name;
}

(function($) {
    $('#right__link').click(function(e) {
        e.preventDefault();
        var $header = $('.w-header');

        if($(window).scrollTop() < $header.outerHeight()) {
            $('html, body').animate({
                scrollTop: $('.w-header').outerHeight(true) + 10
            }, 400);
            nextSection();
        } else {

            var target = $(this).attr('href');
            var topHeight = parseInt($('main').css('top'));
            var topPadding = parseInt($('main section article').css('padding-top'));
            var parsedTopHeight = topHeight + topPadding - 50;
            var top = $("#right").scrollTop() + $(target).offset().top - parsedTopHeight;

            $('#right').animate({
                scrollTop: parseInt(top)
            }, 400);

            nextSection();
        }
    });

    $(document).ready(function() {
        // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        //     var $mobile = true;
        // }
        // else {
        //     var $mobile = false;
        // }


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
                $('.w-section').scrollTop(0);

                $('html, body').animate({
                    scrollTop: 0
                }, 400);
            }

            if($('#faq:onScreen').length) {
                $('#right__link').hide();
            } else {
                $('#right__link').show();
            }

            function updateLinkOnScroll() {
                var name = checkArticleName('right');
                var index = _.findIndex(right__sections, {'hash' : name}) + 1;
                currentSection = index - 1;

                console.log('name', name);
                console.log('index', index);

                if(index < right__sections.length) {
                    $('#right__link .text').text(right__sections[index].title);
                    $('#right__link').attr('href', '#' + right__sections[index].hash);
                }

                if(index === 1) {
                    $('#right__link .text').text(right__sections[index - 1].title);
                    $('#right__link').attr('href', '#' + right__sections[index - 1].hash);
                }

            }

            updateLinkOnScroll();
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
                // console.log(top);

                $(section).animate({
                    scrollTop: top
                }, 400);
                return false;
            }
        });
    });

})(jQuery);

