var right__sections = [
    {
        title: 'about',
        hash: 'about'
    },
    {
        title: '1. categories & prizes',
        hash: 'categories'
    },
    {
        title: '2. entry requirements',
        hash: 'entry'
    },
    {
        title: '3. jury',
        hash: 'jury'
    },
    {
        title: '4. exhibition',
        hash: 'exhibition'
    },
    {
        title: '5. press & news',
        hash: 'press'
    },
    {
        title: '6. organisers',
        hash: 'organisers'
    },
    {
        title: '7. sponsors',
        hash: '_sponsors'
    },
    {
        title: '8. contact',
        hash: 'contact'
    },
    {
        title: '9. frequently asked questions',
        hash: 'faq'
    }
];
var left__sections = [
    {
        title: 'submission',
        hash: 'submission'
    },
    {
        title: '1. submission guidelines',
        hash: 'submission__guidelines'
    },
    {
        title: '2. create entry',
        hash: 'create'
    }
];
var currentSection__right = 0;
var currentSection__left = 0;



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

            nextSection__right();
        } else {
            var target = $(this).attr('href');
            var topHeight = parseInt($('main').css('top'));
            var topPadding = parseInt($('main section article').css('padding-top'));
            var parsedTopHeight = topHeight + topPadding - 50;
            var top = $("#right").scrollTop() + $(target).offset().top - parsedTopHeight;

            $('#right').animate({
                scrollTop: parseInt(top)
            }, 400);

            nextSection__right();
        }
    });

    $('#left__link').click(function(e) {
        e.preventDefault();
        var $header = $('.w-header');

        if($(window).scrollTop() < $header.outerHeight()) {
            $('html, body').animate({
                scrollTop: $('.w-header').outerHeight(true) + 10
            }, 400);

            nextSection__left();
        } else {
            var target = $(this).attr('href');
            var topHeight = parseInt($('main').css('top'));
            var topPadding = parseInt($('main section article').css('padding-top'));
            var parsedTopHeight = topHeight + topPadding - 50;
            var top = $("#left").scrollTop() + $(target).offset().top - parsedTopHeight;

            $('#left').animate({
                scrollTop: parseInt(top)
            }, 400);

            nextSection__left();
        }
    });

    function initLink() {
        renderLink();
    }

    function renderLink() {
        if (currentSection__right < right__sections.length) {
            $('#right__link .text').text(right__sections[currentSection__right].title);
            $('#right__link').attr('href', '#' + right__sections[currentSection__right].hash);
        }

        if (currentSection__left < left__sections.length) {
            $('#left__link .text').text(left__sections[currentSection__left].title);
            $('#left__link').attr('href', '#' + left__sections[currentSection__left].hash);
        }
    }

    function nextSection__right() {
        currentSection__right++;

        renderLink();
    }

    function nextSection__left() {
        currentSection__left++;

        renderLink();
    }
    initLink();


    $(document).ready(function() {
        $(window).scroll( function() {
            var $header = $('.w-header');

            if($(window).scrollTop() > $header.outerHeight()) {
                $('body').css('overflow', 'hidden');
                $('.w-section').addClass('scrolling');

                $('#right__menu').addClass('active__right');
                $('#left__menu').addClass('active__left');
            }
        });

        $('.w-section').scroll( function() {
            if($(this).scrollTop() <= 0) {
                $('body').css('overflow', 'auto');
                $('.w-section').removeClass('scrolling');
                $('#left__menu').removeClass('active__left');
                $('#right__menu').removeClass('active__right');

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

            if($('#create:onScreen').length) {
                $('#left__link').hide();
            } else {
                $('#left__link').show();
            }

            function updateLinkOnScroll() {
                var name__right = checkArticleName('right');
                var index__right = _.findIndex(right__sections, {'hash' : name__right}) + 1;
                currentSection__right = index__right - 1;

                var name__left = checkArticleName('left');
                var index__left = _.findIndex(left__sections, {'hash' : name__left}) + 1;
                currentSection__left = index__left - 1;


                if(index__right < right__sections.length) {
                    $('#right__link .text').text(right__sections[index__right].title);
                    $('#right__link').attr('href', '#' + right__sections[index__right].hash);
                }

                if(index__right === 1) {
                    $('#right__link .text').text(right__sections[index__right - 1].title);
                    $('#right__link').attr('href', '#' + right__sections[index__right - 1].hash);
                }


                if(index__left < left__sections.length) {
                    $('#left__link .text').text(left__sections[index__left].title);
                    $('#left__link').attr('href', '#' + left__sections[index__left].hash);
                }

                if(index__left === 1) {
                    $('#left__link .text').text(left__sections[index__left - 1].title);
                    $('#left__link').attr('href', '#' + left__sections[index__left - 1].hash);
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

            $(this).parent().parent().dropdown('toggle');

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

