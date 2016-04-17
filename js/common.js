$(function () {
	//SearchBar
	var $weuiSearchBar = $('#search_bar');
    $('#search_bar').on('click',function(){
        $weuiSearchBar.addClass('weui_search_focusing');
    }).on('blur', '#search_input', function () {
        $weuiSearchBar.removeClass('weui_search_focusing');
    }).on('touchend', '#search_cancel', function () {
        $('#search_input').val('');
    }).on('touchend', '#search_clear', function () {
        $('#search_input').val('');
    });
});