$(function () {

	/** アコーディオン ************************************************************/

	var _width = $(window).width();

	// フッター（サイトマップ）

	$('.footer-wrapper-box-mid-box-sitemap-box dl dt').click(function () {
		$(this).toggleClass('active');
		$(this).next('.footer-wrapper-box-mid-box-sitemap-box dl dd').slideToggle(300);
	});


	// 商品情報（キャラクター名）
	$('.main-wrapper-archive-01.layout-01 .main-wrapper-archive-01-body-box-title').click(function () {
		$(this).toggleClass('active');
		$(this).next('.main-wrapper-archive-01.layout-01 .main-wrapper-archive-01-body-box-box').slideToggle(300);
	});

	// お問い合わせ（よくある質問）
	$('.main-wrapper-article-09-body-box dl dt').click(function () {
		$(this).toggleClass('active');
		$(this).next('.main-wrapper-article-09-body-box dl dd').slideToggle(300);
	});

});



const footer = document.createElement('footer');
footer.innerHTML = `

<div class="">
  
  <div class="footer-wrapper">

	<div class="footer-wrapper-box">
		<div class="footer-wrapper-box-pagetop">
			<a href="#" style="position: absolute; bottom: initial; right: 0%;">
				<span>
					TOP
				</span>
			</a>
		</div>

		<div class="footer-wrapper-box-top">
			<div class="footer-wrapper-box-top-box">
				<!-- ↓footer-wrapper-box-top-box-sns ------------------------------------------------>
				<div class="footer-wrapper-box-top-box-sns">
					<ul>
						<li class="layout-01">
							<a href="https://twitter.com/sunstar_now" target="_blank">
								<img src="https://www.sun-star-st.jp/wp-content/themes/wppackage/assets/img/common/img_common_footer-x.png">
							</a>
						</li>
						<li class="layout-02">
							<a href="https://www.instagram.com/sunstar_now/" target="_blank">
								<img src="https://www.sun-star-st.jp/wp-content/themes/wppackage/assets/img/common/img_common_footer-instagram.png">
							</a>
						</li>
						<li class="layout-03">
							<a href="https://www.youtube.com/user/SunStarStationery" target="_blank">
								<img src="https://www.sun-star-st.jp/wp-content/themes/wppackage/assets/img/common/img_common_footer-youtube.png">
							</a>
						</li>
						<li class="layout-04">
							<a href="https://www.tiktok.com/@sunstar_st_idea_products" target="_blank">
								<img src="https://www.sun-star-st.jp/wp-content/themes/wppackage/assets/img/common/img_common_footer-tiktok.png">
							</a>
						</li>
					</ul>
				</div>
				<!-- ↑footer-wrapper-box-top-box-sns ------------------------------------------------>
			</div>
		</div>

		<div class="footer-wrapper-box-mid">
			<div class="footer-wrapper-box-mid-box">
				<!-- ↓footer-wrapper-box-mid-box-sitemap ------------------------------------------------>
				<div class="footer-wrapper-box-mid-box-sitemap">
					<div class="footer-wrapper-box-mid-box-sitemap-box layout-01">
						<dl>
							<dt>
								商品情報<i></i>
							</dt>
							<dd>
								<ul>
									<li>
										<a href="https://www.sun-star-st.jp/items/">
											商品検索
										</a>
									</li>
									<li>
										<a href="https://www.sun-star-st.jp/items_category/new/">
											新着商品
										</a>
									</li>
									<li>
										<a href="https://www.sun-star-st.jp/items_category/basic-character/">
											ベーシックキャラアイテム
										</a>
									</li>
									<li>
										<a href="https://www.sun-star-st.jp/items_category/basic-noncharacter/">
											ベーシックノンキャラアイテム
										</a>
									</li>
								</ul>
							</dd>
						</dl>
					</div>
					<div class="footer-wrapper-box-mid-box-sitemap-box layout-02">
						<dl>
							<dt>
								トピックス<i></i>
							</dt>
							<dd>
								<ul>
									<li>
										<a href="https://www.sun-star-st.jp/topics/">
											全てのトピックス
										</a>
									</li>
									<li>
										<a href="https://www.sun-star-st.jp/topics_category/news/">
											お知らせ
										</a>
									</li>
									<li>
										<a href="https://www.sun-star-st.jp/topics_category/feature/">
											特集
										</a>
									</li>
									<li>
										<a href="https://www.sun-star-st.jp/topics_category/event/">
											イベント
										</a>
									</li>
								</ul>
							</dd>
						</dl>
					</div>
					<div class="footer-wrapper-box-mid-box-sitemap-box layout-03">
						<dl>
							<dt>
								会社情報<i></i>
							</dt>
							<dd>
								<ul>
									<li>
										<a href="https://www.sun-star-st.jp/company/">
											概要
										</a>
									</li>
									<li>
										<a href="https://www.sun-star-st.jp/company/message/">
											代表挨拶
										</a>
									</li>
									<li>
										<a href="https://www.sun-star-st.jp/company/shop/">
											ショップ
										</a>
									</li>
									<li>
										<a href="https://www.sun-star-st.jp/company/history/">
											歴史
										</a>
									</li>
									<li>
										<a href="https://www.sun-star-st.jp/recruit/">
											採用情報
										</a>
									</li>
								</ul>
							</dd>
						</dl>
					</div>
					<div class="footer-wrapper-box-mid-box-sitemap-box layout-04">
						<dl>
							<dt>
								アイデアコンテスト<i></i>
							</dt>
							<dd>
								<ul>
									<li>
										<a href="https://www.sun-star-st.jp/ideacontest/">
											アイデアコンテスト
										</a>
									</li>
									<li>
										<a href="https://www.sun-star-st.jp/rokuichibungu/">
											ロクイチブング
										</a>
									</li>
								</ul>
							</dd>
						</dl>
					</div>
					<div class="footer-wrapper-box-mid-box-sitemap-box layout-05">
						<dl>
							<dt>
								その他<i></i>
							</dt>
							<dd>
								<ul>
									<li>
										<a href="https://www.sun-star-st.jp/contact/">
											お問い合わせ
										</a>
									</li>
									<li>
										<a href="https://www.sun-star-st.jp/privacy/">
											個人情報の取り扱い
										</a>
									</li>
									<li>
										<a href="https://www.sun-star-st.jp/terms/">
											ご利用規約
										</a>
									</li>
								</ul>
							</dd>
						</dl>
					</div>
				</div>
				<!-- ↑footer-wrapper-box-mid-box-sitemap ------------------------------------------------>
			</div>
		</div>

		<div class="footer-wrapper-box-bot">
			<div class="footer-wrapper-box-bot-box">
				<div class="footer-wrapper-box-bot-box-01">
					<!-- ↓footer-wrapper-box-bot-box-01-logo ------------------------------------------------>
					<div class="footer-wrapper-box-bot-box-01-logo">
						<span>
							<a href="https://www.sun-star-st.jp">
								<picture>
									<source media="(max-width: 600px)" srcset="https://www.sun-star-st.jp/wp-content/themes/wppackage/assets/img/common/img_common_footer-logo01-sp.png">
									<img src="https://www.sun-star-st.jp/wp-content/themes/wppackage/assets/img/common/img_common_footer-logo01.png">
								</picture>
							</a>
						</span>
					</div>
					<!-- ↑footer-wrapper-box-bot-box-01-logo ------------------------------------------------>
					<!-- ↓footer-wrapper-box-bot-box-01-bnr ------------------------------------------------>
					<div class="footer-wrapper-box-bot-box-01-bnr">
						<ul>
							<li class="layout-01">
								<a href="https://www.rakuten.co.jp/sun-star/" target="_blank">
									<img src="https://www.sun-star-st.jp/wp-content/themes/wppackage/assets/img/common/img_common_footer-bnr01.png">
								</a>
							</li>
							<li class="layout-02">
								<a href="https://www.amazon.co.jp/stores/%E3%82%B5%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E6%96%87%E5%85%B7Sun-StarStationery/%E3%82%B5%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E6%96%87%E5%85%B7Sun-StarStationery/page/CE1FE83C-581A-4DF2-990F-74CBF42BED76" target="_blank">
									<img src="https://www.sun-star-st.jp/wp-content/themes/wppackage/assets/img/common/img_common_footer-bnr02.png">
								</a>
							</li>
							<li class="layout-03">
								<a href="https://www.bandainamco.co.jp/" target="_blank">
									<picture>
										<source media="(max-width: 600px)" srcset="https://www.sun-star-st.jp/wp-content/themes/wppackage/assets/img/common/img_common_footer-logo11-sp.png">
										<img src="https://www.sun-star-st.jp/wp-content/themes/wppackage/assets/img/common/img_common_footer-logo11.png">
									</picture>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div class="footer-wrapper-box-bot-box-02">
					<!-- ↓footer-wrapper-box-bot-box-02-copyright ------------------------------------------------>
					<div class="footer-wrapper-box-bot-box-02-copyright">
						<span>
							©︎ 2022 Sun-Star Stationery Co., Ltd.
						</span>
					</div>
					<!-- ↑footer-wrapper-box-bot-box-02-copyright ------------------------------------------------>
				</div>
			</div>
		</div>
	</div>
</div>

</div> 
`;

const style = document.createElement('style');
const newLocal = `
.footer-wrapper {
  margin: 0 auto;
  padding: 50px 50px 10px;
  background: #222;
}

@media screen and (max-width: 768px) {
  .footer-wrapper {
    padding: 50px 20px 20px;
  }
}

@media screen and (max-width: 650px) {
  .footer-wrapper {
    padding: 60px 20px 20px;
  }
}

.footer-wrapper-box {
  position: relative;
}

.footer-wrapper-box-pagetop {
  position: absolute;
  top: -80px;
  right: 50px;
  z-index: 999;
}

@media screen and (max-width: 650px) {
  .footer-wrapper-box-pagetop {
    top: -80px;
    right: 0;
  }
}

.footer-wrapper-box-pagetop a {
  width: calc(128px * 0.5);
  height: calc(128px * 0.5);
  text-indent: -9999px;
  display: block;
  border-radius: 50%;
  background: url(../img/common/img_common_footer-pagetop01.png) no-repeat center top/100% auto;
}

@media screen and (max-width: 650px) {
  .footer-wrapper-box-pagetop a {
    width: calc(80px * 0.5);
    height: calc((80px * 0.5));
    background: url(../img/common/img_common_footer-pagetop01-sp.png) no-repeat center top/100% auto;
  }
}

.footer-wrapper-box-pagetop a:hover {
  opacity: 0.95;
}

.footer-wrapper-box-top-box-sns ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.footer-wrapper-box-top-box-sns ul li {
  margin-right: 30px;
}

.footer-wrapper-box-top-box-sns ul li:last-child {
  margin-right: 0;
}

.footer-wrapper-box-top-box-sns ul li.layout-01 {
  width: calc(55px * 0.5);
  height: calc(55px * 0.5);
}

.footer-wrapper-box-top-box-sns ul li.layout-02 {
  width: calc(64px * 0.5);
  height: calc(64px * 0.5);
}

.footer-wrapper-box-top-box-sns ul li.layout-03 {
  width: calc(77px * 0.5);
  height: calc(54px * 0.5);
}

.footer-wrapper-box-top-box-sns ul li.layout-04 {
  width: calc(56px * 0.5);
  height: calc(64px * 0.5);
}

.footer-wrapper-box-top-box-sns ul li a {
  opacity: 1 !important;
}

.footer-wrapper-box-top-box-sns ul li a:hover img {
  opacity: 1 !important;
  transform: scale(1.05, 1.05);
  transition: 0.4s all;
}

.footer-wrapper-box-top-box-sns ul li a img {
  width: 100%;
}

.footer-wrapper-box-mid {
  margin-top: 40px;
}

@media screen and (max-width: 650px) {
  .footer-wrapper-box-mid {
    max-width: 480px;
    margin: auto;
    margin-top: 60px;
  }
}

.footer-wrapper-box-mid-box {
  max-width: 1160px;
  margin: auto;
}

.footer-wrapper-box-mid-box-sitemap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media screen and (max-width: 1100px) {
  .footer-wrapper-box-mid-box-sitemap {
    justify-content: flex-start;
    margin-bottom: -30px;
  }
}

.footer-wrapper-box-mid-box-sitemap-box {
  width: 16.5%;
}

@media screen and (max-width: 1100px) {
  .footer-wrapper-box-mid-box-sitemap-box {
    width: 30%;
    margin-right: 5%;
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 650px) {
  .footer-wrapper-box-mid-box-sitemap-box {
    width: 100%;
    margin-right: 0;
    margin-bottom: 0;
  }
}

@media screen and (max-width: 1100px) {
  .footer-wrapper-box-mid-box-sitemap-box:nth-of-type(3n) {
    margin-right: 0;
  }
}

.footer-wrapper-box-mid-box-sitemap-box > dl {
  padding: 0;
}

@media screen and (max-width: 650px) {
  .footer-wrapper-box-mid-box-sitemap-box > dl {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    margin-bottom: -1px;
  }
}

.footer-wrapper-box-mid-box-sitemap-box > dl > dt {
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  line-height: 150%;
  padding: 0 0 5px;
  border-bottom: 1px solid #fff;
}

@media screen and (max-width: 650px) {
  .footer-wrapper-box-mid-box-sitemap-box > dl > dt {
    font-size: 14px;
    padding: 10px 30px 10px 15px;
    border-bottom: none;
    position: relative;
  }
}

.footer-wrapper-box-mid-box-sitemap-box > dl > dt.active i {
  transform: rotate(180deg);
}

.footer-wrapper-box-mid-box-sitemap-box > dl > dt i {
  width: calc(25px * 0.5);
  height: calc(14px * 0.5);
  display: none;
  background: url(../img/common/img_common_footer-ico01-sp.png) no-repeat center top/100% auto;
  position: absolute;
  top: 17px;
  right: 15px;
  cursor: pointer;
}

@media screen and (max-width: 650px) {
  .footer-wrapper-box-mid-box-sitemap-box > dl > dt i {
    display: block;
  }
}

.footer-wrapper-box-mid-box-sitemap-box > dl > dd {
  margin-top: 10px;
}

@media screen and (max-width: 650px) {
  .footer-wrapper-box-mid-box-sitemap-box > dl > dd {
    display: none;
    margin-top: 0;
    padding: 0 10px 15px 20px;
  }
}

.footer-wrapper-box-mid-box-sitemap-box > dl > dd > ul > li {
  line-height: 110%;
  margin-bottom: 12px;
  padding: 0 0 0 12px;
  position: relative;
}

@media screen and (max-width: 650px) {
  .footer-wrapper-box-mid-box-sitemap-box > dl > dd > ul > li {
    margin-bottom: 8px;
  }
}

.footer-wrapper-box-mid-box-sitemap-box > dl > dd > ul > li:before {
  width: 3px;
  height: 1px;
  color: #fff;
  position: absolute;
  top: 2px;
  left: 0;
  content: "-";
}

.footer-wrapper-box-mid-box-sitemap-box > dl > dd > ul > li:last-child {
  margin-bottom: 0;
}

.footer-wrapper-box-mid-box-sitemap-box > dl > dd > ul > li > a {
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  line-height: 110%;
  text-decoration: none;
}

.footer-wrapper-box-bot {
  width: 100%;
  margin-top: 30px;
}

@media screen and (max-width: 650px) {
  .footer-wrapper-box-bot {
    margin-top: 80px;
  }
}

.footer-wrapper-box-bot-box-01 {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 650px) {
  .footer-wrapper-box-bot-box-01 {
    max-width: 300px;
    height: 120px;
    align-items: initial;
    justify-content: center;
    margin: auto;
    position: relative;
  }
}

@media screen and (max-width: 650px) {
  .footer-wrapper-box-bot-box-01-logo {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

.footer-wrapper-box-bot-box-01-logo span {
  width: calc(160px * 0.5);
  height: calc(118px * 0.5);
  display: block;
}

@media screen and (max-width: 1100px) {
  .footer-wrapper-box-bot-box-01-logo span {
    width: calc(118px * 0.4);
    height: calc(83px * 0.4);
  }
}

@media screen and (max-width: 650px) {
  .footer-wrapper-box-bot-box-01-logo span {
    width: calc(118px * 0.5);
    height: calc(83px * 0.5);
  }
}

.footer-wrapper-box-bot-box-01-logo span a {
  display: block;
}

.footer-wrapper-box-bot-box-01-logo span a img {
  width: 100%;
}

.footer-wrapper-box-bot-box-01-bnr ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-wrapper-box-bot-box-01-bnr ul li {
  margin-left: 15px;
}

@media screen and (max-width: 768px) {
  .footer-wrapper-box-bot-box-01-bnr ul li {
    margin-left: 10px;
  }
}

.footer-wrapper-box-bot-box-01-bnr ul li:first-child {
  margin-left: 0;
}

.footer-wrapper-box-bot-box-01-bnr ul li.layout-01 {
  width: calc(270px * 0.5);
  height: calc(96px * 0.5);
}

@media screen and (max-width: 340px) {
  .footer-wrapper-box-bot-box-01-bnr ul li.layout-01 {
    width: calc(270px * 0.4);
    height: calc(96px * 0.4);
  }
}

.footer-wrapper-box-bot-box-01-bnr ul li.layout-02 {
  width: calc(272px * 0.5);
  height: calc(96px * 0.5);
}

@media screen and (max-width: 340px) {
  .footer-wrapper-box-bot-box-01-bnr ul li.layout-02 {
    width: calc(272px * 0.4);
    height: calc(96px * 0.4);
  }
}

.footer-wrapper-box-bot-box-01-bnr ul li.layout-03 {
  width: calc(433px * 0.5);
  height: calc(100px * 0.5);
  margin-left: 40px;
}

@media screen and (max-width: 1100px) {
  .footer-wrapper-box-bot-box-01-bnr ul li.layout-03 {
    width: calc(433px * 0.4);
    height: calc(100px * 0.4);
    margin-left: 20px;
  }
}

@media screen and (max-width: 650px) {
  .footer-wrapper-box-bot-box-01-bnr ul li.layout-03 {
    width: calc(254px * 0.5);
    height: calc(59px * 0.5);
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
  }
}

.footer-wrapper-box-bot-box-01-bnr ul li.layout-03 a {
  opacity: 1 !important;
}

.footer-wrapper-box-bot-box-01-bnr ul li.layout-03 a:hover img {
  opacity: 0.8 !important;
  transform: initial;
  transition: initial;
}

.footer-wrapper-box-bot-box-01-bnr ul li a {
  opacity: 1 !important;
}

.footer-wrapper-box-bot-box-01-bnr ul li a:hover img {
  opacity: 1 !important;
  transform: scale(1.05, 1.05);
  transition: 0.4s all;
}

.footer-wrapper-box-bot-box-01-bnr ul li a img {
  width: 100%;
}

.footer-wrapper-box-bot-box-02 {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #fff;
}

@media screen and (max-width: 650px) {
  .footer-wrapper-box-bot-box-02 {
    margin-top: 60px;
    padding-top: 0;
    border-top: none;
  }
}

@media screen and (max-width: 650px) {
  .footer-wrapper-box-bot-box-02-copyright {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

.footer-wrapper-box-bot-box-02-copyright span {
  color: #fff;
  font-family: 'Avenir Next';
  font-size: 12px;
  font-weight: bold;
}
`;
style.textContent = newLocal;

footer.appendChild(style);
// <footer> 要素を <body> の最後に追加
document.body.appendChild(footer);
