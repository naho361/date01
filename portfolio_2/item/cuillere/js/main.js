// JavaScript Document

jQuery(window).load(function(){
    $('#container').masonry({
     itemSelector: '.box',
    isAnimated: true, //スムースアニメーション設定
	isFitWidth: true,
    });
  });

$(function(){
	$('#slide').fullslide({
		intval: 800,
		speed: 1300
	});
});

$(document).ready(function() {
	$("#news").jScrollPane({
		showArrows	 : true 
	});
});

$(function(){
  $(".alpha2").hover(function(){
    $(this).fadeTo("normal", 0.4);
  },function(){
    $(this).fadeTo("normal", 1.0);
  });
});

