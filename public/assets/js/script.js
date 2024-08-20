//  // // for sticky
$(window).scroll(function(){
    var sticky = $('#top-header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 5) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });


   // mediaquery class
   $(document).ready(function() {
    $("#navbar-togglercollapsed").click(function(event){
        event.preventDefault();
      $("#userNavbar").toggleClass('mobileViewUser');

    });
});

// for image
function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}
// for image
function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
        $('.image-upload-wrap').addClass('image-dropping');
    });
    $('.image-upload-wrap').bind('dragleave', function () {
        $('.image-upload-wrap').removeClass('image-dropping');
});


//  for datepicker
$(function () {
  $("#datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});
