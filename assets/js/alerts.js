async function alertGysmoy(message = 'Pon aquí tu mensaje de alerta', type = 'success', mode = 'light', button = 'both') {
    var types = ['success', 'info', 'warning', 'timeout'];
    var modes = ['light', 'dark'];
    var buttons = ['both', 'none', 'accept', 'cancel'];

    type = types.includes(type) ? type: types[0];
    mode = modes.includes(mode) ? mode: modes[0];
    button = buttons.includes(button) ? button: buttons[0];

    $('#alertGysmoy').attr('type', type);
    $('#alertGysmoy').attr('mode', mode)
    $('#alertGysmoy').attr('button', button)
    $('#alertGysmoy > .content').text(message)
    $('#alertGysmoy').show(250);
}

$('#alertGysmoy > .buttons .cancel').click(function() {
    $('#alertGysmoy').hide(250);
})