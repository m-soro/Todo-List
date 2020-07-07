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
// }); or avoid all of this by using just toggle class like below

// add completed class to the list
$('ul').on('click','li', (function(){ //on() will add the click event listener to non existing lists
  $(this).toggleClass('completed'); // compare to just click.
  })
);

// remove list items in list
$('ul').on('click', 'span', (function(event){ // click span to remove item
  $(this).parent().fadeOut(300, function(){ //.parent will remove the span's parent's which is the list.
    $(this).remove();
  });
  event.stopPropagation(); // added event and event.stopPropagation to disable event bubbling.
  })
);

// add input in the list
$("input[type='text']").keypress(function(event){
  if(event.which === 13){ // 13 is the key value of enter
    let toDoInput = $(this).val(); // take the input and save it on a variable.
    $(this).val(''); // clear the text area
    $('ul').append('<li><span><i class="fa fa-trash"></i></span> '+ toDoInput +'</li>') // append the to do variable in the list.
  }
});

// toggle the input box by clicking the clipboad icon
$('.fa-clipboard-list').click(function(){
  $("input[type='text']").fadeToggle();
});
