/**
 * Created by Gerard Wesseling on 15-7-2017.
 */

var video = document.getElementsByClassName("video")[0]; // video element.
var volume = 1.0; // video volume.
var hidden = false; // bottom bar not hidden.
var subtitles = false; // subtitles disabled;
var options = false; // video options
var tooltips = true; // tooltips

video.controls = false; // disable the default player controls.

$(".video").click(function() {
    if (hidden) {
        removeSidebar();
    }else {
        if (video.paused) {
            $(".play-icon").show().fadeOut();
            play()
        } else {
            $(".pause-icon").show().fadeOut();
            pause();
        }
    }
});

$(document).on('click', '.play', function() {
    play();
});

$(document).on('click', '.pause', function() {
    pause();
});

$(".video").dblclick(function(e) {
    if( window.innerHeight == screen.height) {
        exitFullscreen();
    }else {
        fullscreen();
    }
});

$(".volume").click(function() {
    if (video.muted) {
        unmute();
    }else {
        mute();
    }
});

$(document).on('click','.full-screen',function() {
    fullscreen();
});

$(document).on('click','.exit-screen',function() {
    exitFullscreen()
});

$(document).on('mouseenter' , '.volume', function() {
    $(".volume-container").animate({
        'width': '110px'
    })
});

$(document).on('mouseleave' , '.container', function() {
    $(".volume-container").animate({
        'width': '30px'
    })
});

$(document).on('mouseenter' , '.video-container', function() {
    if (!hidden) {
        $(".bottom-bar").show();
    }
});

$(document).on('mouseleave' , '.video-container', function() {
    if (!video.paused && !options) {
        $(".bottom-bar").hide();
    }
});

$(document).on('mouseenter' , '.volume-container, .volume-slider, .time-container, .currentime, .divider, .duration', function(e) {
    e.preventDefault();
    e.stopPropagation();
});

// Tooltips
$("[data-title] > i").mousemove(function(e) {
    if (tooltips) {
        $(".tooltip-text").text($(this).parent().data("title"));
        var width = $(".tooltip").width() / 2;
        var videomargin = $(".video").offset().left;
        $(".tooltip").css('left', $(this).offset().left - videomargin - width);
        $(".tooltip").show();
    }
});

$("[data-title]").mouseleave(function(e) {
    $(".tooltip").hide();
});

$(".slider").mousemove(function(e) {
    $(".scrubber").val(calcSliderPos(e));
});

$(".slider").mouseleave(function(e) {
    $(".scrubber").val(0);
});

$(".slider").hover(
    function(e) {
       $(this).addClass("active");
    }, function(e) {
        $(this).removeClass("active");
    }
);

video.addEventListener("timeupdate",function(){

    var currenttime = this.currentTime;
    var loaded = this.buffered.end(0);

    $(".slider").val(currenttime);
    $(".progress").val(currenttime + 0.50);
    $(".loaded").val(loaded + 0.50);
    $(".currentime").text(time(video.currentTime));

});

$('.slider').on("change input", function() {
    video.currentTime = $(this).val();
    $(".progress").val($(this).val());
    video.play();
});

$(".volume-slider").on("change input", function() {
    setVolume($(this).val());
});

$(".video").on('canplaythrough', function() {
    $('.slider, .progress, .loaded, .scrubber').attr('max', video.duration);
    $(".duration").text(time(video.duration));
});

$(".close-suggested-video").click(function() {
   $(".suggested-video").animate({
       width: 0
   }, 400, function() {
       $(".suggested-video > img, .suggested-video-info, .close-suggested-video").hide();
   });
});

$(".backwards").hover(
    function() {
        if (tooltips) {
            $(".previous-video").show();
        }
    }, function() {
        $(".previous-video").hide();
    }
);

$(".forwards").hover(
    function() {
        if (tooltips) {
            $(".next-video").show();
        }
    }, function() {
        $(".next-video").hide();
    }
);

$(".multi-cam").hover(
    function() {
        if (tooltips) {
            $(".current-camera").show();
        }
    }, function() {
        $(".current-camera").hide();
    }
);

$(".multi-cam").click(function() {
    hidden = true;
    $(".bottom-bar").hide();

    var id = $(this).data("sidebar");
    $("#" + id).animate({
        width: 250
    });
});

$(".close-multi-cam").click(function() {
    removeSidebar();
});

$(".subtitles").click(function() {
    if (subtitles) {
        subtitles = false;
        $(this).removeClass("subtitles-active");
    }else {
        subtitles = true;
        $(this).addClass("subtitles-active");
    }
});

$(document).click(function() {
    options = false;
    showTooltip();
    $(".video-options").hide();
});

$(".video-options-item", ".video-options-items").click(function(e){
   e.stopPropagation();
});

$(".options").click(function(e) {
    e.stopPropagation();
    if (!options) {
        options = true;
        hideTooltip();
        $(".fa-cog").removeClass("rotate");
        $(".video-options").show();
    }else {
        options = false;
        showTooltip();
        $(".fa-cog").addClass("rotate");
        $(".video-options").hide();
    }
});

function removeSidebar() {
    $(".sidebar").animate({
        width: 0
    }, 400 , function() {
        hidden = false;
        $(".bottom-bar").show();
    })
}

function play() {
    $(".play > i, .play-icon > i").addClass("fa-pause").removeClass("fa-play");
    $(".play").addClass("pause").removeClass("play");
    $(".play-icon").addClass("pause-icon").removeClass("play-icon");
    video.play();
}

function pause() {
    $(".pause > i, .pause-icon > i").addClass("fa-play").removeClass("fa-pause");
    $(".pause").addClass("play").removeClass("pause");
    $(".pause-icon").addClass("play-icon").removeClass("pause-icon");
    video.pause();
}

function setVolume(volume) {
    video.volume = volume;
    $(".volume-slider").val(volume);
    var per = 100 / 1.0 * volume;

    $(".volume-slider").css({
        'background': '-webkit-linear-gradient(to right, white 0%, white ' + per + '% , #444 ' + per + '%, #444 100%)',
        'background': '-o-linear-gradient(to right, white 0%, white ' + per + '%, #444 ' + per + '%, #444 100%)',
        'background': '-moz-linear-gradient(to right, white 0%, white ' + per + '%, #444 ' + per + '%, #444 100%)',
        'background': 'linear-gradient(to right, white 0%, white ' + per + '%, #444 ' + per + '%, #444 100%)'
    });

    if (volume > 0.5) {
        $(".volume > i").addClass("fa-volume-up").removeClass("fa-volume-down").removeClass("fa-volume-off");
    }else if (volume < 0.5 && volume != 0) {
        $(".volume > i").addClass("fa-volume-down").removeClass("fa-volume-up").removeClass("fa-volume-off");
    }else {
        $(".volume > i").addClass("fa-volume-off").removeClass("fa-volume-up").removeClass("fa-volume-down");
    }
}

function mute() {
    video.muted = true;
    volume = video.volume;
    setVolume(0.0);
    $(".volume > i").addClass("fa-volume-off").removeClass("fa-volume-up");
    $(".volume").data("title", "Unmute");
}

function unmute() {
    video.muted = false;
    setVolume(volume);
    $(".volume > i").addClass("fa-volume-up").removeClass("fa-volume-off");
    $(".volume").data("title", "Mute");
}

function fullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }
    $(".full-screen").addClass("exit-screen").removeClass("full-screen");
    $(".theater-mode").hide();
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    $(".exit-screen").addClass("full-screen").removeClass("exit-screen");
    $(".theater-mode").show();
}

function calcSliderPos(e) {
    return (e.offsetX / e.target.clientWidth) *  parseInt(e.target.getAttribute('max'),10);
}

function time(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time - minutes * 60);
    var newTime;
    if (seconds < 10) {
        newTime = "0" + seconds.toString();
    } else {
        newTime = seconds.toString();
    }

    return minutes.toString() + ":" + newTime;
}

function hideTooltip() {
    tooltips = false;
    $(".tooltip").hide();
}

function showTooltip() {
    tooltips = true;
}