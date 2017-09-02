$(function() {

    var injectVideo = function(videoUrl) {
        $('body').prepend(`
            <div id="longVideo" style="position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;width:100%;height:100%;background-color: black;">
                <div style="padding: 10px;">
                    <a href="${videoUrl}" target="_blank">${videoUrl}</a>
                    <a href="javascript:void(0)" style="float: right;" id="closeLargeVideo">Close</a>
                </div>
                    <video autoplay width="100%" height="90%" controls>
                        <source src="${videoUrl}" type="video/mp4">
                    </video>
            </div>`);
    };

    var checkForVideo = function() {
        if ($('.VideoTooLargeError').is(':visible') || $('.VideoTooLongError').is(':visible')) {
            $('.VideoTooLargeError .options .button, .VideoTooLongError .options .button').click();

            var videoUrl = $('.ext-video:not(.prev-node, .next-node, .preloaded-node) .preload-image img').attr('src');
            videoUrl = videoUrl.split('?')[0]; //clean url
            injectVideo(videoUrl);
        }
    };

    setInterval(checkForVideo, 500);

    $(document).on('click', '#closeLargeVideo', function() {
        $('#longVideo').remove();
    })
});
