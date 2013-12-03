function updateCorner(anchor) {
    var group = anchor.getParent();
    var topleft = group.get('.topleft')[0];
    var botleft = group.get('.botleft')[0];
    var topright = group.get('.topright')[0];
    var botright = group.get('.botright')[0];
    var bound = group.get('.bound')[0];
    var anchorX = anchor.getX();
    var anchorY = anchor.getY();
    var img = group.get('.image')[0];
    var m = img.getHeight()/img.getWidth();
    switch (anchor.getName()) {
        case 'topleft':
            if ((botleft.getY()-anchorY) < m*(topright.getX()-anchorX)) {
                anchorY = -m*(topright.getX()-anchorX)+botleft.getY();
            } else {
                anchorX = 1/m*(anchorY-botleft.getY())+topright.getX();
            }
            topleft.setX(anchorX);
            topleft.setY(anchorY);
            topright.setY(anchorY);
            botleft.setX(anchorX);
            break;
        case 'topright':
            if (botright.getY()-anchorY < m*(anchorX-topleft.getX())) {
                anchorY = -m*(anchorX-topleft.getX())+botright.getY();
            } else {
                anchorX = -1/m*(anchorY-botright.getY())+topleft.getX();
            }
            topright.setX(anchorX);
            topright.setY(anchorY);
            topleft.setY(anchorY);
            botright.setX(anchorX);
            break;
        case 'botleft':
            if (anchorY-topleft.getY() < m*(botright.getX()-anchorX)) {
                anchorY = m*(botright.getX()-anchorX)+topleft.getY();
            } else {
                anchorX = -1/m*(anchorY-topleft.getY())+botright.getX();
            }
            botleft.setX(anchorX);
            botleft.setY(anchorY);
            topleft.setX(anchorX);
            botright.setY(anchorY);
            break;
        case 'botright':
            if (anchorY-topright.getY() < m*(anchorX-botleft.getX())) {
                anchorY = m*(anchorX-botleft.getX())+topright.getY();
            } else {
                anchorX = 1/m*(anchorY-topright.getY())+botleft.getX();
            }
            botright.setX(anchorX);
            botright.setY(anchorY);
            topright.setX(anchorX);
            botleft.setY(anchorY);
            break;
    }
    img.setPosition(topleft.getPosition());
    bound.setPosition(topleft.getPosition());
    var width = topright.getX()-topleft.getX();
    var height = botright.getY()-topleft.getY();
    if (width && height){
        img.setSize(width,height);
        bound.setSize(width,height);
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
                                    y: y,/*
                                    stroke:'red',
                                    strokeWidth: 1,*/
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
    switch (name) {
      case 'topleft':
        anchor.setDragBoundFunc(function(pos) {
                                var botright = group.get('.botright')[0];
                                var minX = botright.getAbsolutePosition().x-30;
                                var minY = botright.getAbsolutePosition().y-30;
                                var maxX = botright.getAbsolutePosition().x-300;
                                var maxY = botright.getAbsolutePosition().y-300;
                                var X, Y;
                                if (minX >= pos.x && maxX <= pos.x) {
                                    X = pos.x;
                                } else if(minX < pos.x) {
                                    X = minX;
                                } else if(maxX > pos.x) {
                                    X = maxX;
                                }
                                if (minY >= pos.y && maxY <= pos.y) {
                                    Y = pos.y;
                                } else if(minY < pos.y) {
                                    Y = minY;
                                } else if(maxY > pos.y) {
                                    Y = maxY;
                                }
                                return {x:X, y:Y};
        });
        break;
      case 'botright':
      anchor.setDragBoundFunc(function(pos) {
                              var topleft = group.get('.topleft')[0];
                              var minX = topleft.getAbsolutePosition().x+30;
                              var minY = topleft.getAbsolutePosition().y+30;
                              var maxX = topleft.getAbsolutePosition().x+300;
                              var maxY = topleft.getAbsolutePosition().y+300;
                              var X, Y;
                              if (minX <= pos.x && maxX >= pos.x) {
                                X = pos.x;
                              } else if (minX > pos.x) {
                                X = minX;
                              } else if (maxX < pos.x) {
                                X = maxX;
                              }
                              if (minY <= pos.y && maxY >= pos.y) {
                                Y = pos.y;
                              } else if (minY > pos.y) {
                                Y = minY;
                              } else if (maxY < pos.y) {
                                Y = maxY;
                              }
                              return {x:X, y:Y};
        });
        break;
      case 'botleft':
            anchor.setDragBoundFunc(function(pos) {
                              var topright = group.get('.topright')[0];
                              var minX = topright.getAbsolutePosition().x-30;
                              var minY = topright.getAbsolutePosition().y+30;
                              var maxX = topright.getAbsolutePosition().x-300;
                              var maxY = topright.getAbsolutePosition().y+300;
                              var X, Y;
                              if (minX >= pos.x && maxX <= pos.x) {
                                X = pos.x;
                              } else if (minX < pos.x) {
                                X = minX;
                              } else if (maxX > pos.x) {
                                X = maxX;
                              }
                              if (minY <= pos.y && maxY >= pos.y) {
                                Y = pos.y;
                              } else if (minY > pos.y) {
                                Y = minY;
                              } else if (maxY < pos.y) {
                                Y = maxY;
                              }
                              return {x:X, y:Y};
                              });
            break;
      case 'topright':
      anchor.setDragBoundFunc(function(pos) {
                              var botleft = group.get('.botleft')[0];
                              var minX = botleft.getAbsolutePosition().x+30;
                              var minY = botleft.getAbsolutePosition().y-30;
                              var maxX = botleft.getAbsolutePosition().x+300;
                              var maxY = botleft.getAbsolutePosition().y-300;
                              var X, Y;
                              if (minX <= pos.x && maxX >= pos.x) {
                                X = pos.x;
                              } else if (minX > pos.x) {
                                X = minX;
                              } else if (maxX < pos.x) {
                                X = maxX;
                              }
                              if (minY >= pos.y && maxY <= pos.y) {
                                Y = pos.y;
                              } else if (minY < pos.y) {
                                Y = minY;
                              } else if (maxY > pos.y) {
                                Y = maxY;
                              }
                              return {x:X, y:Y};
                              });
        break;
    }
    group.add(anchor);
    
}

function addImgBound(group, width, height, name)
{
    var bound = new Kinetic.Rect({
                             x: 0,
                             y: 0,
                             width: width,
                             height: height,
                             name: name,
                             stroke: 'black',
                             opacity: 0
                             });
    group.add(bound);
    var tween = new Kinetic.Tween({
                                   node: bound,
                                   duration: 0.5,
                                   opacity: 1
    })
    bound.on('mousedown touchstart',function() {
             tween.play();
             });
    bound.on('mouseup touchend',function() {setTimeout(function() {tween.reverse();}, 2000);
             });
}

function addAnchors(kinImage, imgGroup) {
    addImgBound(imgGroup, kinImage.getWidth(), kinImage.getHeight(),'bound');
    addCornerAnchor(imgGroup, 0,0, 'topleft');
    addCornerAnchor(imgGroup, kinImage.getWidth(), 0, 'topright');
    addCornerAnchor(imgGroup, 0,kinImage.getHeight(), 'botleft');
    addCornerAnchor(imgGroup, kinImage.getWidth(),kinImage.getHeight(), 'botright');
    
}


/*
function drawImage(imageObj) {
=======
/*function drawImage(imageObj) {
>>>>>>> bb8898eb8639641ad9de9e8cc54c0d4ac64432d5
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

imageObj.src = 'img/pic/headA03.svg';
*/