$(document).ready(function(){
    // ******************
    // bowling video code
    // ******************

    /* Get iframe src attribute value i.e. video path/filename and store it in a variable */
    var bowling_url = $("#bowlingVideo").attr('src');
    
    /* Assign empty url value to the iframe src attribute when modal hide, which stop the video playing */
    $("#bowlingModal").on('hide.bs.modal', function(){
        $("#bowlingVideo").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src attribute when modal is displayed again */
    $("#bowlingModal").on('show.bs.modal', function(){
        $("#bowlingVideo").attr('src', bowling_url);
    });

    // ***************
    // golf video Code
    // ***************

    /* Get iframe src attribute value i.e. video path/filename and store it in a variable */
    var golf_url = $("#golfVideo").attr('src');

    /* Assign empty url value to the iframe src attribute when modal hide, which stop the video playing */
    $("#golfModal").on('hide.bs.modal', function(){
        $("#golfVideo").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src attribute when modal is displayed again */
    $("#golfModal").on('show.bs.modal', function(){
        $("#golfVideo").attr('src', golf_url);
    });
});
