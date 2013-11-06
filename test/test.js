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
image.src = "https://dl.dropboxusercontent.com/u/139992952/stackoverflow/KoolAidMan.png";


$("#addbutton").click(function () {

    // simple label
    var label = new Kinetic.Label({
        x: 20,
        y: 20,
        draggable: true
    });

    label.add(new Kinetic.Tag({
        fill: 'green'
    }));

    label.add(new Kinetic.Text({
        text: $("#newtext").val(),
        fontFamily: 'Verdana',
        fontSize: 18,
        padding: 10,
        fill: 'white'
    }));

    layer.add(label);

    layer.draw();


});

$("#addimage").click(function () {

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
image.src = "https://dl.dropboxusercontent.com/u/139992952/stackoverflow/KoolAidMan.png";
//image.src = "icon01.svg";

});

}
