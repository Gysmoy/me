$('#btn-showAlert').click(function() {
    var message = $('#message').val();
    var type = $('#type').val();
    var mode = $('#mode').val();
    var button = $('#button').val();
    alertGysmoy(message, type, mode, button);
})