function updateCorner(anchor) {
    var group = anchor.getParent();
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
    img.setPosition(topleft.getPosition());
    var width = topright.getX()-topleft.getX();
    var height = botright.getY()-topleft.getY();
    if (width && height){
        img.setSize(width,height);
        topleft.setRadius(width/3);
        botleft.setRadius(width/3);
        topright.setRadius(width/3);
        botright.setRadius(width/3);
    }
}

function addCornerAnchor(group,x,y,name)
{
    var layer = group.getLayer();
    var image = group.get('.image')[0];
    var width = image.getWidth()/3;
    var deg = 0;
    switch (name){
      case 'topright':
        deg = +90;
        break;
      case 'topleft':
        deg = 0;
        break;
      case 'botleft':
        deg = -90;
        break;
      case 'botright':
        deg = +180;
          break;
    }
    var anchor = new Kinetic.Wedge({
                                    x: x,
                                    y: y,
                                    stroke:'red',
                                    strokeWidth: 1,
                                    radius:width,
                                    angleDeg: 90,
                                    rotationDeg: deg,
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
    addCornerAnchor(imgGroup, 0,0, 'topleft');
    addCornerAnchor(imgGroup, kinImage.getWidth(), 0, 'topright');
    addCornerAnchor(imgGroup, 0,kinImage.getHeight(), 'botleft');
    addCornerAnchor(imgGroup, kinImage.getWidth(),kinImage.getHeight(), 'botright');
    
}

/*function drawImage(imageObj) {
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
                                 width: 100,
                                 height: 100,
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

imageObj.src = 'img/headA03.svg';*/
