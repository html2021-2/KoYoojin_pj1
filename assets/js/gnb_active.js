$(document).ready(function (){
	var $gnb=$("#gnb>ul");
	var dep1 = $('body').data('dep-one') - 1;       
	console.log("depth1? "+dep1);
	
	$gnb.find("li ul").hide();	//depth2의 ul 태그는 자동으로 숨기고 시작

	//1)depth1 <a>에 마우스 진입:mouseenter, focus
	$gnb.find(">li>a").on("mouseenter focus",function  () {
		//초기화
		$gnb.find(">li.on").removeClass("on").children("ul").hide();
		//현재설정
		$(this).next().show().parent().addClass("on");
	});

	//2)nav에서 마우스 떠나기:mouseleave
	$gnb.on("mouseleave",function  () {
		//초기화
		$gnb.find(">li.on").removeClass("on").children("ul").hide();

		//현재페이지활성화:dep1, dep2변수 사용
		if (dep1>=0) {		//index를 제외한 서브페이지만 동작
			//dep1제어=>.on
			$gnb.children().eq(dep1).addClass("on");
		}
	});

	$gnb.trigger("mouseleave");

	//3)blur: shift탭을 눌러서 gnb에서 포커스가 나가던지, 탭을 눌러 gnb에서 포커스가 나가던지, 
	$("#gnb a:first , #gnb a:last").on("blur",function  () {
		setTimeout(function  () {
			if ( !$("#gnb a").is(":focus") ) {
				$gnb.mouseleave();
			}
		}, 10);
	});

});