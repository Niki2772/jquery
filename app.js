$(document).ready(function () {
    alert('Be careful! This page is making your mood better right now!:)');
   
    $('#one').click(function () { 
        $(this).addClass('active');
        $('#first').toggle();  
    });
    $('#two').click(function () { 
        $(this).addClass('active');
        $('#second').toggle();  
    });
    $('#three').click(function () { 
        $(this).addClass('active');
        $('#third').toggle();  
    });
    $('#four').mouseover(function () { 
        $('.popup').fadeOut(500);
    });
});






