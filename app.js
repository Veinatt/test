function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 1);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  let className = support === true ? 'webp' : 'no-webp';
  document.documentElement.classList.add(className);
});

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function vacsCounter() {
  if (document.querySelector('.filtrs .divisions-trigger .counter')) {
    if (document.querySelectorAll('.tag.active').length == 0) {
      document.querySelector('.filtrs .divisions-trigger > div:first-child').style.marginRight = '10px'
      document.querySelector('.filtrs .divisions-trigger .counter').style.display = 'none'
    } else {
      document.querySelector('.filtrs .divisions-trigger > div:first-child').style.marginRight = '0'
      document.querySelector('.filtrs .divisions-trigger .counter').style.display = 'flex'
      document.querySelector('.filtrs .divisions-trigger .counter').textContent = document.querySelectorAll('.tag.active').length;
    }
  }
}
ready(function () {
  vacsCounter();

});
if (document.querySelector('.filtrs-tags .tag')) {
  document.querySelectorAll('.filtrs-tags .tag').forEach(tag => {
    tag.addEventListener('click', function () {
      this.classList.toggle('active');
      vacsCounter();
    }, false);
  })
}

let scrollPosition = 0;

if (document.querySelector('#menu-open')) {
  document.querySelector('#menu-open').addEventListener('click', function () {
    document.querySelector('.menu').classList.add('active');
    document.querySelector('body').classList.add('lock');
  }, false);
}

if (document.querySelector('#menu-close')) {
  document.querySelector('#menu-close').addEventListener('click', function () {
    document.querySelector('.menu').classList.remove('active');
    document.querySelector('body').classList.remove('lock');
  }, false);
}
if (document.querySelector('#to_signin')) {
  document.querySelector('#to_signin').addEventListener('click', function () {
    document.querySelector('.form-signin').classList.add('active');
    document.querySelector('.form-signup').classList.remove('active');
  }, false);
}
if (document.querySelector('#to_signup')) {
  document.querySelector('#to_signup').addEventListener('click', function () {
    document.querySelector('.form-signup').classList.add('active');
    document.querySelector('.form-signin').classList.remove('active');
  }, false);
}
if (document.querySelector('.pass-ctrl')) {
  document.querySelectorAll('.pass-ctrl').forEach(show => {
    show.addEventListener('click', function () {
      if (this.parentNode.querySelector('input').getAttribute('type') == 'password') {
        this.innerHTML = 'Скрыть';
        this.parentNode.querySelector('input').setAttribute('type', 'text');
      } else {
        this.innerHTML = 'Показать';
        this.parentNode.querySelector('input').setAttribute('type', 'password');
      }
    }, false);
  })
}


if (document.querySelector('.zlk-about-sec-5 .slide-5')) {
  document.querySelector('.zlk-about-sec-5 .slide-5').addEventListener('mouseover', function () {
    document.querySelector('.zlk-about-sec-5 .slide-4').classList.add('toleft');
  }, false);
}
if (document.querySelector('.zlk-about-sec-5 .slide-5')) {
  document.querySelector('.zlk-about-sec-5 .slide-5').addEventListener('mouseout', function () {
    document.querySelector('.zlk-about-sec-5 .slide-4').classList.remove('toleft');
  }, false);
}
if (document.querySelector('.news-cont .item')) {
  document.querySelectorAll('.news-cont .item').forEach(item => {
    item.addEventListener('mousemove', function (mouseEvent) {
      var xpos;
      var ypos;
      var rect = this.getBoundingClientRect();

      if (mouseEvent) {

        //FireFox
        xpos = mouseEvent.pageX - rect.left - document.documentElement.scrollLeft + "px";
        ypos = mouseEvent.pageY - rect.top - document.documentElement.scrollTop + "px";

      }
      this.querySelector('img').style.top = ypos;
      this.querySelector('img').style.left = xpos;
    }, false);
  })
}
var swiper_model = new Swiper('.model-slider .swiper', {
  loop: false,
  navigation: {
    nextEl: '.title-cont .swiper-button-next',
    prevEl: '.title-cont .swiper-button-prev',
  },
  slidesPerView: 2.5,
  watchSlidesProgress: true,
  freeMode: true,

});
var swiper_tags = new Swiper('.tag-cont .swiper', {
  loop: false,
  slidesPerView: 'auto',
  watchSlidesProgress: true,
  freeMode: true,
  on: {
    init: function (swiper) {
      if (swiper.slides[0].classList.contains('swiper-slide-visible')) {
        swiper.$el[0].childNodes[1].style.opacity = 0
      } else {
        swiper.$el[0].childNodes[1].style.opacity = 1
      }
      if (swiper.slides[swiper.slides.length - 1].classList.contains('swiper-slide-visible')) {
        swiper.$el[0].childNodes[3].style.opacity = 0
      } else {
        swiper.$el[0].childNodes[3].style.opacity = 1
      }
    },
    setTransition: function (swiper) {
      if (swiper.slides[0].classList.contains('swiper-slide-visible')) {
        swiper.$el[0].childNodes[1].style.opacity = 0
      } else {
        swiper.$el[0].childNodes[1].style.opacity = 1
      }
      if (swiper.slides[swiper.slides.length - 1].classList.contains('swiper-slide-visible')) {
        swiper.$el[0].childNodes[3].style.opacity = 0
      } else {
        swiper.$el[0].childNodes[3].style.opacity = 1
      }
    },
  },
});
var swiper_top = new Swiper('.swiper-top', {
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
var swiper_img = new Swiper('.swiper-img', {
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
var swiper_content = new Swiper('.swiper-slider-content', {
  loop: false,
  autoHeight: true,
  allowTouchMove: false,

});
swiper_img.controller.control = swiper_content;

if (document.querySelector('.zlk-sndwch .swiper-slider-img')) {
  document.querySelectorAll('.zlk-sndwch .swiper-slider-img').forEach(swiperSlider => {
    let slidesCount = swiperSlider.querySelectorAll('.swiper-pagination-bullet').length;
    swiperSlider.querySelectorAll('.swiper-pagination-bullet').forEach(bullet => {
      bullet.style.width = (bullet.parentElement.offsetWidth - (slidesCount * 10) + 10) / slidesCount + 'px';
    })
    if (slidesCount == 1) {
      swiperSlider.style.pointerEvents = 'none';
      swiperSlider.querySelector('.swiper-button-prev').style.display = 'none';
      swiperSlider.querySelector('.swiper-button-next').style.display = 'none';
    }
  })
}


// document.querySelectorAll('.dropdownn').forEach(dd => {
//   dd.addEventListener('click', function () {
//     this.classList.toggle('active');
//     this.querySelector('.dropdownn-menu').classList.toggle('active');
//   }, false);
// })
$('.dropdownn').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdownn-menu').slideToggle(300);
});
$('.dropdownn').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdownn-menu').slideUp(300);
});
$('.dropdownn .dropdownn-menu > div').click(function () {
  $(this).parent().parent().find('.slct-span').text($(this).text());
  $(this).parent().parent().find('.slct-input').attr('value', $(this).attr('id'));
});
$('.content-block .dropdownn .dropdownn-menu > div').click(function () {
  $(this).parent().parent().find('.optn-value div').text($(this).find('div').text());
  $(this).parent().parent().find('.slct-input').text($(this).find('div').text());
});
$('.zlk-sndwch-sec-1 .optn .dropdownn .dropdownn-menu > div').click(function () {
  $(this).parent().parent().find('.optn-value span').text($(this).find('span').text());
  $(this).parent().parent().find('.slct-input').attr('value', $(this).attr('id'));
  if ($(this).parent().hasClass('optt-1')) {
    $('.zlk-sndwch-sec-1 .opt-1').text($(this).find('span').text());
  } else if ($(this).parent().hasClass('optt-2')) {
    $('.zlk-sndwch-sec-1 .opt-2').text($(this).find('span').text());
  } else if ($(this).parent().hasClass('optt-3')) {
    $('.zlk-sndwch-sec-1 .opt-3').text($(this).find('span').text());
  }
});
$('.acc-btn').click(function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).find('svg.minus').removeClass('active');
    $(this).find('svg.plus').addClass('active');
    $(this).parent().parent().find('.ccont').slideUp(300);
    if ($(this).find('.title').hasClass('changeee')) {
      $(this).find('.title').text('Показать таблицу размеров')
    }
  } else {
    $('.acc-btn').removeClass('active');
    $('.acc').find('svg.minus').removeClass('active');
    $('.acc').find('svg.plus').addClass('active');
    $(this).find('svg.minus').addClass('active');
    $(this).find('svg.plus').removeClass('active');
    $(this).addClass('active');
    $(this).parent().parent().find('.ccont').slideUp(300);
    $(this).parent().find('.ccont').slideDown(300);
    if ($(this).find('.title').hasClass('changeee')) {
      $(this).find('.title').text('Скрыть таблицу размеров')
    }
  }
});
$('.divisions-trigger').click(function () {
  $(this).find('.minus').toggleClass('active');
  $(this).find('.plus').toggleClass('active');
  $('.filtrs-tags').slideToggle(300);
});

(function () {

  var doc = document.documentElement;
  var w = window;

  /*
  define four variables: curScroll, prevScroll, curDirection, prevDirection
  */

  var curScroll;
  var prevScroll = w.scrollY || doc.scrollTop;
  var curDirection = 0;
  var prevDirection = 0;

  /*
  how it works:
  -------------
  create a scroll event listener
  create function to check scroll position on each scroll event,
  compare curScroll and prevScroll values to find the scroll direction
  scroll up - 1, scroll down - 2, initial - 0
  then set the direction value to curDirection
  compare curDirection and prevDirection
  if it is different, call a function to show or hide the header
  example:
  step 1: user scrolls down: curDirection 2, prevDirection 0 > hide header
  step 2: user scrolls down again: curDirection 2, prevDirection 2 > already hidden, do nothing
  step 3: user scrolls up: curDirection 1, prevDirection 2 > show header
  */

  var header = document.querySelector('header');
  var toggled;
  var threshold = 50;

  var checkScroll = function () {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      // scrolled down
      curDirection = 2;
    } else {
      //scrolled up
      curDirection = 1;
    }

    if (curDirection !== prevDirection) {
      toggled = toggleHeader();
    }

    prevScroll = curScroll;
    if (toggled) {
      prevDirection = curDirection;
    }
  };

  var toggleHeader = function () {
    toggled = true;
    if (curDirection === 2 && curScroll > threshold) {
      header.classList.add('hide');
    } else if (curDirection === 1) {
      header.classList.remove('hide');
    } else {
      toggled = false;
    }
    return toggled;
  };

  window.addEventListener('scroll', checkScroll);

})();

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: 'body',
    offset: 100,
    duration: 0,
    triggerHook: 0,
  })
  .setTween(TweenMax.to("header", 1, {
    css: {
      background: '#fff'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: 'body',
    offset: 100,
    duration: 0,
    triggerHook: 0,
  })
  .setTween(TweenMax.to("header rect", 1, {
    css: {
      fill: '#003882'
    },
  }))
  .addTo(controller);
// TweenMax can tween any property of any object. We use this object to cycle through the array
var obj = {
  curImg: 0
};
const images_main_1 = [];
for (let i = 0; i < 120; i++) {
  let img;
  if (i < 9) {
    img = `img/panel_render/panel000${i + 1}.jpg`;
  } else if (i < 99) {
    img = `img/panel_render/panel00${i + 1}.jpg`;
  } else {
    img = `img/panel_render/panel0${i + 1}.jpg`;
  }
  images_main_1.push(img);
}
// create tween
var tween_1 = TweenMax.to(obj, 0.5, {
  curImg: images_main_1.length - 1, // animate propery curImg to number of images
  roundProps: "curImg", // only integers so it can be used as an array index
  repeat: 3, // repeat 3 times
  immediateRender: true, // load first image automatically
  ease: Linear.easeNone, // show every image the same ammount of time
  onUpdate: function () {
    $("#myimg_1").attr("src", images_main_1[obj.curImg]);
  }
});
// build scene
var scene_1 = new ScrollMagic.Scene({
    triggerElement: ".zlk-main-sec-6",
    triggerHook: 0,
    duration: 3000
  })
  .setTween(tween_1) // add indicators (requires plugin)
  .addTo(controller)


const images_main_2 = [];
for (let i = 0; i < 120; i++) {
  let img;
  if (i < 9) {
    img = `POGRUZKA/POGRUZKA000${i + 1}.jpg`;
  } else if (i < 99) {
    img = `POGRUZKA/POGRUZKA00${i + 1}.jpg`;
  } else {
    img = `POGRUZKA/POGRUZKA0${i + 1}.jpg`;
  }
  images_main_2.push(img);
}
var tween_2 = TweenMax.to(obj, 0.5, {
  curImg: images_main_2.length - 1, // animate propery curImg to number of images
  roundProps: "curImg", // only integers so it can be used as an array index
  repeat: 3, // repeat 3 times
  immediateRender: true, // load first image automatically
  ease: Linear.easeNone, // show every image the same ammount of time
  onUpdate: function () {
    $("#myimg_2").attr("src", images_main_2[obj.curImg]);
  }
});
// build scene
var scene_2 = new ScrollMagic.Scene({
    triggerElement: ".zlk-main-sec-7",
    triggerHook: 0,
    duration: 3000
  })
  .setTween(tween_2) // add indicators (requires plugin)
  .addTo(controller)


const images_main_4 = [];
for (let i = 0; i < 240; i++) {
  let img;
  if (i < 9) {
    img = `postroyka_doma/postroyka000${i + 1}.jpg`;
  } else if (i < 99) {
    img = `postroyka_doma/postroyka00${i + 1}.jpg`;
  } else {
    img = `postroyka_doma/postroyka0${i + 1}.jpg`;
  }
  images_main_4.push(img);
}
var tween_4 = TweenMax.to(obj, 0.5, {
  curImg: images_main_4.length - 1, // animate propery curImg to number of images
  roundProps: "curImg", // only integers so it can be used as an array index
  repeat: 3, // repeat 3 times
  immediateRender: true, // load first image automatically
  ease: Linear.easeNone, // show every image the same ammount of time
  onUpdate: function () {
    $("#myimg_4").attr("src", images_main_4[obj.curImg]);
  }
});

// build scene
var scene_4 = new ScrollMagic.Scene({
    triggerElement: ".zlk-main-sec-10",
    triggerHook: 0,
    duration: 3000
  })
  .setTween(tween_4) // add indicators (requires plugin)
  .addTo(controller)



const images_prod_1 = [];
for (let i = 0; i < 100; i++) {
  let img;
  if (i < 9) {
    img = `img/prod1/ezgif-frame-00${i + 1}.png`;
  } else if (i < 99) {
    img = `img/prod1/ezgif-frame-0${i + 1}.png`;
  } else {
    img = `img/prod1/ezgif-frame-${i + 1}.png`;
  }
  images_prod_1.push(img);
}
// create tween
var tween_prod_1 = TweenMax.to(obj, 0.5, {
  curImg: images_prod_1.length - 1, // animate propery curImg to number of images
  roundProps: "curImg", // only integers so it can be used as an array index
  repeat: 3, // repeat 3 times
  immediateRender: true, // load first image automatically
  ease: Linear.easeNone, // show every image the same ammount of time
  onUpdate: function () {
    $("#prod_vid_1").attr("src", images_prod_1[obj.curImg]);
  }
});

// build scene
var scene_prod_1 = new ScrollMagic.Scene({
    triggerElement: ".zlk-prod-sec-4 .sticky-cont",
    triggerHook: 0,
    duration: 5000
  })
  .setTween(tween_prod_1) // add indicators (requires plugin)
  .addTo(controller)


new ScrollMagic.Scene({
    triggerElement: '.zlk-main-sec-2',
    duration: 1500,
    triggerHook: 0,
  })
  .setTween(TweenMax.to(".zlk-main-sec-2 .custom-slider", 1, {
    css: {
      right: '50px'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-prod-sec-6',
    duration: 1500,
    triggerHook: 0,
  })
  .setTween(TweenMax.to(".zlk-prod-sec-6 .custom-slider", 1, {
    css: {
      right: '50px'
    },
  }))
  .addTo(controller);


new ScrollMagic.Scene({
    triggerElement: '.zlk-prod-sec-2',
    triggerHook: 0.5,
    duration: 800
  })
  .setTween(TweenMax.to(".zlk-prod-sec-2 .img-1", 1, {
    css: {
      top: '0'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-prod-sec-2',
    triggerHook: 0.5,
    duration: 800
  })
  .setTween(TweenMax.to(".zlk-prod-sec-2 .img-2", 1, {
    css: {
      top: '0'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-prod-sec-2',
    triggerHook: 0.5,
    duration: 800
  })
  .setTween(TweenMax.to(".zlk-prod-sec-2 .img-3", 1, {
    css: {
      top: '0'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-prod-sec-5',
    triggerHook: 0.8,
    duration: 1300
  })
  .setTween(TweenMax.to(".zlk-prod-sec-5 .anim-cont", 1, {
    css: {
      top: '0'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-about-sec-3',
    triggerHook: 0.7,
    duration: 800
  })
  .setTween(TweenMax.to(".zlk-about-sec-3 .img-1", 1, {
    css: {
      top: '0'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-about-sec-3',
    triggerHook: 0.7,
    duration: 800
  })
  .setTween(TweenMax.to(".zlk-about-sec-3 .img-2", 1, {
    css: {
      top: '0'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-about-sec-3',
    triggerHook: 0.7,
    duration: 800
  })
  .setTween(TweenMax.to(".zlk-about-sec-3 .img-3", 1, {
    css: {
      top: '0'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-prod-sec-11',
    duration: 400,
    triggerHook: 0.7,
  })
  .setTween(TweenMax.to(".zlk-prod-sec-11 .stage-1 .img-1", 1, {
    css: {
      top: 0
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-prod-sec-11',
    duration: 400,
    triggerHook: 0.6,
  })
  .setTween(TweenMax.to(".zlk-prod-sec-11 .stage-1 .img-2", 1, {
    css: {
      top: '50%'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-prod-sec-11 .stage-2',
    duration: 400,
    triggerHook: 0.8,
  })
  .setTween(TweenMax.to(".zlk-prod-sec-11 .stage-2 .img-1", 1, {
    css: {
      top: '0'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-prod-sec-11 .stage-2',
    duration: 400,
    triggerHook: 0.8,
  })
  .setTween(TweenMax.to(".zlk-prod-sec-11 .stage-2 .img-2", 1, {
    css: {
      top: '0'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-prod-sec-11 .stage-3',
    duration: 400,
    triggerHook: 0.8,
  })
  .setTween(TweenMax.to(".zlk-prod-sec-11 .stage-3 .img-1", 1, {
    css: {
      top: '0'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-prod-sec-11 .stage-4',
    duration: 400,
    triggerHook: 0.7,
  })
  .setTween(TweenMax.to(".zlk-prod-sec-11 .stage-4 .img-2", 1, {
    css: {
      top: '0'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-prod-sec-11 .stage-4',
    duration: 400,
    triggerHook: 0.5,
  })
  .setTween(TweenMax.to(".zlk-prod-sec-11 .stage-4 .img-1", 1, {
    css: {
      top: '50%'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-career-sec-3',
    duration: 400,
    triggerHook: 0.7,
  })
  .setTween(TweenMax.to(".zlk-career-sec-3 .stage-1 .img-1", 1, {
    css: {
      top: 0
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-career-sec-3',
    duration: 400,
    triggerHook: 0.6,
  })
  .setTween(TweenMax.to(".zlk-career-sec-3 .stage-1 .img-2", 1, {
    css: {
      top: '50%'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-career-sec-3 .stage-2',
    duration: 400,
    triggerHook: 0.8,
  })
  .setTween(TweenMax.to(".zlk-career-sec-3 .stage-2 .img-1", 1, {
    css: {
      top: '0'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-career-sec-3 .stage-2',
    duration: 400,
    triggerHook: 0.8,
  })
  .setTween(TweenMax.to(".zlk-career-sec-3 .stage-2 .img-2", 1, {
    css: {
      top: '0'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-career-sec-3 .stage-3',
    duration: 400,
    triggerHook: 0.8,
  })
  .setTween(TweenMax.to(".zlk-career-sec-3 .stage-3 .img-1", 1, {
    css: {
      top: '0'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-career-sec-3 .stage-4',
    duration: 400,
    triggerHook: 0.7,
  })
  .setTween(TweenMax.to(".zlk-career-sec-3 .stage-4 .img-2", 1, {
    css: {
      top: '0'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-career-sec-3 .stage-4',
    duration: 400,
    triggerHook: 0.5,
  })
  .setTween(TweenMax.to(".zlk-career-sec-3 .stage-4 .img-1", 1, {
    css: {
      top: '50%'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-prod-sec-4 .sticky-cont',
    duration: 400,
    triggerHook: 0,
  })
  .setTween(TweenMax.to(".zlk-prod-sec-4 h2", 1, {
    css: {
      marginTop: '-100px',
      opacity: 1
    },
  }))
  .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.zlk-prod-sec-4 .sticky-cont',
    duration: 400,
    triggerHook: 0,
  })
  .setTween(TweenMax.to(".zlk-prod-sec-4 .text", 1, {
    css: {
      marginTop: '-100px',
      opacity: 1
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-about-sec-2',
    triggerHook: 1,
    duration: 1500,
    offset: 200
  })
  .setTween(TweenMax.to(".zlk-about-sec-2 .slide .cont", 1, {
    css: {
      left: '30%'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-about-sec-2',
    triggerHook: 1,
    duration: 500,
    offset: 800
  })

  .setClassToggle('.zlk-about-sec-2 .year.second', 'animate')
  .addTo(controller);




new ScrollMagic.Scene({
    triggerElement: '.zlk-about-sec-5 .anim-cont',
    triggerHook: 0.3,
    duration: '30%'
  })
  .setTween(TweenMax.to(".zlk-about-sec-5 .slide", 1, {
    css: {
      opacity: '1'
    },
  }))
  .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.zlk-about-sec-5',
    triggerHook: 0,
    duration: 200
  })
  .setClassToggle('.zlk-about-sec-5 .slide', 'active')
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-about-sec-5',
    triggerHook: 0,
    duration: 100,
    offset: 200
  })
  .setTween(TweenMax.to(".zlk-about-sec-5 .slide-2", 1, {
    css: {
      marginBottom: '50px'
    },
  }))
  .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.zlk-about-sec-5',
    triggerHook: 0,
    duration: 100,
    offset: 200
  })
  .setTween(TweenMax.to(".zlk-about-sec-5 .slide-3", 1, {
    css: {
      marginBottom: '100px'
    },
  }))
  .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.zlk-about-sec-5',
    triggerHook: 0,
    duration: 100,
    offset: 200
  })
  .setTween(TweenMax.to(".zlk-about-sec-5 .slide-4", 1, {
    css: {
      marginBottom: '150px'
    },
  }))
  .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.zlk-about-sec-5',
    triggerHook: 0,
    duration: 100,
    offset: 200
  })
  .setTween(TweenMax.to(".zlk-about-sec-5 .slide-5", 1, {
    css: {
      marginBottom: '200px'
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-about-sec-5',
    triggerHook: 0,
    duration: 300,
    offset: 300
  })
  .setTween(TweenMax.to(".zlk-about-sec-5 .slide-2", 1, {
    css: {
      marginBottom: 0
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-about-sec-5',
    triggerHook: 0,
    duration: 300,
    offset: 300
  })
  .setTween(TweenMax.to(".zlk-about-sec-5 .slide-3", 1, {
    css: {
      marginBottom: 0
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-about-sec-5',
    triggerHook: 0,
    duration: 300,
    offset: 300
  })
  .setTween(TweenMax.to(".zlk-about-sec-5 .slide-4", 1, {
    css: {
      marginBottom: 0
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-about-sec-5',
    triggerHook: 0,
    duration: 300,
    offset: 300
  })
  .setTween(TweenMax.to(".zlk-about-sec-5 .slide-5", 1, {
    css: {
      marginBottom: 0
    },
  }))
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.zlk-about-sec-5',
    triggerHook: 0,
    duration: 300,
    offset: 300
  })
  .setClassToggle('.zlk-about-sec-5 h2', 'active')
  .addTo(controller);



// var frameNumber = 0, // start video at frame 0
//   // lower numbers = faster playback
//   playbackConst = 500,
//   // get page height from video duration
//   setHeight = document.querySelector(".blk-w-anim-video"),
//   setHeight1 = document.querySelector(".zlk-prod-sec-4 .sticky-cont"),
//   // select video element         
//   vid = document.getElementById('v0'),
//   vid1 = document.getElementById('v1');
// var vid = $('#v0')[0]; // jquery option


// vid.addEventListener('loadeddata', function () {
//   setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
// });
// vid1.addEventListener('loadeddata', function () {
//   setHeight1.style.height = Math.floor(vid1.duration) * playbackConst + 400 + document.body.clientHeight + "px";
// });
// Use requestAnimationFrame for smooth playback
// function scrollPlay() {
//   if (document.querySelector(".zlk-main-sec-6")) {
//     var frameNumber = (window.pageYOffset - document.querySelector(".zlk-main-sec-6").offsetTop) / playbackConst;
//     vid.currentTime = frameNumber;
//     window.requestAnimationFrame(scrollPlay);
//   }
// }

// function scrollPlayProd() {
//   if (document.querySelector(".zlk-prod-sec-4 .sticky-cont")) {
//     var frameNumber = (window.pageYOffset - document.querySelector(".zlk-prod-sec-4 .sticky-cont").offsetTop - 400) / playbackConst;
//     vid1.currentTime = frameNumber;
//     window.requestAnimationFrame(scrollPlayProd);
//   }
// }

function openimg() {
  if (window.pageYOffset >= document.querySelector(".zlk-prod-sec-2").offsetTop - 200) {}
}
if (document.querySelector('.animated-cont')) {
  document.querySelectorAll('.animated-cont').forEach(cont => {
    var animate_delay = window.innerHeight - cont.dataset.delayOnTop;
    var rect = cont.getBoundingClientRect();
    var block_top = rect.top + document.documentElement.scrollTop + animate_delay;
    var element_animated = false;

    function animationOnScroll() {
      if (!element_animated && document.documentElement.scrollTop + window.innerHeight > block_top) {
        element_animated = true;
        if (cont.querySelector('.onScroll-silver')) {
          cont.querySelectorAll('.onScroll-silver').forEach(item => {
            item.classList.add("animate");
          }, false);
        }
        if (cont.querySelector('.onScroll-text')) {
          cont.querySelectorAll('.onScroll-text').forEach(item => {
            item.classList.add("animate");
          }, false);
        }
      }
    }
    ready(animationOnScroll());
    window.addEventListener('scroll', (event) => {
      animationOnScroll()
    })
  }, false);
};

if (document.querySelector('.big-data')) {
  document.querySelectorAll('.big-data .cont').forEach(cont => {
    let dur = cont.offsetHeight / 2 + cont.parentNode.offsetHeight / 2
    new ScrollMagic.Scene({
        triggerElement: cont,
        triggerHook: 1,
        duration: dur,
      })
      .setTween(TweenMax.to(cont, 1, {
        css: {
          opacity: 1
        },
      }))
      .reverse(false)
      .addTo(controller);
  }, false);
};
if (document.querySelector('.his-img-cont')) {
  document.querySelectorAll('.his-img-cont').forEach(item => {
    new ScrollMagic.Scene({
        triggerElement: item.parentNode,
        triggerHook: .7,
        duration: 400,
      })
      .setTween(TweenMax.to(item, 1, {
        css: {
          marginTop: '0',
        },
      }))
      .addTo(controller);
  }, false);
}

if (document.querySelector('.his-text')) {
  document.querySelectorAll('.his-text').forEach(item => {
    new ScrollMagic.Scene({
        triggerElement: item,
        triggerHook: .85,
      })
      .setClassToggle(item, 'animate')
      .reverse(false)
      .addTo(controller);
  }, false);
}
if (document.querySelector('.his-silver')) {
  document.querySelectorAll('.his-silver').forEach(item => {
    new ScrollMagic.Scene({
        triggerElement: item,
        triggerHook: .4,
      })
      .setClassToggle(item, 'animate')
      .reverse(false)
      .addTo(controller);
  }, false);
}
if (document.querySelector('.big-his-text')) {
  document.querySelectorAll('.big-his-text').forEach(item => {
    new ScrollMagic.Scene({
        triggerElement: item.parentNode,
        triggerHook: .35,
        duration: 400,
      })
      .setTween(TweenMax.to(item, 1, {
        css: {
          marginTop: '0',
          opacity: 1,
        },
      }))
      .reverse(false)
      .addTo(controller);
  }, false);
}
if (document.querySelector('.current-year-content')) {
  for (let i = 0; i < document.querySelectorAll('.current-year-content .point').length; i++) {
    document.querySelectorAll('.current-year-content .point')[i].querySelector('.number').textContent = i + 1
  }
}


// /**
//  * Copyright: 2018 La Lengua
//  * Original author: lengua.la
//  * License: CC 3.0 - NcBySa
//  **/
// // detect if browser firefox as it apears to be the only
// //  browser that return deltaModes different than DOM_DELTA_PIXEL
// //  Ref: https://stackoverflow.com/a/37474225/4146962
// // var FF = !(window.mozInnerScreenX == null);

// // Function grabbed from the refference above
// // It tries to read current line-height of document (for 'lines' deltaMode)
// function getScrollLineHeight() {
//   var r;
//   var iframe = document.createElement('iframe');
//   iframe.src = '#';
//   document.body.appendChild(iframe);
//   var iwin = iframe.contentWindow;
//   var idoc = iwin.document;
//   idoc.open();
//   idoc.write('<!DOCTYPE html><html><head></head><body><span>a</span></body></html>');
//   idoc.close();
//   var span = idoc.body.firstElementChild;
//   r = span.offsetHeight;
//   document.body.removeChild(iframe);
//   return r;
// }

// // html5 elements
// var vid = document.getElementById("v"); // HTML5 video element
// var canvas = document.getElementById("c"); // HTML5 canvas element
// var context = canvas.getContext('2d'); // Canvas context
// var momentum = document.getElementById('m'); // Current momentum display
// var delta = document.getElementById('d'); // Current deltaMode display
// var lineheight = document.getElementById('l'); // Current deltaMode display

// // Preloading videos bar & container
// var precarga = document.getElementById("precarga");
// var precontr = document.getElementById("precargacontainer");

// // Switching set
// var cod = {
//   "6": [
//     document.getElementById("cod6"), // html element
//     "/files/test.webm", // Video source
//     1 // Preload=0, No=1
//   ],
//   "24": [
//     document.getElementById("cod24"), // html element
//     "/files/test.webm", // Video source
//     1 // Preload=0, No=1
//   ],
// };

// // global variables
// var ch = 120; // canvas with (could be window.innerHeight)
// var cw = Math.round(ch * (16 / 9)); // 16/9 proportion width
// var targetOffset = 0; // Video offset target position when scrolling

// // deltaY to FPS coefficients (for fine tunning)
// // Posible mouse scroll wheel 'event.deltaMode'
// //  modes are: 0:'pixels', 1:'lines', 2:'page'
// var pc = 1000; // 'pixels' deltaY coefficient
// var lh = getScrollLineHeight(); // get line-height of deltaMode 'lines'
// lineheight.value = lh; // display current document line height
// var modeCoefficient = [
//   pc, // 'pixels' scrolling
//   (pc / lh), // 'lines' scrolling. This corresponds to pixels-coefficient/body-line-height ?
//   0, // 'page' scrolling. This is disabled in this example
// ];
// var modes = ['pixels', 'lines', 'page']; // For deltaMode display

// // Sets canvas dimentions
// canvas.width = cw;
// canvas.height = ch;

// // Pauses video (this also starts to load the video)
// vid.pause();

// // Listens video changes time position
// vid.addEventListener('seeked', function () {
//   // Updates canvas with current video frame
//   context.drawImage(vid, 0, 0, cw, ch);
// });

// // Listens mouse scroll wheel
// window.addEventListener('wheel', function (e) {

//   // Don't do what scroll wheel normally does
//   e.preventDefault();

//   // Changed this to consider deltaMode as partially
//   //   solves browser differences (chrome vs firefox).
//   var coefficient = modeCoefficient[e.deltaMode];
//   delta.value = modes[e.deltaMode];

//   // Disable page scrolling, modes[e.deltaMode]=='page'
//   if (coefficient <= 0) return false;

//   // Normally scrolling this should be a substraction 
//   //   not a sum but "I like it like this!"
//   targetOffset = targetOffset + (e.deltaY / coefficient); // e.deltaY is the thing!!

//   // Shows current momentum
//   momentum.value = targetOffset;

//   return false;
// });

// // Updates canvas on a loop (both for play or pause state)
// var renderLoop = function () {
//   requestAnimationFrame(function () {

//     // This parts updates canvas when video is paused
//     // Needs 'seeked' listener avobe
//     if (vid.paused || vid.ended) {

//       // Reduce target offset gradually
//       targetOffset = targetOffset * 0.9;
//       // Show current momentum
//       momentum.value = targetOffset.toFixed(2);

//       // this part joins start and end of video when scrolling
//       // forward & backwards
//       var vct = vid.currentTime - targetOffset;
//       if (vct < 0) {
//         vct = vid.duration + vct;
//       } else if (vct > vid.duration) {
//         vct = vct - vid.duration;
//       }
//       vid.currentTime = parseFloat(vct.toFixed(2));

//       // This parts updates canvas when video is playing
//     } else {
//       // update canvas with current video frame
//       context.drawImage(vid, 0, 0, cw, ch);
//     }

//     renderLoop(); // Recursive call to loop
//   });
// };

// // Preload videos
// var videoPreload = function (iv) {
//   if (cod[iv][2] < 1) {
//     // Preload video when needed
//     precontr.style.visibility = 'visible';
//     var xhrReq = new XMLHttpRequest();
//     xhrReq.open('GET', cod[iv][1], true);
//     xhrReq.responseType = 'blob';
//     xhrReq.onload = function () {
//       if (this.status === 200) {
//         cod[iv][1] = URL.createObjectURL(this.response);
//         vid.src = cod[iv][1];
//         cod[iv][2] = 1; // Video loaded
//       }
//     }
//     xhrReq.onerror = function () {
//       console.log('err', arguments);
//     }
//     xhrReq.onprogress = function (e) {
//       if (e.lengthComputable) {
//         var percentComplete = ((e.loaded / e.total) * 100 | 0);
//         precarga.value = percentComplete;

//         if (percentComplete >= 99) precontr.style.visibility = 'hidden';
//       }
//     }
//     xhrReq.send();
//   } else {
//     // Preloaded already (or normal loading)
//     vid.src = cod[iv][1];
//   }
// };

// // Switching video set
// var changeVideoSrc = function (iv) {
//   var ps = false;
//   var vct = vid.currentTime;
//   if (!vid.paused && !vid.ended) {
//     vid.pause();
//     ps = true;
//   }
//   videoPreload(iv);
//   vid.currentTime = parseFloat(vct.toFixed(2));
//   if (ps) vid.play();
// };
// cod["6"][0].addEventListener('click', function () {
//   this.style.background = "#F40";
//   cod["24"][0].style.background = "#eee";
//   changeVideoSrc("6");
// });
// cod["24"][0].addEventListener('click', function () {
//   this.style.background = "#F40";
//   cod["6"][0].style.background = "#eee";
//   changeVideoSrc("24");
// });
// changeVideoSrc("6");
// renderLoop(); // Initial call to loop