var clicked = 0;
	//click function to animate all objects
	function danceFunction(){
		if(clicked == 0){
			var animation = ["scale", "rotate"];
			var count = animation.length;
			var finalAnim;
			
			$(".box").each(function(index){	
				var randomVar = Math.random()*2;
				var selectedNum = Math.floor((randomVar));
					finalAnim =animation[selectedNum];	
				$(this).addClass(finalAnim);
			});
		
			setTimeout(function(){
				$(".box").each(function(index){
					for(i = 0; i < animation.length; i++){
						if($(this).hasClass(animation[i])){
							finalAnim = animation[i];
							$(this).removeClass(finalAnim);
							i = animation.length;
						}
					}
				
				});
				
				clicked = 0;
				
			}, 2000);
			
			
			clicked = 1;
			
	
	
			
			
				//$(".box").addClass("scale");
				//flag variable so user can't spam click which potentially disjoints the animation
			}
	}