window.onload = init;
//window.onload = init;
function init(){
    setStage(0);
  //  setStage(1);
 //   setStage(2);
}
var stage = new Array();
var layer = new Array();

function setStage(m) {
    var c = 'container';
    var id ="div#container";
    if((m==1)||(m==2)){
                c = c+m;
                id = id+m;
    }
 stage[m] = new Kinetic.Stage({
    container: c,
    width: window.innerWidth,
    height: window.innerHeight
});
//alert(stage.getX()+''+stage.getY());

var tooltip = new Opentip(
    id, //target element 
    "Double click to delete", // title
    {
        showOn: null // I'll manually manage the showOn effect
    }
);
var tooltip2 = new Opentip(
    id, //target element 
    "Double tap to delete", // title
    {
        showOn: null // I'll manually manage the showOn effect
    }
);
 layer[m] = new Kinetic.Layer();
stage[m].add(layer[m]);

//Redefining the draw function
function draw(image,drag,id,name){
    if(typeof id == 'undefined') id = '';
    if(typeof name == 'undefined') name = '';
    var img = new Kinetic.Image({
        image: image,
        draggable: drag,
        width: document.getElementById(c).offsetWidth,
        height: document.getElementById(c).offsetHeight,
        id: id,
        name: name
    });
    layer[m].add(img);
    layer[m].draw();

    return img;
}


    var image2 = new Kinetic.Image({
        x: 0,
        y: 0,
        width: 300,
        height: 300
     //   image: image,
    });
    layer[m].add(image2);

var BackImg = null;
var mainImage = new Image();
mainImage.onload = function () {
    draw(mainImage,false, 'mainImageId');
};
mainImage.src = "img/Background.svg";

var mainImage2 = new Image();
mainImage2.src = 'http://www.html5canvastutorials.com/demos/assets/yoda.jpg';

if((m!=1)&&(m!=2))
    {
$(".background").click(function () {
    var newImage = new Image();
    newImage.src = 'img/Backgrounds/' +$(this).attr('value');
  //  alert(layer[counter-1]);
    layer[counter-1].getChildren().filter(function(x) { return x.attrs.id == "mainImageId";})[0].setImage(newImage);
    //layer[counter-1].find('#mainImageId')[0].setDraggable(false);
    layer[counter-1].draw();
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
        name: "caption",
        fill: 'white'
    }));
    layer[counter-1].add(label);
    layer[counter-1].draw();
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
            layer[counter-1].add(imageGroup);
            addAnchors(image2, imageGroup);
            layer[counter-1].draw();
           
        } 
image.src = "img/characters/character1.svg";
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
            
            layer[counter-1].add(imageGroup);
            
            addAnchors(image2, imageGroup);
            layer[counter-1].draw();
}
image.src = "img/characters/character2.svg";
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
            layer[counter-1].add(imageGroup);
            
            addAnchors(image2, imageGroup);
            layer[counter-1].draw();
}
image.src = "img/characters/character3.svg";
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
            layer[counter-1].add(imageGroup);
            
            addAnchors(image2, imageGroup);
            layer[counter-1].draw();
}
image.src = "img/characters/character4.svg";
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
            layer[counter-1].add(imageGroup);
            
            addAnchors(image2, imageGroup);
            layer[counter-1].draw();
}
image.src = "img/characters/character5.svg";
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
            layer[counter-1].add(imageGroup);
            
            addAnchors(image2, imageGroup);
            layer[counter-1].draw();
}
image.src = "img/characters/character6.svg";
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
            layer[counter-1].add(imageGroup);
            
            addAnchors(image2, imageGroup);
            layer[counter-1].draw();
}
image.src = "img/characters/character1.svg";
});
//a
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
            layer[counter-1].add(imageGroup);
            
            addAnchors(image2, imageGroup);
            layer[counter-1].draw();
}
image.src = "img/characters/character1.svg";
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
            layer[counter-1].add(imageGroup);
            
            addAnchors(image2, imageGroup);
            layer[counter-1].draw();
}
image.src = "img/characters/character2.svg";
});
    }    
layer[m].on("mouseover", function(evt) {
    var shape = evt.targetNode;
    if(shape.getName()=="image" || shape.getName() == "caption" || shape.getName() == "bound")
    tooltip.show();
});
layer[m].on("touchstart", function(evt) {
    var shape = evt.targetNode;
    if(shape.getName()=="image" || shape.getName() == "caption" || shape.getName() == "bound")
    tooltip2.show();
});


layer[m].on("mouseout", function(evt) {
    var shape = evt.targetNode;
    tooltip.hide();
});
layer[m].on("touchend", function(evt) {
    var shape = evt.targetNode;
    tooltip2.hide();
});


layer[m].on('dblclick', function(evt) {
    var shape = evt.targetNode;
    if(shape.getName()=="image" || shape.getName() == "caption" || shape.getName() == "bound"){
        var group = shape.getParent();
        group.remove();
        layer[counter-1].draw();  
    }
}); 
layer[m].on('dbltap', function(evt) {
    var shape = evt.targetNode;
    if(shape.getName()=="image" || shape.getName() == "caption" || shape.getName() == "bound"){
        var group = shape.getParent();
        group.remove();
        layer[counter-1].draw();  
    }
});
document.getElementById('save').addEventListener('click', function() {
    var stageJoin = new Kinetic.Stage({
    container:"containerJoin",
    width: document.getElementById(c).offsetWidth*3,
    height: document.getElementById(c).offsetHeight
    });
    stageJoin.add(layer[0]);
    var layer1=layer[1];
    var layer2=layer[2];
    layer[1].setX(document.getElementById(c).offsetWidth);
  //  layer[1].setX(600);
    layer[2].setX(document.getElementById(c).offsetWidth*2);
    stageJoin.add(layer[1]);
    stageJoin.add(layer[2]);
        stageJoin.toDataURL({
          callback: function(dataUrl) {
            //window.open(dataUrl);
            //alert(dataUrl+"clicked");
            $.ajax({
                type: "POST",
                url: "save.php",
                data: { 
                   imgBase64: dataUrl
                }
                }).done(function(o) {
                console.log('saved');
                        }).done(function( data ) {
                                window.location.href = 'http://story-boarder.herokuapp.com/Test/' + data;
                                });
          }
        });
    }, false);
}
