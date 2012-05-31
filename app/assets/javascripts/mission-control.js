$().ready(function() {
	// $('body').tubular('4HDBHelnX4Y','wrapper');
	// $('body').tubular('OXxtB8H2ULU','wrapper');
	$('body').tubular('7o01khDcg84','pattern');
	// f-UGhWj1xww cool sepia hd
	// 49SKbS7Xwf4 beautiful barn sepia
	
	// Play/Pause
	$('#videoPause').click(function() {
		if ($(this).hasClass('videoPaused')) {
			ytplayer.playVideo();
			$(this).removeClass('videoPaused');
		} else {
			ytplayer.pauseVideo();
			$(this).addClass('videoPaused');
		}
		return false;
	});
	
	// Mute/Unmute
	$('#videoMute').click(function() {
		if ($(this).hasClass('videoMute')) {
			ytplayer.mute();
			$(this).removeClass('videoMute');
		} else {
			ytplayer.unMute();
			$(this).addClass('videoMute');
		}
		return false;
	});
	
	// Nuke video (for slow connections -- stops loading entirely)
	$('#videoStop').click(function() {
		ytplayer.stopVideo();
		ytplayer.clearVideo();
		$('#yt-container').hide();
		return false;
	});
});