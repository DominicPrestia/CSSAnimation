var clicked = 0;
	
	//click function to animate all objects
	function danceFunction(){
		
		if(clicked == 0){
				$(".box").addClass("rotate");
				//flag variable so user can't spam click which potentially disjoints the animation
				clicked = 1;
				setTimeout(function(){
					$(".box").removeClass("rotate");
					clicked = 0;
				}, 2000);	
			}
	}