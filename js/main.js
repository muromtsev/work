$( document ).ready(function() {    
    var typed = new Typed ('.heading_title #text', {
        strings: ["welcome to my little space..."],
        typeSpeed: 80,
        cursorChar: '_',
        showCursor: true,
        fadeOut: true
    
    });
    
    $('#circle').circleProgress({
    value: 0.80,
    size: 180,
    startAngle: -Math.PI / 6 * 3,
    thickness: 30,
    fill: {
      gradient: ["red"] 
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
    });
    
    $('#circle-2').circleProgress({
    value: 0.75,
    size: 180,
    startAngle: -Math.PI / 6 * 3,
    thickness: 30,
    fill: {
      gradient: ["red"] 
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
    });
    
    $('#circle-3').circleProgress({
    value: 0.40,
    size: 180,
    startAngle: -Math.PI / 6 * 3,
    thickness: 30,
    fill: {
      gradient: ["orangered"] 
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(40 * progress) + '<i>%</i>');
    });
    
    
    
    
    
    
});