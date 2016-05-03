$(document).ready(function() {
  $('button.signin').click(function() {
    $('.modal').fadeIn("fast", function() {
  });
    });
  $('button.close').click(function(){
    $('.modal').fadeOut("slow", function() {
  });
    });
  $('button.submit').click(function() {
    $('input[name=user]').addClass('error');
    $('input[name=pass]').addClass('error');

  });
  $('input[name=user]').click(function() {
    $('input[name=user]').removeClass('error');
    $('input[name=pass]').removeClass('error');

  });

  $('form.getstarted').click(function() {
    $('.modal').fadeOut("slow", function() {

  });
    });

});
