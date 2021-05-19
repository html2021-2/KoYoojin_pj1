$(document).ready(function () {
	// gnb full down navigation
	// 1) 변수선언
	var $gnb = $('#gnb > ul');
	$gnb.find('li ul').hide();

	// 2) 뎁스1 li에 마우스(mouseenter) 키보드(focusin) 제어
	$gnb.children().on('mouseenter focusin', function () {
		// 2-1) 모든 뎁스2 ul을 동시에 열기
		$gnb.find('li ul').stop().slideDown();
		// 2-2) 현재 li.on 추가, 나머지 li는 .on 제거
		$(this).addClass('on').siblings().removeClass('on');
		// 
		$(this).closest('#header').addClass('active');	//#header 배경색 생성을 위한 클래스명 추가
	});

	// 3) 뎁스1 ul에서 마우스 나오기(mouseleave)
	$gnb.on('mouseleave', function () {
		// 모든 ul 닫기, li에 .on 제거
		$(this).children().removeClass('on').children('ul').stop().slideUp();
		$('#header').removeClass('active');
	});

	// 4) 가장 첫번째(shift+tab), 마지막(!shift+tab) a에서 포커스 나오기(blur)
	$gnb.find('a:first').on('keydown', function (e) {
		//console.log(e.keyCode); //9
		if (e.shiftKey && e.keyCode === 9) $gnb.trigger('mouseleave');
	});
	$gnb.find('a:last').on('keydown', function (e) {
		if (!e.shiftKey && e.keyCode === 9) $gnb.trigger('mouseleave');
	});

	// top 이동 버튼
	$(".btn_top").on("click", function () {
		$("html, body").stop().animate({scrollTop: 0});
		return false;
	});

});