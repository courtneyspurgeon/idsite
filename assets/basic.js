$(function() {

  var timer_int_hash = {
    likes: 7000,
    done: 11000,
    iam: 8000
  }

  var timer_hash = {
    likes:  setInterval(function() {
      next_content('likes');
    }, timer_int_hash['likes']),
    done: setInterval(function() {
      next_content('done');
    }, timer_int_hash['done']),
    iam: setInterval(function() {
      next_content('iam');
    }, timer_int_hash['iam'])
  }


  function next_content(div_id) {
    fade_int = 400
    parent = $('#'+div_id);
    // hide current, show next
    parent.find('.current').each(function() {
      $(this).fadeOut(fade_int).removeClass('current');
      if ($(this).next().length !== 0) {
        $(this).next().delay(fade_int).fadeIn(fade_int).addClass('current');
      } else {
        $(this).parent().children().first().delay(fade_int).fadeIn(fade_int).addClass('current');
      }
    });
  }
  
  //forward one on click
  $(".tile_wrap.rotate").on("click", function(event){
    id = $(this).attr('id');
    clearInterval(timer_hash[id]);
    next_content(id);
  });
  
  // Pause carousel when hovered over
  $(".tile_wrap.rotate").on("mouseenter", function(event){
    id = $(this).attr('id');
    clearInterval(timer_hash[id]);
  });

  // resume when hover ends
  $(".tile_wrap.rotate").on("mouseleave", function(event){
    id = $(this).attr('id')
    timer_hash[id] = setInterval(function() {
      next_content(id);
    }, timer_int_hash[id]);
  });

});