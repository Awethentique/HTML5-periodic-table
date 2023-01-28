import '../scss/index.scss';
$(document).ready(function () {
  // handle menu click
  $('.menu').on('click', function () {
    $('.key').toggleClass('hidden');
    $('.wrapper').toggleClass('open');
  });
  $('.key label').on('click', function (e) {
    e.stopPropagation();
    $('.key').addClass('hidden');
    $('.wrapper').removeClass('open');
  });
  // debounce for scroll
  const debounce = (func, delay) => {
    clearTimeout(func._tId);
    func._tId = setTimeout(function () {
      func();
    }, delay);
  };

  function throttle(func, delay) {
    var lastTime = 0;
    return function () {
      var now = new Date();
      if (now - lastTime >= delay) {
        func();
        lastTime = now;
      }
    };
  }

  //  scroll handler
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      $('header').addClass('collapsed');
    } else {
      $('header').removeClass('collapsed');
    }
  };
  window.onscroll = function () {
    throttle(scrollFunction(), 100);
  };
});
