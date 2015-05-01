   var corners = {
      LT: {x:0,y:0},
      RT: {x:1,y:0},
      LB: {x:0,y:1},
      RB: {x:1,y:1}
   };
	$(document).ready(function() {
	    $('#kenburns-slideshow').Kenburns({
	    	images: [
	    		"images/10.jpg",
	    		"images/20.jpg",
	    		"images/30.jpg",
	    		"images/40.jpg",
					"images/50.jpg",
					"images/60.jpg",
					"images/70.jpg",
					"images/80.jpg"
	    	],
        corners: [
          [corners.LT, {x:0.5,y:0.8}],
          [corners.LT, {x:0.25,y:0.5}],
          [corners.LT, {x:0.55,y:0.5}],
          [corners.LT, {x:0.4,y:0.6}],
          [corners.LT, {x:0.4,y:0.5}]

        ],
	    	scale:0.75,
	    	duration:9500,
	    	fadeSpeed:2500,
	    	ease3d:'cubic-bezier(0.445, 0.050, 0.550, 0.950)',

	    	onSlideComplete: function(){
	    		//$('#slide-title').html(titles[this.getSlideIndex()]);
	    	},
	    	onLoadingComplete: function(){
	    		//$('#status').html("Loading Complete");
	    	}

	    });
      //$("body").click(function() {
        //open("http://www.hotel-fuenfseenblick-edersee.de/angebote/?src=banner_neu","_blank");
      //  return false;
      //});
	});
