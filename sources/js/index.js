import '../scss/index.scss';
$(document).ready(function () {
  console.log('js-file');
  $('.menu').on('click', function () {
    $('.key').toggleClass('hidden');
    $('.menu').toggleClass('open');
  });
  $('.key label').on('click', function (e) {
    e.stopPropagation();
    $('.key').addClass('hidden');
    $('.menu').removeClass('open');
  });
});
