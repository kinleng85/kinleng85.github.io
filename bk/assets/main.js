/** * Created by Vitaly on 02.10.2015. */

jQuery(document).ready(function($){
	if ($(window).height() < $(window).width()) {
		var vidHeight = $(window).height() * 0.7;
		var vidWidth = vidHeight * 1.77777;
	} else {
		var vidWidth = $(window).width() * 0.9;
		var vidHeight = vidWidth / 1.77777;
	}
	
	//$(".youtube").YouTubeModal({autoplay:0, width:vidWidth, height:vidHeight, hideTitleBar: true, controls: 2, theme: ""});
    /*scroll menu*/
    var speed = 1500;
    var offsetTop = 55;
    var navAnchor = $('.home .nav a[href^="/#"]');

    $(document).on("scroll", onScroll);

    navAnchor.on('click', function(e){
        e.preventDefault();
        $(document).off("scroll");
        navAnchor.each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-offsetTop
        }, speed, function () {
            $(document).on("scroll", onScroll);
        });
    });

    function onScroll(event){
        var scrollPosition = $(document).scrollTop();
        navAnchor.each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href").substring(1));
            if (refElement.position().top-offsetTop <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
                navAnchor.removeClass("active");
                currentLink.addClass("active");
            }
            else{
                currentLink.removeClass("active");
            }
        });
    }

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true
    });
	
	$('.aff_btn_modal').on('click', function (e) {
        e.preventDefault();
        var href = $(this).attr('href');

        var width = $(window).width();
        if(width > 480){
            $(href).modal();
        }
    });
	
	$('.navbar-right .buy-now').on('click', function (e) {
		ga('send', 'event', 'Header Button', 'Click');
	});
	
	$('.pitch-button a.btn-large-orange').on('click', function (e) {
		ga('send', 'event', 'Button 1', 'Click');
	});
	
	$('.pitch-money-back-link a.btn-large-orange').on('click', function (e) {
		ga('send', 'event', 'Button 2', 'Click');
	});
	
	$('.pitch-get-started-link a.btn-large-orange').on('click', function (e) {
		ga('send', 'event', 'Button 3', 'Click');
	});
	
	
	
	
});