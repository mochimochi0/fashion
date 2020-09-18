'use strict'



// 画像が次々切り替わる
window.onload =function(){
  const images = ["img/top-img4.jpg","img/top-img2.jpg","img/top-img6.jpg"];

  let count = 0;

  const slideimage =()=>{
    if(count >= images.length){
      count = 0;
    }else{
      document.getElementById('slideshow').src = images[count];
      count++;
    }
  }

  setInterval(slideimage,2500);

  //message部分・画像がスクロールと一緒にフワッと出る
  $(function(){
    $(window).scroll(function (){
      $('.fadein').each(function(){
        var elemPos = $(this).offset().top;//offsetは画面の左上からの距離を取得
        var scroll = $(window).scrollTop();//スクロールバーのスクロール位置
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight +200){
          $(this).addClass('scrollin');
        }
      });
    });  

  });
  
  
};

