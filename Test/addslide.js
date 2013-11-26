var counter = 1;
var hits = 0;
var hitts=0;
function addslide(m) {
    switch (m){
            case 1:
            $(".wrapper").animate({left:'-=600px'});

                //document.getElementById('container').style.display='none';
                if (hits==0){
                    setStage(1);
                    hits++;
                 }
                //document.getElementById('container1').style.display='block';
                document.getElementById('addslide2').style.display='block';
                document.getElementById('addslide3').style.display='block';
                document.getElementById('addslide1').style.display='none';
                counter = 2;
                break;
            case 2:
                $(".wrapper").animate({left:'+=600px'});
            
            	//document.getElementById('container1').style.display='none';
                //setStage();
                //document.getElementById('container').style.display='block';
                document.getElementById('addslide2').style.display='none';
                document.getElementById('addslide1').style.display='block';
                document.getElementById('addslide3').style.display='none';
                counter = 1;
                break;
            case 3:
                $(".wrapper").animate({left:'-=600px'});
            	//document.getElementById('container1').style.display='none';
                if(hitts==0){
                    setStage(2);
                    hitts++;
                }
                //document.getElementById('container2').style.display='block';
                document.getElementById('addslide2').style.display='none';
                document.getElementById('addslide4').style.display='block';
                document.getElementById('addslide3').style.display='none';
                counter = 3;
                break;
            case 4:
                $(".wrapper").animate({left:'+=600px'});
            	//document.getElementById('container2').style.display='none';
               // setStage(1);
                //document.getElementById('container1').style.display='block';
                document.getElementById('addslide4').style.display='none';
                document.getElementById('addslide2').style.display='block';
                document.getElementById('addslide3').style.display='block';
                counter = 2;
                break;
    }

}