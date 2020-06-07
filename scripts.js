$('#button-1').click(() => {
    let formInput = $('#todoInputField').val();
    $('ul').append('<li id="todo">'+formInput+'</li>');
    $('#todoInputField').val("");
})

$(document).on("click", "#todo", function() {
    $(this).css('text-decoration', 'line-through');
})

