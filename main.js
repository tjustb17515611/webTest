function login(){
    window.location.href="login.html";
}

function reg(){
    window.location.href="reg.html";
}

$(function() {
    var $slider = $('#demo-slider-0');
    var counter = 0;
    var getSlide = function() {
      counter++;
      return '<li><img src="/img1/' +
        (Math.floor(Math.random() * 4) + 1) + '.png" />' +
        '<div class="am-slider-desc">动态插入的 slide ' + counter + '</div></li>';
    };

    $('.js-demo-slider-btn').on('click', function() {
      var action = this.getAttribute('data-action');
      if (action === 'add') {
        $slider.flexslider('addSlide', getSlide());
      } else {
        var count = $slider.flexslider('count');
        count > 1 && $slider.flexslider('removeSlide', $slider.flexslider('count') - 1);
      }
    });

  });