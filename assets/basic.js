$(function() {

  function next_content(parent_div, fade_int) {
    // hide current, show next
    $(parent_div).find('.current').each(function() {
      $(this).fadeOut(fade_int).removeClass('current');
      if ($(this).next().length !== 0) {
        $(this).next().delay(fade_int).fadeIn(fade_int).addClass('current');
      } else {
        $(this).parent().children().first().delay(fade_int).fadeIn(fade_int).addClass('current');
      }
    });
  }
  
  //forward one on click
  $(".tile_wrap.cycle").on("click", ".tile_title", function(event){
    parent = $(this).parents('.tile_wrap');
    next_content(parent, 300);
  });

  //periodically cycle a set
  cycle_timer = setInterval(function() {
    // find all rotatable sets
    cycle_sets = $('.cycle');
    rand_index = Math.floor((Math.random()*cycle_sets.length));
    cycle_parent = $(cycle_sets[rand_index]);

    //do not rotate if cursor is in the div
    if (!cycle_parent.hasClass('hover')) {
      next_content(cycle_parent, 700);
    }
  }, 8000);

  //add hover class when hovered
  $(".tile_wrap").on("mouseenter", function(){
    $(this).addClass('hover');
  }).on("mouseleave", function(){
    $(this).removeClass('hover');
  });

  $('.fill_out_email').html('spurgeon.cj' + "@" + 'gmail.com');

});