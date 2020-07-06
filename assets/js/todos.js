//  check to-dos by clicking by selecting all list element

//  $('li').click(function(){
//    $(this).css('color','grey');
//    $(this).css('text-decoration', 'line-through');
//  }); or you can create an object with all the style properties.

// $('li').click(function(){ // if li is gray, turn it black, else, turn it gray.
//   if($(this).css('color') === 'rgb(128, 128, 128)'){
//      $(this).css({
//        color: 'black',
//        textDecoration: 'none'
//        });
//   } else {
//     $(this).css({
//       color: 'gray',
//       textDecoration: 'line-through' // text-decoration: 'line-through', wrong syntax js does not allow '-'
//     });
//   }
// }); or avoid all of this by using just toggle class

$('li').click(function(){
  $(this).toggleClass('completed');
});
