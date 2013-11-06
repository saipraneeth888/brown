

window.onload = setStage;

function setStage() {
var stage = new Kinetic.Stage({
    container: 'container',
    width: 300,
    height: 300
});
var layer = new Kinetic.Layer();
stage.add(layer);


var image = new Image();
image.onload = function () {

    var image1 = new Kinetic.Image({
        x: 0,
        y: 0,
        width: 300,
        height: 300,
        image: image,
    });
    layer.add(image1);

    layer.draw();

}
image.src = "https://dl.dropboxusercontent.com/u/139992952/stackoverflow/KoolAid
Man.png";
}
/*
$("#body01").click(function () {

        var image = new Image();
        image.onload = function () {
        var image2 = new Kinetic.Image({
        x: 0,
        y: 0,
        width: 50,
        height: 50,
        image: image,
        draggable: true
        });
        layer.add(image2);
        layer.draw();
} 
image.src = "img/pic/body01.svg";
});
}*/
/*
function drawImage(imageObj) {
	var stage = new Kinetic.Stage({
	  container: "container",
	  width: (window.innerWidth),
	  height: 200
	});
	var layer = new Kinetic.Layer();

	//Darth Vader
	var darthVaderImg = new Kinetic.Image({
	  image: imageObj,
	  x: stage.getWidth() / 2 - 200 / 2,
	  y: stage.getHeight() / 2 - 137 / 2,
	  width: 200,
	  height: 137,
	  draggable: true
	});

	// add cursor styling
	darthVaderImg.on('mouseover', function() {
	  document.body.style.cursor = 'pointer';
	});
	darthVaderImg.on('mouseout', function() {
	  document.body.style.cursor = 'default';
	});

	layer.add(darthVaderImg);
	stage.add(layer);
	}
	var imageObj = new Image();
	imageObj.onload = function() {
	  drawImage(this);
	};
	imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
*/

