$(function() {

  function cycle_content(parent_div, fade_int) {
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
  
  //forward one on title click
  $(".tile_wrap.cycle").on("click", ".tile_title", function(event){
    parent = $(this).parents('.tile_wrap');
    cycle_content(parent, 300);
  });

  //periodically cycle a set
  cycle_timer = setInterval(function() {
    cycle_sets = $('.cycle');
    rand_index = Math.floor((Math.random()*cycle_sets.length));
    cycle_parent = $(cycle_sets[rand_index]);

    //do not rotate if div is hovered over
    if (!cycle_parent.hasClass('hover')) {
      cycle_content(cycle_parent, 700);
    }
  }, 8000);

  //add hover class when hovered
  $(".tile_wrap").on("mouseenter", function(){
    $(this).addClass('hover');
  }).on("mouseleave", function(){
    $(this).removeClass('hover');
  });

  //I pretend this makes spam less likely
  mail = 'spurgeon.cj' + "@" + 'gmail.com'
  $('.fill_out_email').html(mail).attr('alt', mail);

  //add hover class when hovered
  $("#contact").on("mouseenter", "img", function(){
    text = $(this).attr('alt')
    $('#contact aside span').html(text);
  }).on("mouseleave", function(){
    text = $('#contact aside span').attr('alt');
    $('#contact aside span').html(text);
  });


});