//  check to-dos by clicking by selecting all list element

//  $('li').click(function(){
//    $(this).css('color','grey');
//    $(this).css('text-decoration', 'line-through');
//  }); or you can create an object with all the style properties.

$('li').click(function(){
  $(this).css({
    color: 'gray',
    //text-decoration: 'line-through', wrong syntax js does not allow '-'
    textDecoration: 'line-through'
  });
});
