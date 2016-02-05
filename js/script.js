'use strict';
// $('input[name="name"]').attr("required", true);
// $('input[name="email"]').attr("required", true);
function validateForm() {
    var nameField = $('input[name="name"]').val();
    var emailField = $('input[name="email"]').val();
    var dateField = $('input[name="date"]').val();
    var ipField = $('input[name="ip"]').val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var dateReg = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/;
    var ipReg = /^\d+\.\d+\.\d+\.\d+$/;
    if (nameField.length < 5 || nameField.length > 30 || nameField == '') {
        $('.alert-message.name').show();
        return false;
    } else {
        $('.alert-message.name').hide();
    }
    if (!emailField.match(emailReg) || emailField == '') {
        $('.alert-message.email').show();
        return false;
    } else {
        $('.alert-message.email').hide();
    }
    if (!dateField.match(dateReg) && dateField != '') {
        $('.alert-message.date').show();
        return false;
    } else {
        $('.alert-message.date').hide();
    }
    if (!ipField.match(ipReg) && ipField != '') {
        $('.alert-message.ip').show();
        return false;
    } else {
        $('.alert-message.ip').hide();
        alert('Goooood job ' + nameField + ' !!!! Form is validated');
    }
}