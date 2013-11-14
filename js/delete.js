$(function()
{
	$("#delButton").click(function()
	 {
    	document.getElementById('delButton').addEventListener('click', function() {
       	image1.remove();
      }, false);
    });
});