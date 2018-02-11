$(function() {
	var btns = $('<a href="#" class="btn btn-left"><i class="fa fa-chevron-circle-left"></i></a><a href="#" class="btn btn-right"><i class="fa fa-chevron-circle-right"></i></a>');
	$('.slider').append(btns);

	var count = $('.slider li').length-1; //.size()
	var now = 0;

	$('.btn-right').click(function(event) {
		now ++; // now += 1 // now = now +1
		if(now>count){
			now = 0;
		}
		$('.slider ul').animate({marginLeft: -now*800}, 500)
	});

	$('.btn-left').click(function(event) {
		now --;
		if(now<0){
			now = count;
		}
		$('.slider ul').animate({marginLeft: -now*800}, 500)
	});

	function slidePlay(){
		$('.btn-right').click();
		setTimeout(slidePlay,3000);
	}

	slidePlay();
});