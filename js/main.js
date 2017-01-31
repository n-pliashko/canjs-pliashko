$(document).ready( function() {
    $('#send').on('click', function() {
        var option = {
            url: 'res1.json',
            dataType: 'json',
            success: function(data) {
                var error = 1;
                if (data.login === $('[name=login]').val() && data.password === $('[name=password]').val())
                    error = 0;
                $('#container h1').load('/canjs/auth.php?login=' + $('[name=login]').val() + '&error=' + error);
                $('form').remove();
            }
        }
        $(this).closest('form').ajaxSubmit(option);
        return false;
    });
});