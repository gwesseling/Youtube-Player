<html>
    <head>
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    </head>
    <body>
        <div class="video-container">
            <video class="video" src="video/pubg.mp4" autoplay></video>
            <div class="info">
                <i class="fa fa-info-circle" aria-hidden="true"></i>
            </div>
            <div id="multi-cam" class="sidebar">
                <i class="fa fa-times close-multi-cam" aria-hidden="true"></i>
                <p class="sidebar-title">Switch camera</p>
                <div class="sidebar-item active">
                    <div class="sidebar-img-overlay"></div>
                    <img class="" src="img/nieck.jpg">
                    <p class="sidebar-item-text">Main Camera</p>
                </div>
                <div class="sidebar-item">
                    <div class="sidebar-img-overlay"></div>
                    <img class="" src="img/kavun.jpg">
                    <p class="sidebar-item-text">Kavuns's Camera</p>
                </div>
            </div>
            <div class="pause-icon">
                <i class="fa fa-pause fa-2x" aria-hidden="true"></i>
            </div>
            <div class="suggested-video">
                <img src="img/placeholder.jpg">
                <div class="info-container suggested-video-info">
                    <p class="suggested-by">Recommended video by ANewHunter</p>
                    <p class="suggested-title">XSWEG EXPOSED! GOING WRONG IN DA HOOD! WITH POLICE!</p>
                </div>
                <i class="fa fa-times close-suggested-video" aria-hidden="true"></i>
            </div>
            <div class="previous-video">
                <img src="img/nieck.jpg">
                <div class="info-container">
                    <p class="video-type">Vorige</p>
                    <p class="video-title">Overwatch Easter Egg - Anniversary Update</p>
                </div>
            </div>
            <div class="current-camera">
                <img src="img/nieck.jpg">
                <div class="info-container">
                    <p class="video-type">Switch camera</p>
                    <p class="video-title">1 out of 2 watching</p>
                </div>
            </div>
            <div class="next-video">
                <img src="img/kavun.jpg">
                <div class="info-container">
                    <p class="video-type">Volgende</p>
                    <p class="video-title">Rocket League - Odds of this happening...</p>
                </div>
            </div>
            <div class="video-options">
                <ul class="video-options-items">
                    <li class="video-options-item">
                        <p class="video-options-title">Notes</p>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="switch-slider round"></span>
                        </label>
                    </li>
                    <li class="video-options-item">
                        <p class="video-options-title">Speed</p>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <p class="video-options-value">Normal</p>
                    </li>
                    <li class="video-options-item">
                        <p class="video-options-title">Subtitles</p>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <p class="video-options-value">Off</p>
                    </li>
                    <li class="video-options-item">
                        <p class="video-options-title">Quality</p>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <p class="video-options-value">720p60</p>
                    </li>
                </ul>
            </div>
            <div class="tooltip">
                <p class="tooltip-text">test</p>
            </div>
            <div class="bottom-bar">
                <input class="range slider" type="range" value="0">
                <progress class="progress" value="0"></progress>
                <progress class="loaded" value="0"></progress>
                <progress class="scrubber" value="0"></progress>
                <div class="player-left-controls">
                    <div class="backwards">
                        <i class="fa fa-step-backward" aria-hidden="true"></i>
                    </div>
                    <div class="pause">
                        <i class="fa fa-pause" aria-hidden="true"></i>
                    </div>
                    <div class="forwards">
                        <i class="fa fa-step-forward" aria-hidden="true"></i>
                    </div>
                    <div class="container">
                        <div class="volume-container">
                            <div class="volume" data-title="Mute">
                                <i class="fa fa-volume-up" aria-hidden="true"></i>
                            </div>
                            <input class="range volume-slider" type="range" step="0.05" max="1.0" value="1.0">
                        </div>
                        <div class="time-container">
                            <p class="currentime">0:00</p>
                            <p class="divider">/</p>
                            <p class="duration">0:00</p>
                        </div>
                    </div>
                </div>
                <div class="player-right-controls">
                    <div class="subtitles" data-title="Subtitles">
                        <i class="fa fa-cc" aria-hidden="true"></i>
                    </div>
                    <div class="options" data-title="Options">
                        <i class="fa fa-cog rotate" aria-hidden="true"></i>
                    </div>
                    <div class="multi-cam" data-sidebar="multi-cam">
                        <i class="fa fa-arrows-h" aria-hidden="true"></i>
                    </div>
                    <div class="theater-mode" data-title="Theater mode">
                        <i class="fa fa-window-maximize" aria-hidden="true"></i>
                    </div>
                    <div class="full-screen" data-title="Fullscreen">
                        <i class="fa fa-expand" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/main.js"></script>
    </body>
</html>