jQuery(document).ready(function($) {
	var value;
	$('.pt a').hover(function() {
		value = $(this).data();
		value = '.'+value['value'];
		$(value).addClass('hover');
	}, function() {
		$(value).removeClass('hover');
	});

	$('.img-zoom').click(function(e){
		e.preventDefault();

		var href = $(this).attr('href');
		value = $(this).data('value');
		var modalTitle = $(this).data('title');
		$('.continue-link').attr("href", $(this).data('link'));

		$('.modal').show();
		$('.modal-background').show();
		
		var modalOutput = '<img src="'+href+'"/>';

		$('.modal-title').text(modalTitle);
		$('.modal-body').html(modalOutput);

		modalHeight();
		modalCenter();
	});

	$('.info').click(function(e){
		e.preventDefault();

		value = $(this).data('value');
		var modalTitle = $(this).data('title');
		$('.continue-link').attr("href", $(this).attr('href'));

		$('.modal').show();
		$('.modal-background').show();

		if(value == 'tvdefault') { 
			var modalOutput = tvdefault;
		}
		else if (value == 'enduring') {
			var modalOutput = enduring;
		}
		$('.modal-title').text(modalTitle);
		$('.modal-body').html(modalOutput);

		modalCenter();
		$('.modal').css('margin-top', '-100px');
	});

	$('.cancel-link').click(function(e){
		e.preventDefault();
		$('.modal').hide();
		$('.modal-background').hide();
	});

	$(document).keyup(function(e){
	    if(e.keyCode === 27){
	    	$('.modal').hide();
			$('.modal-background').hide();
	    }
	    else if (e.keyCode == 13) {
	    	window.location = $('.continue-link').attr('href');
	    }
	});

	var modalCenter = function() {
		var width = $('.modal').width();
		var margin = width/2;
		margin = '-' + margin+'px';
		width = width+'px';
		$('.modal').css({'margin-left' : margin, 'width' : width});
	};

	var modalHeight = function() {
		var height = $( window ).height();
		var mheight = $('.modal').height();
		var mimg = $('.modal img').height();

		if(mheight > height) {
			var marginTop = '-'+height/2+'px';
		}
		if(mimg > 500) {
			mimg = '500px';
			var marginTop = '-300px';
		}
		$('.modal').css({'margin-top' : marginTop, 'height' : height-30+'px'});
		$('.modal img').css('max-height',mimg);
	};

	var tvdefault = '<p>It looks exactly like this page, but instead of plain CSS and HTML; it\'s been converted to WordPress. Have a look at the screen shot and see what you think, or better yet.. download it and take it for a spin.</p><p>If you would like to use the same background that is in use here, it is available over at <a href="http://subtlepatterns.com/subtle-grey/" title="Subtle Grey pattern">subtle patterns</a>.</p>';
	var enduring = '<p>A beautifully simple CSS/HTML template. It\'s based on <a href="https://github.com/bmcculley/bedrock">Bedrock</a> and takes after the ever popular <a href="http://wordpress.org/themes/default">kubrick theme</a> that was the WordPress default theme for many years.';
});