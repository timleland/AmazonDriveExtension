var checkForVideo = function() {
    var videoElement = document.getElementsByClassName('slide-body video');
    if (videoElement.length > 1 && videoElement[0].offsetWidth > 0 && videoElement[0].offsetHeight > 0) {
        var dialog = document.getElementsByClassName('airy-video-unsupported-dialog');
        if (dialog.length == 1) {
            dialog[0].parentNode.removeChild(dialog[0]);
        }

        var controls = document.getElementsByClassName('airy-controls-container');

        if (controls.length == 1) {
            controls[0].style.opacity = 100;
            controls[0].style.visibility = 'visible';
        }

        var videoElement = document.getElementsByTagName('video')[0];
        var newSrc = videoElement.getAttribute('src');
        if (newSrc && newSrc.includes('/alt/video?y=720')) {
            newSrc = newSrc.replace('/alt/video?y=720', '');
            videoElement.setAttribute('src', newSrc);
        }
    }
};

setInterval(checkForVideo, 500);
