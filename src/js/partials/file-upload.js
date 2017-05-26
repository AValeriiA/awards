$('#file__upload').on('click', function () {
    $(this).parent().addClass('active');
});

$('#file__upload').on('change', function (event) {
    var file__name = $(this).val();
    if (file__name.substring(3,11) == 'fakepath') {
        file__name = file__name.substring(12);
    }

    $(this).parent().removeClass('active');
    $(this).parent().find('.file__text').text(file__name);
});