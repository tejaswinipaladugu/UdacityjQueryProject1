// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(width, height) {
  let grid='';
  for (var i=0; i<height; i++){
    grid += '<tr>';
    for (var j=0; j<width; j++){
      grid += '<td></td>';
    }
    grid += '</tr>';
  }
  $('#pixelCanvas').html(grid);
}

$('#sizePicker').submit(function(event) {
  const width = $('#inputWeight').val();
  const height = $('#inputHeight').val();
  makeGrid(width, height);
  event.preventDefault();
});

$('#pixelCanvas').on('click', 'td', function(evt){
  var color = $('#colorPicker').val()
  $(evt.target).css('background', color);
});
