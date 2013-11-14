window.onload = setStage;

function setStage() {
var stage = new Kinetic.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
});

var layer = new Kinetic.Layer();
stage.add(layer);

//Redefining the draw function
function draw(image,drag,id,name){
	if(typeof id == 'undefined') id = '';
	if(typeof name == 'undefined') name = '';
	var img = new Kinetic.Image({
		image: image,
		width: document.getElementById("container").offsetWidth,
		height: document.getElementById("container").offsetHeight,
		id: id,
		name: name
	});
	layer.add(img);
	layer.draw();

	return img;
}


    var image2 = new Kinetic.Image({
        x: 0,
        y: 0,
        width: 300,
        height: 300,
        image: image,
    });
    layer.add(image2);

var BackImg = null;
var mainImage = new Image();
mainImage.onload = function () {
    draw(mainImage,true, 'mainImageId');
};
mainImage.src = "img/Background.svg";

var mainImage2 = new Image();
mainImage2.src = 'http://www.html5canvastutorials.com/demos/assets/yoda.jpg';

$(".background").click(function () {
    var newImage = new Image();
    newImage.src = 'img/Backgrounds/' +$(this).attr('value');
    layer.get('#mainImageId')[0].setImage(newImage);
    layer.draw();
});
    
$("#changebackground").click(function () {
	layer.get('#mainImageId')[0].setImage(mainImage2);
	//BackImg.moveToTop();
	//BackImg.src = "img/pic/body01.svg";
	layer.draw();
});



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



$("#body01").click(function () {

        var image = new Image();
        image.onload = function () {
            var image2 = new Kinetic.Image({
                x: 0,
                y: 0,
                width: 150,
                height: 150,
                image: image,
                name: 'image'
                });
            var imageGroup = new Kinetic.Group({
                                       x: 0,
                                       y: 0,
                                       draggable: true
                                       });
        
            imageGroup.add(image2);
          
            // add the layer to the stage
            layer.add(imageGroup);
            addAnchors(image2, imageGroup);
            layer.draw();
        } 
image.src = "img/pic/body01.svg";
});

$("#body02").click(function () {

        var image = new Image();
        image.onload = function () {
        var image2 = new Kinetic.Image({
        x: 0,
        y: 0,
        width: 150,
        height: 150,
        image: image,
        name: 'image'
        });
        var imageGroup = new Kinetic.Group({
                                       x: 0,
                                       y: 0,
                                       draggable: true
                                       });
            imageGroup.add(image2);
        
            // add the layer to the stage
            layer.add(imageGroup);
            addAnchors(image2, imageGroup);
            layer.draw();
}
image.src = "img/pic/body02.svg";
});

$("#hand01").click(function () {

        var image = new Image();
        image.onload = function () {
        var image2 = new Kinetic.Image({
        x: 0,
        y: 0,
        width: 150,
        height: 150,
        image: image,
        name: 'image'
        });
        var imageGroup = new Kinetic.Group({
                                       x: 0,
                                       y: 0,
                                       draggable: true
                                       });
            imageGroup.add(image2);
    
            // add the layer to the stage
            layer.add(imageGroup);
            addAnchors(image2, imageGroup);
            layer.draw();
}
image.src = "img/pic/hand01.svg";
});

$("#hand02").click(function () {

        var image = new Image();
        image.onload = function () {
        var image2 = new Kinetic.Image({
        x: 0,
        y: 0,
        width: 150,
        height: 150,
        image: image,
        name: 'image'
        });
        var imageGroup = new Kinetic.Group({
                                       x: 0,
                                       y: 0,
                                       draggable: true
                                       });
            imageGroup.add(image2);
    
            // add the layer to the stage
            layer.add(imageGroup);
            addAnchors(image2, imageGroup);
            layer.draw();
}
image.src = "img/pic/hand02.svg";
});

$("#headA01").click(function () {

        var image = new Image();
        image.onload = function () {
        var image2 = new Kinetic.Image({
        x: 0,
        y: 0,
        width: 150,
        height: 150,
        image: image,
        name: 'image'
        });
        var imageGroup = new Kinetic.Group({
                                       x: 0,
                                       y: 0,
                                       draggable: true
                                       });
            imageGroup.add(image2);
    
            // add the layer to the stage
            layer.add(imageGroup);
            addAnchors(image2, imageGroup);
            layer.draw();
}
image.src = "img/pic/headA01.svg";
});

$("#headA02").click(function () {

        var image = new Image();
        image.onload = function () {
        var image2 = new Kinetic.Image({
        x: 0,
        y: 0,
        width: 150,
        height: 150,
        image: image,
        name: 'image'
        });
        var imageGroup = new Kinetic.Group({
                                       x: 0,
                                       y: 0,
                                       draggable: true
                                       });
            imageGroup.add(image2);
    
            // add the layer to the stage
            layer.add(imageGroup);
            addAnchors(image2, imageGroup);
            layer.draw();
}
image.src = "img/pic/headA02.svg";
});
$("#headB01").click(function () {

        var image = new Image();
        image.onload = function () {
        var image2 = new Kinetic.Image({
        x: 0,
        y: 0,
        width: 150,
        height: 150,
        image: image,
        name: 'image'
        });
        var imageGroup = new Kinetic.Group({
                                       x: 0,
                                       y: 0,
                                       draggable: true
                                       });
            imageGroup.add(image2);
    
            // add the layer to the stage
            layer.add(imageGroup);
            addAnchors(image2, imageGroup);
            layer.draw();
}
image.src = "img/pic/headB01.svg";
});

$("#headB02").click(function () {

        var image = new Image();
        image.onload = function () {
        var image2 = new Kinetic.Image({
        x: 0,
        y: 0,
        width: 150,
        height: 150,
        image: image,
        name: 'image'
        });
        var imageGroup = new Kinetic.Group({
                                       x: 0,
                                       y: 0,
                                       draggable: true
                                       });
            imageGroup.add(image2);
    
            // add the layer to the stage
            layer.add(imageGroup);
            addAnchors(image2, imageGroup);
            layer.draw();
}
image.src = "img/pic/headB02.svg";
});

$("#prop01").click(function () {

        var image = new Image();
        image.onload = function () {
        var image2 = new Kinetic.Image({
        x: 0,
        y: 0,
        width: 150,
        height: 150,
        image: image,
        name: 'image'
        });
        var imageGroup = new Kinetic.Group({
                                       x: 0,
                                       y: 0,
                                       draggable: true
                                       });
            imageGroup.add(image2);
    
            // add the layer to the stage
            layer.add(imageGroup);
            addAnchors(image2, imageGroup);
            layer.draw();
}
image.src = "img/pic/prop01.svg";
});


}
