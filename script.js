var MAX_FLAKES = 30;
var MAX_SPEED = 25;

var FLAKE_HEIGHT = 100;
var FLAKE_WIDTH = 100;

var MAX_HEIGHT = 400;
var MAX_WIDTH = 600;


var flakes = [];

	// get reference to HTML elements
var card = document.getElementById("card");

	// start "animationloop"
document.onload = start();

	function start(){
		setInterval(animationloop, 100);
	}
	
	function animationloop(){
		
		console.log("Looping");
		
		// see if all the flakes are still on the card and remove if necessary
		checkFlakes();
		
		
		// make sure we have the MAX_FLAKES in our flakes array
		resetFlakes();
		
		// move them
		moveFlakes();
		
		
	}
	
	function checkFlakes(){
		
		for(var i = flakes.length - 1; i >= 0; i--){
			var flake = flakes[i];
			
			var current_position = parseInt(flake.style.top);
			
			if(current_position >= MAX_HEIGHT){
				//remove this flake from the flakes array
				flakes.splice(i, 1);
				
				// remove the image from the screen
				flake.parentNode.removeChild(flake);
			}
			
		}
	}	
	
	
	
	
	function resetFlakes(){
		
		for(var i = flakes.length; i < MAX_FLAKES; i++){
			var new_flake = document.createElement("img");
			
			new_flake.src = "flake.png";
			new_flake.style.position = "absolute";
			new_flake.style.top = -FLAKE_HEIGHT + "px";
			new_flake.style.left = Math.floor( Math.random() * MAX_WIDTH) + "px";
			
			new_flake.speed = Math.floor(Math.random() * MAX_SPEED) + 1;
			
			flakes.push(new_flake);
			card.appendChild(new_flake);
			
		}
		
	}
	
	function moveFlakes(){
		for(var i = 0; i < flakes.length; i++){
			var flake = flakes[i];
			
			var speed = flake.speed;
			var current_position = parseInt(flake.style.top);
			// flake.style.top = "40px"
			// parseInt(flake.style.top) = 40
			
			flake.style.top = current_position + speed + "px";
		}
	}