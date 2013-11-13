window.onload = setStage;

function setStage() {
var stage = new Kinetic.Stage({
    container: 'container',
<<<<<<< HEAD
    width: (window.innerWidth),
    height: 500
=======
    width: window.innerWidth,
    height: window.innerHeight
>>>>>>> 5d67168e49b6a484b8fe0fe1b0da8e1cf6862c93
});
var layer = new Kinetic.Layer();
stage.add(layer);

var BackImg = null;
var image = new Image();
image.onload = function () {

    var image1 = new Kinetic.Image({
        x: 0,
        y: 0,
<<<<<<< HEAD
        image: image,
=======
        width: document.getElementById("container").offsetWidth,
        height: document.getElementById("container").offsetHeight,
        image: image
>>>>>>> 5d67168e49b6a484b8fe0fe1b0da8e1cf6862c93
    });
    BackImg = image1;
	layer.add(image1);

    layer.draw();

}
image.src = "img/Background.svg";

<<<<<<< HEAD
$("#changebackground").click(function () {
	BackImg.moveToTop();
	BackImg.src = "img/pic/body01.svg";
	layer.draw();
});
=======
>>>>>>> 5d67168e49b6a484b8fe0fe1b0da8e1cf6862c93

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
