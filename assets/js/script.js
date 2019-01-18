/*global $, jQuery, alert*/
(function ($) {
    "use strict";

    function contactForm() {
        $('#contactform').submit(function () {
            var action = 'php/contact-form.php';
            $("#message-info").slideUp(250, function () {
                $('#message-info').hide();
                $('#submit')
                    .after('<div class="loader"><div></div></div>')
                    .attr('disabled', 'disabled');
                $.post(action, {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    message: $('#message').val()
                },
                    function (data) {
                        document.getElementById('message-info').innerHTML = data;
                        $('#message-info').slideDown(250);
                        $('#contactform .loader div').fadeOut('slow', function() {
                            $(this).remove();
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') !== null) {
                            $('#contactform').slideUp(850, 'easeInOutExpo');
                        }
                    });
            });
            return false;
        });
    }


    $(document).ready(function () {
       
        contactForm();
    });

}(jQuery));
