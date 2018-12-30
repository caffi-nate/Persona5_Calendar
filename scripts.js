<script>
			let isDayTime = true;
			let currentDay = 0;

			function toggleBackground(){
				const overlayImages = document.querySelectorAll('.timeOfDay');
				const weekdaySprite = document.querySelector('.weekday-sprite');
				console.log(weekdaySprite);


				isDayTime = !isDayTime;

				overlayImages.forEach(overlayImage => {
					if (isDayTime){
						overlayImage.classList.remove('night');
						currentDay = (currentDay + 1) % 7;
					}
					else {
						overlayImage.classList.add('night');
					}
				});


				// 191 width, 74 height

				let positionString = "";
				switch(currentDay){
					case 0: positionString = "0px -0px"; break; // Monday
					case 1: positionString = "-191px -0px"; break; // Tuesday
					case 2: positionString = "-382px -0px"; break; // Wednesday
					case 3: positionString = "-0px -74px"; break; // Thursday
					case 4: positionString = "-191px -74px"; break; // Friday
					case 5: positionString = "-382px -74px"; break; // Saturday
					case 6: positionString = "-0px -148px"; break; // Sunday
				}

				weekdaySprite.style.backgroundPosition =  positionString;
				console.log(positionString);

				//console.log("Daytime: " + isDayTime);
				console.log(currentDay);
			};



			function moveSprite(e){
				
				const weekdaySprite = document.querySelector('.weekday-sprite');

				// get the background position from the css and split it into 2 integers
				const backgroundPos = getComputedStyle(weekdaySprite).backgroundPosition;
				let left =  parseInt(backgroundPos.split(" ")[0].replace(/px/,""));
				let top = parseInt(backgroundPos.split(" ")[1].replace(/px/,"")); 

				console.log(top);
				console.log(left);


				//let topPixels = parseInt(topString.replace(/px/,""));

				/*
				const topString = getComputedStyle(weekdaySprite).top;
				const leftString = getComputedStyle(weekdaySprite).left;

				
				let leftPixels = parseInt(leftString.replace(/px/,""));

				console.log(topPixels);
				console.log(leftPixels);
				*/
				let x_movement = 0;
				let y_movement = 0;
				const moveSpeed = 2;
				



				if (e.key == "ArrowRight"){
					x_movement = moveSpeed;
					//console.log(e);
				}
				else if (e.key == "ArrowLeft"){
					x_movement = -moveSpeed;
					//console.log(e);
				}
				else if (e.key == "ArrowUp"){
					y_movement = -moveSpeed;
					//console.log(e);
				}
				else if (e.key == "ArrowDown"){
					y_movement = moveSpeed;
					//console.log(e);
				}
				top += y_movement;
				left += x_movement;

				//(parseInt("40px".replace(/px/,""))+60)+"px";


				weekdaySprite.style.backgroundPosition = `${left}px ${top}px`;
				//weekdaySprite.style.left = `${leftPixels}px`;

				
			}


			window.addEventListener('mousedown', toggleBackground);
			document.addEventListener('keydown', moveSprite);

		</script>