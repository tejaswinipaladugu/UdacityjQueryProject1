//create and display grid
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

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
  const width = $('#inputWeight').val();
  const height = $('#inputHeight').val();
  makeGrid(width, height);
  event.preventDefault();
});

//apply the selected color to each cell clicked in the grid
$('#pixelCanvas').on('click', 'td', function(evt){
  var color = $('#colorPicker').val()
  $(evt.target).css('background', color);
});
