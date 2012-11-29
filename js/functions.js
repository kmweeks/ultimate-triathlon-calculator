(function() {

  // jQuery document ready
  $(function() {
    
    // Select All text inside number inputs
    $("input[type=tel]").click(function() {
       $(this).select();
    });

    // Tabs UI
    $(window).hashchange(function(){
      var hash = location.hash;

      // Adds Selected class to proper icon
      $('nav#tabs a').each(function(){
        if(hash === '#bike') {
          $('a#bikeTab').addClass('selected');
          $('a#swimTab').removeClass('selected');
          $('a#runTab').removeClass('selected');
        } else if(hash === '#run') {
          $('a#runTab').addClass('selected');
          $('a#swimTab').removeClass('selected');
          $('a#bikeTab').removeClass('selected');
        } else {
          $('a#swimTab').addClass('selected');
          $('a#bikeTab').removeClass('selected');
          $('a#runTab').removeClass('selected');
        }

      $('section.tab').addClass('hide');

      // Removes hide class on selected tab   
      if(hash === '#bike') {
        $('section#bike').removeClass('hide');
      } else if(hash === '#run') {
        $('section#run').removeClass('hide');
      } else {
        $('section#swim').removeClass('hide');
      }

      });
    });
    $(window).hashchange();

    // Calculate Pace
    $('.calculate').click(function() {
      var hours = $('.hours').val();
      var minutes = $('.minutes').val();
      var seconds = $('.seconds').val();
      var distance = parseFloat(($('.distance').val() === "") ? (0) : ($('.distance').val()));
      var pace = parseInt(($('.pace').val() === "") ? (0) : ($('.pace').val()));
      if(hours === '' && minutes === '' && seconds === '') {
        if(distance > 0 && pace > 0) {
          seconds = (distance / (pace / 3600));
          var tm = new Date(seconds * 1000);
          hours = tm.getUTCHours();
          minutes = tm.getUTCMinutes();
          seconds = tm.getUTCSeconds();

          $('.hours').val(hours);
          $('.minutes').val(minutes);
          $('.seconds').val(seconds);
        }
      } else if(!distance) {
          hours = parseInt((hours === "") ? (0) : (hours));
          minutes = parseInt((minutes === "") ? (0) : (minutes));
          seconds = parseInt((seconds === "") ? (0) : (seconds));

          seconds += (hours * 3600) + (minutes * 60);
          
          if(seconds > 0 && pace > 0) {
            distance = pace * (seconds / 3600).toFixed(2);
            $('.distance').val(distance);
          }

        } else if(!pace) {
          hours = parseInt((hours === "") ? (0) : (hours));
          minutes = parseInt((minutes === "") ? (0) : (minutes));
          seconds = parseInt((seconds === "") ? (0) : (seconds));

          seconds += (hours * 3600) + (minutes * 60);
          if(seconds > 0 && distance > 0) {
            pace = (distance / (seconds / 3600)).toFixed(2);
            $('.pace').val(pace);
          }
        }

    });
    
  });
})(jQuery);
