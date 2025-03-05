// //デフォルト状態でwebdesignがactive
// window.addEventListener('load', () => {
// webdesign_btn.classList.add('active');

// webdesign_section.style.display = 'block';
// illustration_section.style.display = 'none';


// });
// //タブ切り替え
// const webdesign_btn = document.getElementById('webdesign_btn');
// const illustration_btn = document.getElementById('illustration_btn');
// const webdesign_section = document.getElementById('webdesign_section');
// const illustration_section = document.getElementById('illustration_section');

// window.addEventListener('load', () => {
//   webdesign_btn.classList.add('active');
// });

// webdesign_btn.addEventListener('click', () => {
//   webdesign_btn.classList.add('active');
//   illustration_btn.classList.remove('active');
//   webdesign_section.style.display = 'block';
//   illustration_section.style.display = 'none';
// });

// illustration_btn.addEventListener('click', () => {
//   webdesign_btn.classList.remove('active');
//   illustration_btn.classList.add('active');
//   webdesign_section.style.display = 'none';
//   illustration_section.style.display = 'block';
// });




// ページ内リンク
$(function(){
  $('.s_05 a.close_btn').click(function() {
    // 移動先を0px上にずらす
    var adjust = 0;
    // スクロールの速度
    var speed = 500; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    var position = target.offset().top - adjust;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

$(function(){
  $(window).scroll(function(){
      $('.fadein').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 150){
              $(this).addClass('scrollin');
          }
      });
  });
});

// 　スクロールハイライト
document.addEventListener("DOMContentLoaded", () => {
  const sections = [
    { id: "illustration_section", btn: "illustration_btn" },
    { id: "webdesign_section", btn: "webdesign_btn" },
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const btn = document.getElementById(
          sections.find((s) => s.id === entry.target.id)?.btn
        );

        if (btn) {
          if (entry.isIntersecting) {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        }
      });
    },
    { threshold: 0.1 } // 20%以上表示されたら発火
  );

  sections.forEach((section) =>
    observer.observe(document.getElementById(section.id))
  );
});
        
