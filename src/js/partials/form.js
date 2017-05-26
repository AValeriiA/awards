(function($) {

    $("#create__form").validate({
        debug: true,
        errorClass: 'danger',
        validClass: 'success',
        rules: {
            submission__category: 'required',
            submission__type: 'required',
            title: 'required',
            description: 'required',
            company__name: 'required',
            url: 'required',
            first__name: 'required',
            last__name: 'required',
            email: 'required',
            number: 'required',
            photographer__name: 'required',
            country: 'required',
            file__upload: 'required',
            video__url: 'required'

        },
        errorPlacement: function(error, element) {},
        highlight: function (element) {
            $(element).addClass('danger');
        },
        submitHandler: function(form) {

        },
        invalidHandler: function (event) {

        }
    });

})(jQuery);