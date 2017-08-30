
$(function() {
    //暱稱 字數提醒
    var nick_wordcnt = $("#nick_name").val().length;
    $('#nick_nameRemind').html(nick_wordcnt);
    $('#nick_name').bind("input", function() {
        $('#nick_nameRemind').html($(this).val().length);
    });
    //密碼 字數提醒
    var pass_wordcnt = $("#password").val().length;
    $('#passwordRemind').html(nick_wordcnt);
    $('#password').bind("input", function() {
        $('#passwordRemind').html($(this).val().length);
    });
    //再次確認密碼 字數提醒
    var pass2_wordcnt = $("#password_2").val().length;
    $('#password2Remind').html(nick_wordcnt);
    $('#password_2').bind("input", function() {
        $('#password2Remind').html($(this).val().length);
    });

});

$('.self_login').click(function() {
	alert('尚未開放');
	console.log('test');
});
