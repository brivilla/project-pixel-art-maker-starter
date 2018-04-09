// Select color input

var color = $("#colorPicker").val();




// Select size input
// When size is submitted by the user, call makeGrid()

$("input[type = 'submit']").on('click', function(event) {
	event.preventDefault();
	
	var height = $("#inputHeight").val();
	var width = $("#inputWeight").val();

	$("pixelCanvas").empty();

	makeGrid(height, width);
});


function makeGrid(height, width) {

var canvas = document.getElementById("pixelCanvas");
//height//
 for (var i = 0; i < height; i++) {
    // creates a table row tr//
    var row = canvas.insertRow();

	
//width  td//
 for (var j = 0; j < width; j++) {
	var cell = $("tr").last().append($("<td></td>"));
		}
	}	
};

$('#pixelCanvas').on('click', 'td', function(){
	$(this).css("background-color",$("#colorPicker").val());
});


