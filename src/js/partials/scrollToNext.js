jQuery.fn.extend({
    scrollToNext : function(speed, easing, target) {
        return this.each(function() {
            // var targetOffset = $(this).position().top;
            var targetOffset = $(this).offset().top;
            $(target).animate({scrollTop: targetOffset}, speed, easing);
        });
    }
});