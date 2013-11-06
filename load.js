window.onload = setStage;

function setStage() {
var stage = new Kinetic.Stage({
    container: 'container',
    width: (window.innerWidth),
    height: 300
});
var layer = new Kinetic.Layer();
stage.add(layer);

/*
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
*/
$("#body01").click(function () {

        var image = new Image();
        image.onload = function () {
        var image2 = new Kinetic.Image({
        x: 0,
        y: 0,
        width: 350,
        height: 350,
        image: image,
        draggable: true
        });
        layer.add(image2);
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
        width: 350,
        height: 350,
        image: image,
        draggable: true
        });
        layer.add(image2);
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
        width: 350,
        height: 350,
        image: image,
        draggable: true
        });
        layer.add(image2);
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
        width: 350,
        height: 350,
        image: image,
        draggable: true
        });
        layer.add(image2);
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
        width: 350,
        height: 350,
        image: image,
        draggable: true
        });
        layer.add(image2);
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
        width: 350,
        height: 350,
        image: image,
        draggable: true
        });
        layer.add(image2);
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
        width: 350,
        height: 350,
        image: image,
        draggable: true
        });
        layer.add(image2);
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
        width: 350,
        height: 350,
        image: image,
        draggable: true
        });
        layer.add(image2);
        layer.draw();
}
image.src = "img/pic/headB02.svg";
});
}
