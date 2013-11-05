function updateBar(anchor) {
    var group = anchor.getParent();
    var top = group.get('.top')[0];
    var bot = group.get('.bot')[0];
    var left = group.get('.left')[0];
    var right = group.get('.right')[0];
    var topleft = group.get('.topleft')[0];
    var botleft = group.get('.botleft')[0];
    var topright = group.get('.topright')[0];
    var botright = group.get('.botright')[0];
    var anchorX = anchor.getX();
    var anchorY = anchor.getY();
    alert(anchorX, anchorY);
    var img = group.get('.image')[0];
    switch (anchor.getName()) {
        case 'top':
            topleft.setY(anchorY);
            topright.setY(anchorY);
            break;
        case 'left':
            topleft.setX(anchorX);
            botleft.setX(anchorX);
            break;
        case 'right':
            topright.setX(anchorX);
            botright.setX(anchorX);
            break;
        case 'bot':
            botleft.setY(anchorY);
            botright.setY(anchorY);
            break;
    }
    top.setAttrs({
                 points:[topleft.getX(), topleft.getY(), topright.getX(), topright.getY()]
                 });
    bot.setAttrs({
                 points:[botleft.getX(), botleft.getY(), botright.getX(), botright.getY()]
                 });
    left.setAttrs({
                  points:[topleft.getX(), topleft.getY(), botleft.getX(), botleft.getY()]
                  });
    right.setAttrs({
                   points:[topright.getX(), topright.getY(), botright.getX(), botright.getY()]
                   });
    img.setPosition(topleft.getPosition());
    var width = topright.getX()-topleft.getX();
    var height = botright.getY()-topleft.getY();
    if (width && height){
        img.setSize(width,height);
    }
}


function updateCorner(anchor) {
    var group = anchor.getParent();
    var top = group.get('.top')[0];
    var bot = group.get('.bot')[0];
    var left = group.get('.left')[0];
    var right = group.get('.right')[0];
    var topleft = group.get('.topleft')[0];
    var botleft = group.get('.botleft')[0];
    var topright = group.get('.topright')[0];
    var botright = group.get('.botright')[0];
    var anchorX = anchor.getX();
    var anchorY = anchor.getY();
    var img = group.get('.image')[0];
    switch (anchor.getName()) {
        case 'topleft':
            topright.setY(anchorY);
            botleft.setX(anchorX);
            break;
        case 'topright':
            topleft.setY(anchorY);
            botright.setX(anchorX);
            break;
        case 'botleft':
            topleft.setX(anchorX);
            botright.setY(anchorY);
            break;
        case 'botright':
            topright.setX(anchorX);
            botleft.setY(anchorY);
            break;
    }
    top.setAttrs({
                 points:[topleft.getX(), topleft.getY(), topright.getX(), topright.getY()]
                 });
    left.setAttrs({
                  points:[topleft.getX(), topleft.getY(), botleft.getX(), botleft.getY()]
                  });
    bot.setAttrs({
                 points:[botleft.getX(), botleft.getY(), botright.getX(), botright.getY()]
                 });
    right.setAttrs({
                   points:[topright.getX(), topright.getY(), botright.getX(), botright.getY()]
                   });
    img.setPosition(topleft.getPosition());
    var width = topright.getX()-topleft.getX();
    var height = botright.getY()-topleft.getY();
    if (width && height){
        img.setSize(width,height);
    }
}

function addBarAnchor(group, x1, y1, x2, y2, name)
{
    var layer = group.getLayer();
    var anchor = new Kinetic.Line({
                                  points:[x1,y1,x2,y2],
                                  stroke: 'green',
                                  strokeWidth: 5,
                                  name: name,
                                  draggable: true,
                                  dragOnTop: false
                                  });
    switch (name) {
        case 'top':
        case 'bot':
            anchor.setDragBoundFunc(function(pos) {
                                    return {
                                    x: this.getAbsolutePosition().x,
                                    y: pos.y
                                    };
                                    });
            break;
        case 'left':
        case 'right':
            anchor.setDragBoundFunc(function(pos) {
                                    return {
                                    x: pos.x,
                                    y: this.getAbsolutePosition().y
                                    };
                                    });
            break;
    }
    anchor.on('mouseover', function() {
              switch (name) {
              case 'top':
              case 'bot':
                 document.body.style.cursor = 'ns-resize';
                break;
              case 'right':
              case 'left':
                document.body.style.cursor = 'ew-resize';
                break;
              }
                 });
    anchor.on('mouseout', function() {
                 document.body.style.cursor = 'default';
                 });
    anchor.on('dragmove', function() {
                 updateBar(this);
                 layer.batchDraw();
                 });
    anchor.on('mousedown touchstart', function() {
                 group.setDraggable(false);
                 this.moveToTop();
                 });
    anchor.on('dragend', function() {
                 group.setDraggable(true);
                 layer.batchDraw();
                 });
    group.add(anchor);
}

function addCornerAnchor(group,x,y,name)
{
    var layer = group.getLayer();
    var anchor = new Kinetic.Circle({
                                    x: x,
                                    y: y,
                                    stroke:'red',
                                    strokeWidth: 2,
                                    radius:8,
                                    name: name,
                                    draggable: true,
                                    dragOnTop: false
    });
    anchor.on('mouseover', function() {
              switch(name) {
                case 'topleft':
                case 'botright':
                    document.body.style.cursor = 'nwse-resize';
                    break;
                case 'botleft':
                case 'topright':
                    document.body.style.cursor = 'nesw-resize';
                    break;
              }
              });
    anchor.on('mouseout', function() {
              document.body.style.cursor = 'default';
              });
    anchor.on('dragmove', function() {
              updateCorner(this);
              layer.batchDraw();
              });
    anchor.on('mousedown touchstart', function() {
              group.setDraggable(false);
              this.moveToTop();
              });
    anchor.on('dragend', function() {
              group.setDraggable(true);
              layer.batchDraw();
              });
    group.add(anchor);
    
}

function addAnchors(kinImage, imgGroup) {
    addBarAnchor(imgGroup, 0, 0, kinImage.getWidth(), 0, 'top');
    addBarAnchor(imgGroup, 0, kinImage.getHeight(), kinImage.getWidth(), kinImage.getHeight(), 'bot');
    addBarAnchor(imgGroup, 0, 0, 0, kinImage.getHeight(), 'left');
    addBarAnchor(imgGroup, kinImage.getWidth(), 0, kinImage.getWidth(), kinImage.getHeight(), 'right');
    addCornerAnchor(imgGroup, 0,0, 'topleft');
    addCornerAnchor(imgGroup, kinImage.getWidth(), 0, 'topright');
    addCornerAnchor(imgGroup, 0,kinImage.getHeight(), 'botleft');
    addCornerAnchor(imgGroup, kinImage.getWidth(),kinImage.getHeight(), 'botright');
    
}

function drawImage(imageObj) {
    var stage = new Kinetic.Stage({
                                  container: 'container',
                                  width: 500,
                                  height: 500
                                  });
    var layer = new Kinetic.Layer();
    var imageGroup = new Kinetic.Group({
                                       x: stage.getWidth() / 2 - 200 / 2,
                                       y: stage.getHeight() / 2 - 137 / 2,
                                       draggable: true
                                       });
    
    //var imageObj = new Image();
    //  imageObj.onload = function() {
    var yoda = new Kinetic.Image({
                                 x: 0,
                                 y: 0,
                                 
                                 image: imageObj,
                                 width: 250,
                                 height: 250,
                                 name: 'image'
                                 });
    
    // add cursor styling
    yoda.on('mouseover', function() {
            document.body.style.cursor = 'pointer';
            });
    yoda.on('mouseout', function() {
            document.body.style.cursor = 'default';
            });
    // add the shape to the layer
    imageGroup.add(yoda);
    
    // add the layer to the stage
    layer.add(imageGroup);
    addAnchors(yoda, imageGroup);
    
    stage.add(layer);
}
var imageObj = new Image();
imageObj.onload = function() {
    drawImage(this);
};

imageObj.src = 'img/headB02.svg';