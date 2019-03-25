$(function(){
    $('.selected').click(function(){
        $('.option-list').slideToggle(200);
        $('.select').toggleClass('select-active');
    });
    $('.option').click(function(){
        select_val = $(this).attr('data-select-val');
        select_div = $(this).parent().parent();
        $(select_div).children('.selected').html($(this).html());
        $(select_div).children('input').val(select_val);

        $('.option-list').slideToggle(200);
        $('.select').toggleClass('select-active');
    });
});
