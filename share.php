<?php

  $link = $_POST['canvasjson']
    <div id="container"></div>
    <script src="http://d3lp1msu2r81bx.cloudfront.net/kjs/js/lib/kinetic-v4.7.4.min.js"></script>
    <script>
      var link = '$link';

      // create node using json string
      var stage = Kinetic.Node.create(json, 'container');
    </script>
?>